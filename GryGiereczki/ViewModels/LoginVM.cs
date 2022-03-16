using System.Text.Json.Serialization;

namespace GryGiereczki.ViewModels
{
    public class LoginVM
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string Nick { get; set; }
    }
}
