using GryGiereczki.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace GryGiereczki.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UserController(IConfiguration configuration)
        {
            _configuration = configuration;
        }


        [HttpGet]
        public JsonResult Get()
        {
            string query = @"
                            select Name , Lastname , Email , UserName , BirthDate , PasswordHash from
                            dbo.AspNetUsers
                            ";
                            
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon= new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand=new SqlCommand(query, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }


            return new JsonResult(table);
        }


        [HttpPost]
        public JsonResult Post(User us)
        {
            string query = @"
                            insert into dbo.AspNetUsers
                            values ( @UserName , @PasswordHash)
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                   // myCommand.Parameters.AddWithValue("@Name", us.Name);
                   // myCommand.Parameters.AddWithValue("@Lastname", us.Lastname);
                   // myCommand.Parameters.AddWithValue("@Email", us.Email);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }


            //return new JsonResult(table);
            return new JsonResult("Add Success");
        }



        [HttpPut]
        public JsonResult Put(User us)
        {
            string query = @"
                            update dbo.AspNetUsers
                            set Email = @Email
                            where Id = @Id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", us.Id);
                    myCommand.Parameters.AddWithValue("@Email", us.Email);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }


            return new JsonResult(table);
        }


        [HttpDelete("{id}")]
        public JsonResult Delete(string id)
        {
            string query = @"
                            delete from dbo.AspNetUsers
                            where Id = @Id
                            ";

            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("DefaultConnection");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(query, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }


            return new JsonResult("success delete");
        }

    }
}
