using GryGiereczki.Data;
using GryGiereczki.Models;

namespace GryGiereczki.Services
{
    public class LoginService
    {
        public ApplicationDbContext _applicationDbContext;

        public LoginService(ApplicationDbContext applicationDbContext)
        {
            _applicationDbContext = applicationDbContext;
        }

        public void Login(User user)
        {

        }
    }
}
