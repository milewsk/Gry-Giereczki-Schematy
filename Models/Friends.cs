using GryGiereczki.Areas.Identity.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Models
{
    public class Friend
    {
        public string AId { get; set; }
        public User UserA { get; set; }
        public string BId { get; set; }
        public User UserB { get; set; }
        public bool AisBlocked { get; set; }
        public bool BisBlocked { get; set; }
        public bool isConfirmed { get; set; }
    }
}
