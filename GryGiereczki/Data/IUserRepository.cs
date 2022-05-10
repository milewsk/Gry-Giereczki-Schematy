using GryGiereczki.Models;
using GryGiereczki.ViewModels;
using System.Threading.Tasks;

namespace GryGiereczki.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetByEmail(string emial);
        User GetByNick(string userName);
        User GetById(int id);
        User SaveUserEdit(User user);
        Task SendEmailConfirmationEmail(User user, string token);



        //XDD
        //Task ConfirmEmail(int id, string token);

        //2d
        void ConfirmEmailInDataBase(int id);
    }
}
