
﻿using System.Linq.Expressions;
using Dapper;

﻿using Dapper;

using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;

namespace backendTienda.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class productController : Controller
    {
        private readonly string _connectionstring = "Server=DESKTOP-PP5H4E5\\MSSQLSERVER02;Database=products;User Id=sa;Password=123456;TrustServerCertificate=true;";
        [HttpPost("registro")]

        public IActionResult Registro([FromBody] product products)
        {
            if (products == null)
            {
                return BadRequest("Invalid products data.");
            }

            using (var connection = new SqlConnection(_connectionstring))
            {
                var sql = "INSERT INTO products (prname, prdescription, prprice, prstock) VALUES (@name, @description, @price, @stock)";
                var rowsAffected = connection.Execute(sql, new
                {

                    products.name,
                    products.description,
                    products.price,
                    products.stock

                });

                if (rowsAffected > 0)
                {

                    return Ok("product registered successfully.");
                }
                else
                {
                    return StatusCode(500, "An error occurred while registering the product.");
                }
            }

        }

        [HttpGet("getProducts")]
        public IActionResult GetProducts()
        {
            try
            {
                using (var connection = new SqlConnection(_connectionstring))
                {
                    var sql = "SELECT id AS Id, prname AS name, prdescription AS description, prprice AS price, prstock AS stock FROM products;";

                    var products = connection.Query<product>(sql).ToList();

                    if (products == null || products.Count == 0)
                    {
                        return NotFound("No prodcuts found");
                    }

                    return Ok(products);
                }
            }
            catch(Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("delete/{id}")]
        public IActionResult Delete(int id)
        {
            using (var connection = new SqlConnection(_connectionstring))
            {
                var sql = "DELETE FROM products WHERE id = @id";
                var rowsAffected = connection.Execute(sql, new { Id = id });

                if (rowsAffected > 0)
                {
                    return Ok("Prodcuct deleted successfully.");
                }
                else
                {
                    return NotFound("product not found.");
                }
            }
        }

        [HttpPut("update/{id}")]
        public IActionResult Update(int id, [FromBody] product products)
        {
            if (products == null)
            {
                return BadRequest("Invalid product data.");
            }

            using (var connection = new SqlConnection(_connectionstring))
            {
                var sql = "" +
                    "UPDATE products SET prname = @name, prdescription = @description,prprice = @price,   prstock = @stock WHERE Id = @id";
                var rowsAffected = connection.Execute(sql, new { Id = id, products.name, products.description, products.price, products.stock });

                if (rowsAffected > 0)
                {
                    return Ok("Prodcuct updated successfully.");
                }
                else
                {
                    return NotFound("product not found.");
                }
            }
        }

    }
}
