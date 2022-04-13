using GryGiereczki.Models;
using GryGiereczki.Services;
using GryGiereczki.ViewModels;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;
        private readonly IEmailService _emailService;
        private readonly IConfiguration _configuration;


        //XD
        //private readonly UserManager<User> _userManager;
        public UserRepository(ApplicationDbContext context, 
            IEmailService emailService, 
            IConfiguration configuration
            //UserManager<User> userManager
            )
        {
            _context = context;
            _emailService = emailService;
            _configuration = configuration;

            //XD
            //_userManager = userManager;
        }

        public User Create(User user)
        {
            _context.Users.Add(user);
            //user.Id =
            _context.SaveChanges();
            return user;
        }

        public User GetByEmail(string emial)
        {
            return _context.Users.FirstOrDefault(u => u.Email == emial);
        }

        public User GetById(int id)
        {
            return _context.Users.FirstOrDefault(u => u.Id == id);
        }

        public User GetByNick(string nick)
        {
            return _context.Users.FirstOrDefault(u => u.Nick == nick);
        }

        public User SaveUserEdit(User user)
        {
            _context.SaveChanges();
            return user;
        }




        public async Task SendEmailConfirmationEmail(User user, string token)
        {
            string appDomain = _configuration.GetSection("Application:AppDomain").Value;
            string confirmationLink = _configuration.GetSection("Application:EmailConfirmation").Value;

            UserEmailOptions options = new UserEmailOptions
            {
                ToEmails = new List<string>() { user.Email },
                PlaceHolders = new List<KeyValuePair<string, string>>
                {
                    new KeyValuePair<string, string>("{{UserName}}", user.Nick),
                    new KeyValuePair<string, string>("{{Link}}", string.Format(appDomain + confirmationLink, user.Id, token))
                }
            };

            await _emailService.SendEmailForEmailConfirmation(options);
        }



        //XD
        /*
        public async Task ConfirmEmail(int id, string token)
        {
            await _userManager.ConfirmEmailAsync(GetById(id), token); //????????? XD
        }*/

        //2d
        public void ConfirmEmailInDataBase(int id)
        {
            User user = GetById(id);
            user.IsEmailConfirmed = true;
            _context.SaveChanges();
            //return user;
        }
    }
}
