using GryGiereczki.Areas.Identity.Data;
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


        public DbSet<Favourite> Favourites { get; set; }
        public DbSet<Friend> Friends { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<GameHistory> GameHistories { get; set; }
        public DbSet<Report> Reports { get; set; }
        public object User { get; internal set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Game>().HasKey(m => m.GameId);
            modelBuilder.Entity<Report>().HasKey(m => m.ReportId);
            modelBuilder.Entity<GameHistory>().HasKey(m => m.GameHistoryId);
            modelBuilder.Entity<Favourite>().HasKey(kp => new { kp.Id, kp.GameId });
            modelBuilder.Entity<Friend>().HasKey(kp => new { kp.AId, kp.BId });

            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>()
                .HasMany(b => b.Reports)
                .WithOne();

            modelBuilder.Entity<Favourite>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.Favourite)
                .HasForeignKey(bc => bc.Id);
            modelBuilder.Entity<Favourite>()
                .HasOne(bc => bc.Game)
                .WithMany(b => b.Favourite)
                .HasForeignKey(bc => bc.GameId);
            modelBuilder.Entity<GameHistory>()
                .HasOne(bc => bc.User)
                .WithMany(b => b.GameHistory)
                .HasForeignKey(bc => bc.Id);
            modelBuilder.Entity<GameHistory>()
                .HasOne(bc => bc.Game)
                .WithMany(b => b.GameHistory)
                .HasForeignKey(bc => bc.GameId);
            //modelBuilder.Entity<Friend>()
            //    .HasOne(b => b.UserA)
            //    .WithMany(mu => mu.Friends)
            //    .HasForeignKey(b => b.AId);
            //modelBuilder.Entity<Friend>()
            //    .HasOne(b => b.UserB)
            //    .WithMany(mu => mu.Friends)
            //    .HasForeignKey(b => b.BId);
            modelBuilder.Entity<Friend>()
            .HasOne(f => f.UserA)
            .WithMany(mu => mu.MainUserFriends)
            .HasForeignKey(f => f.AId).OnDelete(DeleteBehavior.Restrict);

            modelBuilder.Entity<Friend>()
                .HasOne(f => f.UserB)
                .WithMany(mu => mu.Friends)
                .HasForeignKey(f => f.BId);
        }
    }
}
