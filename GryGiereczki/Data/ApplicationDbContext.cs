using GryGiereczki.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace GryGiereczki.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public ApplicationDbContext() { }


        public DbSet<Friend> Friends { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<GameHistory> GameHistories { get; set; }
        public DbSet<Report> Reports { get; set; }
        public DbSet<Blocked> Blockeds { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity => { entity.HasIndex(e => e.Email).IsUnique(); }); //unikalny email
            modelBuilder.Entity<User>(entity => { entity.HasIndex(e => e.Nick).IsUnique(); }); //unikalny nick
            modelBuilder.Entity<Friend>().HasKey(kp => new { kp.UserAId, kp.UserBId });
            modelBuilder.Entity<Blocked>().HasKey(kp => new { kp.UserAId, kp.UserBId });
            modelBuilder.Entity<Report>().HasKey(kp => new { kp.ReportUserId, kp.ReportedUserId });
            base.OnModelCreating(modelBuilder);


            // many to many

            modelBuilder.Entity<Blocked>()
                .HasOne(b => b.UserA)
                .WithMany(ba => ba.Blockeds)
                .HasForeignKey(bi => bi.UserAId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Blocked>()
                .HasOne(b => b.UserB)
                .WithMany(ba => ba.Blockeds2)
                .HasForeignKey(bi => bi.UserBId);




            modelBuilder.Entity<Friend>()
                .HasOne(b => b.UserA)
                .WithMany(ba => ba.Friends)
                .HasForeignKey(bi => bi.UserAId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Friend>()
                .HasOne(b => b.UserB)
                .WithMany(ba => ba.Friends2)
                .HasForeignKey(bi => bi.UserBId);



            modelBuilder.Entity<Report>()
                .HasOne(b => b.ReportUser)
                .WithMany(ba => ba.Reports)
                .HasForeignKey(bi => bi.ReportUserId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Report>()
                .HasOne(b => b.ReporedtUser)
                .WithMany(ba => ba.Reports2)
                .HasForeignKey(bi => bi.ReportedUserId);




            modelBuilder.Entity<GameHistory>()
                .HasOne(b => b.Game)
                .WithMany(ba => ba.GameHistories)
                .HasForeignKey(bi => bi.GameId);

            modelBuilder.Entity<GameHistory>()
                .HasOne(b => b.User)
                .WithMany(ba => ba.GameHistories)
                .HasForeignKey(bi => bi.UserId);

        }
    }
}
