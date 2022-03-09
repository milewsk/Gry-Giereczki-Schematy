namespace GryGiereczki.Models
{
    public class Blocked
    {
       // public int Id { get; set; }
        public bool AisBlocked { get; set; }
        public bool BisBlocked { get; set; }


        public int UserAId { get; set; }
        public User UserA { get; set; }
        public int UserBId { get; set; }
        public User UserB { get; set; }
    }
}
