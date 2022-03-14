using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace GryGiereczki.ViewModels
{
    public class RegisterVM
    {
        [Required, MaxLength(20)]
        public string Nick { get; set; }

        [Required]
        [DataType(DataType.Password)]
        [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 8)]
        [Display(Name = "Password")]
        [RegularExpression("^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$", ErrorMessage = "Passwords must be at least 8 characters and contain at 3 of 4 of the following: upper case (A-Z), lower case (a-z), number (0-9) and special character (e.g. !@#$%^&*)")]
        public string Password { get; set; }
        [DataType(DataType.Password)]
        [Display(Name = "Confirm password")]
        [Compare("Password", ErrorMessage = "The passwords do not match.")]
        public string ConfirmPassword { get; set; }
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        [Display(Name = "Email")]
        [Required, MaxLength(20)]
        public string Email { get; set; }
        [Required, MaxLength(30)]
        [Display(Name = "First Name")]
        public string Name { get; set; }
        [Required, MaxLength(20)]
        [Display(Name = "Last Name")]
        public string Lastname { get; set; }
        [Required]
        public string DateOfBirth { get; set; }
    }
}
