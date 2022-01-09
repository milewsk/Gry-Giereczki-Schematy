using GryGiereczki.Areas.Identity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Models
{
    public class Favourite
    {
        public string Id { get; set; }
        public User User { get; set; }
        public string GameId { get; set; }
        public Game Game { get; set; }
    }
}
