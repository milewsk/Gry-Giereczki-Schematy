using System.ComponentModel.DataAnnotations;

namespace GryGiereczki.ViewModels
{
    public class UserEditVM
    {
        [MaxLength(20)]
        public string Nick { get; set; }
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        [MaxLength(40)]
        public string Email { get; set; }
        [MaxLength(40)]
        public string Name { get; set; }
        [MaxLength(40)]
        public string Lastname { get; set; }
        public string DateOfBirth { get; set; }
        public string Description { get; set; }
    }
}
