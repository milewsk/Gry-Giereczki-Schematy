using GryGiereczki.Models;
using GryGiereczki.ViewModels;

namespace GryGiereczki.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetByEmail(string emial);
        User GetByNick(string userName);
        User GetById(int id);
        User SaveUserEdit(User user);
    }
}
