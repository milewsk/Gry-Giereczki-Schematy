using GryGiereczki.Models;

namespace GryGiereczki.Data
{
    public interface IUserRepository
    {
        User Create(User user);
        User GetByEmail(string emial);
        User GetByNick(string userName);
        User GetById(int id);
    }
}
