using Microsoft.EntityFrameworkCore;

namespace WebAPI.Models
{
    public class ShopContext : DbContext
    {
        public DbSet<Shop> Shops { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Product> Products { get; set; }

        public ShopContext(DbContextOptions options) : base(options)
        {

        }
    }
}