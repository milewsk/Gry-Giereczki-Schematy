using GryGiereczki.Areas.Identity.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Models
{
    public class GameHistory
    {
        [Key]
        public string GameHistoryId { get; set; }
        public string Id { get; set; }
        public User User { get; set; }
        public string GameId { get; set; }
        public Game Game { get; set; }
        public int Score { get; set; }
        public DateTime GameDate { get; set; }
        public bool UserWon { get; set; }
    }
}
