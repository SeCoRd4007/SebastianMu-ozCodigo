using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Dapper;

namespace VacacionesApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VacacionesController : Controller
    {
        private readonly string _connectionstring = "Server=DESKTOP-BE0HV4F\\MSSQLSERVER01;Database=formDB;User Id=sa;Password=12345678;TrustServerCertificate=true;";

        [HttpPost("registro")]
        public IActionResult Registro([FromBody] Vacaciones user)
        {
            if (user == null)
            {
                return BadRequest("Invalid user data.");
            }

            using (var connection = new SqlConnection(_connectionstring))
            {
                var sql = "INSERT INTO registro (nombre, apellido, correo, telefono, nomger, correoger, fechini, fechfin, notas) VALUES (@name, @lastname, @email, @phone, @mngname, @mngemail, @datestrt, @dateend, @note)";
                var rowsAffected = connection.Execute(sql, new { user.name, user.lastname, user.email, user.phone, user.mngname, user.mngemail, 
                    user.datestrt, user.dateend, user.note });

                if (rowsAffected > 0)
                {
                    return Ok("User registered successfully.");
                }
                else
                {
                    return StatusCode(500, "An error occurred while registering the user.");
                }
            }

        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] login user)
        {
            if (user == null)
            {
                return BadRequest("Invalid user data");
            }

            using (var connection = new SqlConnection(_connectionstring))
            {
                var sql = "SELECT * FROM registro WHERE apellido = @lastname AND correo = @email";
                var result = connection.QuerySingleOrDefault<login>(sql, new { user.lastname, user.email });

                if (result != null)
                {
                    return Ok("Login successful.");
                }
                else
                {
                    return Unauthorized("Invalid credentials.");
                }
            }
        }
    }
}
