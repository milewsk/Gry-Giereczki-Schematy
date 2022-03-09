using GryGiereczki.Data;
using GryGiereczki.Models;
using GryGiereczki.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace GryGiereczki.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IUserRepository _repository;
        public AuthController(IUserRepository repository)
        {
            _repository = repository;
        }

        [HttpPost("register")]
        public IActionResult Register(RegisterVM user)
        {

            var _user = new User
            {
                Nick = user.Nick,
                Password =BCrypt.Net.BCrypt .HashPassword(user.Password),
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

            if (user == null) return BadRequest(new { message = "Invalid Credentials" });

            if(!BCrypt.Net.BCrypt.Verify(loginVM.Password, user.Password))
            {
                return BadRequest(new { message = "Invalid Credentials" });
            }

            return Ok(user);
        }
    }
}
