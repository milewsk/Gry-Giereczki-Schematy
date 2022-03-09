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
        public string Nick { get; set; }
        public string Password { get; set; }
        [NotMapped]
        public string ConfirmPassword { get; set; }
        public string Email { get; set; }
        public string Name { get; set; }
        public string Lastname { get; set; }
        public string DateOfBirth { get; set; }
        public string Avatar { get; set; }
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
