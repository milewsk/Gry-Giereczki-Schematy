using GryGiereczki.Models;
using System.Threading.Tasks;

namespace GryGiereczki.Services
{
    public interface IEmailService
    {
        Task SendTestEmail(UserEmailOptions userEmailOptions);
        Task SendEmailForEmailConfirmation(UserEmailOptions userEmailOptions);
    }
}