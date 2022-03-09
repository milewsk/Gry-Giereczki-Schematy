using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Models
{
    public class GameHistory
    {
        
        public int Id { get; set; }
        public int Score { get; set; }
        public DateTime GameDate { get; set; }
        public bool UserWon { get; set; }


        public int GameId { get; set; }
        public Game Game { get; set; }
        public int UserId { get; set; }
        public User User { get; set; }
    }
}
