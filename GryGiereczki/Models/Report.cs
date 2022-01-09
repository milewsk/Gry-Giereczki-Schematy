using GryGiereczki.Areas.Identity.Data;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Models
{
    public class Report
    {
        [Key]
        public string ReportId { get; set; }
        //public string Id { get; set; }
        //public User User { get; set; }
        [Required, MaxLength(200)]
        public string Description { get; set; }
    }
}
