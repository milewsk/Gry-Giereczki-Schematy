using GryGiereczki.Models;
using GryGiereczki.ViewModels;
using System.Linq;

namespace GryGiereczki.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly ApplicationDbContext _context;
        public UserRepository(ApplicationDbContext context)
        {
            _context = context;
        }

        public User Create(User user)
        {
            _context.Users.Add(user);
            user.Id = _context.SaveChanges();
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

    }
}
