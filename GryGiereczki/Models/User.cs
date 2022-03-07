using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Models
{
    public class User
    {
        public int Id { get; set; }
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
        [NotMapped]
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
        public string Avatar { get; set; }
        [MaxLength(200)]
        public string Description { get; set; }   
        public bool IsBanned { get; set; }
        
        public List<Report> Reports { get; set; }
        public List<Blocked> Blockeds { get; set; }
        public List<Friend> Friends { get; set; }
        public List<GameHistory> GameHistories { get; set; }

        public List<Report> Reports2 { get; set; }
        public List<Blocked> Blockeds2 { get; set; }
        public List<Friend> Friends2 { get; set; }

    }
}
