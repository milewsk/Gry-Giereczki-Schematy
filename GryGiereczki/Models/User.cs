using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Models
{
    public class User
    {
        public int Id { get; set; }
        [Required, MaxLength(20)]
        public string Nick { get; set; }
        [EmailAddress(ErrorMessage = "Invalid Email Address")]
        public string Email { get; set; }
        [Required, MaxLength(30)]
        public string Name { get; set; }
        [Required, MaxLength(20)]
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
