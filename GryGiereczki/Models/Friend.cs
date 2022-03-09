using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Models
{
    public class Friend
    {
        public bool IsConfirmed { get; set; }

        public int UserAId { get; set; }
        public User UserA { get; set; }
        public int UserBId { get; set; }
        public User UserB { get; set; }
    }
}
