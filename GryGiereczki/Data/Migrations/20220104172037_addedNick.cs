using Microsoft.EntityFrameworkCore.Migrations;

namespace GryGiereczki.Data.Migrations
{
    public partial class addedNick : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Nick",
                table: "AspNetUsers",
                maxLength: 20,
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Nick",
                table: "AspNetUsers");
        }
    }
}
