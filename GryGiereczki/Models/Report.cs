using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace GryGiereczki.Models
{
    public class Report
    {
 
        //public int Id { get; set; }

        [Required, MaxLength(200)]
        public string Description { get; set; }



        public int ReportUserId { get; set; }       
        public User ReportUser { get; set; } //osoba zgłaszajaca

        
        public int ReportedUserId { get; set; }    
        public User ReporedtUser { get; set; } //osoba zgłoszona


    }
}
