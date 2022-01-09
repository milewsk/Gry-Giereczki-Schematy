using GryGiereczki.Models;
using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace GryGiereczki.Areas.Identity.Data
{
    public class User : IdentityUser
    {
        public bool isAdmin { get; set; }
        [JsonPropertyName("img")]
        public string Avatar { get; set; }
        [MaxLength(200)]
        public string Description { get; set; }
        [Required, MaxLength(30)]
        public string Name { get; set; }
        [Required, MaxLength(20)]
        public string Lastname { get; set; }
        public bool isBlocked { get; set; }
        [Required]
        public DateTime BirthDate { get; set; }
        public List<Report> Reports { get; set; }
        public List<Favourite> Favourite { get; set; }
        public List<GameHistory> GameHistory { get; set; }
        public List<Friend> MainUserFriends { get; set; }
        public List<Friend> Friends { get; set; }

    }
}
