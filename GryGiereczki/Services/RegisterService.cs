using GryGiereczki.Data;
using GryGiereczki.Models;
using System.Collections.Generic;
using System.Linq;

namespace GryGiereczki.Services
{
    public class RegisterService
    {
        private ApplicationDbContext _context;
       
        public RegisterService(ApplicationDbContext context)
        {
            _context = context;
        }
       
        
        public void Register(User user)
        {

            var _user = new User()
            {
                Nick = user.Nick,
                Password = user.Password,
                ConfirmPassword = user.ConfirmPassword,
                Email = user.Email,
                Name = user.Name,
                Lastname = user.Lastname,
                DateOfBirth = user.DateOfBirth
            };
            _context.Users.Add(_user);
            _context.SaveChanges();
            

        }
        
       // public List<User> Test() => _context.User.ToList();
    }
}
