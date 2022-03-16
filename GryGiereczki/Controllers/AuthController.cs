using GryGiereczki.Data;
using GryGiereczki.Models;
using GryGiereczki.Services;
using GryGiereczki.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace GryGiereczki.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepository _repository;
        private readonly JwtService _jwtService;
        public AuthController(IUserRepository repository, JwtService jwtService)
        {
            _repository = repository;
            _jwtService = jwtService;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterVM user)
        {
            var email = _repository.GetByEmail(user.Email);

            if (email != null) return BadRequest(new { message = "User with this email already exists" });

            var nick = _repository.GetByNick(user.Nick);

            if (nick != null) return BadRequest(new { message = "User with this nick already exists" });

            var _user = new User
            {
                Nick = user.Nick,
                Password = BCrypt.Net.BCrypt.HashPassword(user.Password),
                ConfirmPassword = BCrypt.Net.BCrypt.HashPassword(user.ConfirmPassword),
                Email = user.Email,
                Name = user.Name,
                Lastname = user.Lastname,
                DateOfBirth = user.DateOfBirth
            };


            return Created("success", _repository.Create(_user));
        }

        [HttpPost("login")]
        public IActionResult Login(LoginVM loginVM)
        {

            var user = _repository.GetByEmail(loginVM.Email);
            if (user == null)
            {
                user = _repository.GetByNick(loginVM.Nick);
                if (user == null) return BadRequest(new { message = "No user with this email or nick" });
            }

            if (!BCrypt.Net.BCrypt.Verify(loginVM.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid password" });
            }

            var jwt = _jwtService.Generate(user.Id);

            Response.Cookies.Append("jwt", jwt, new CookieOptions
            {
                HttpOnly = true
            });

            //return Ok(user);

             return Ok(new
             {
                 message = "success login"
             });
        }

        [HttpGet("user")]
        public IActionResult User()
        {
            try
            {
                var jwt = Request.Cookies["jwt"];

                var token = _jwtService.Verify(jwt);

                int userId = int.Parse(token.Issuer);

                var user = _repository.GetById(userId);

                return Ok(user);
            }
            catch (Exception _)
            {
                return Unauthorized();
            }
        }
        [HttpPost("logout")]
        public IActionResult Logout()
        {
            Response.Cookies.Delete("jwt");

            return Ok(new
            {
                message = "success logout"
            });
        }
    }
}
