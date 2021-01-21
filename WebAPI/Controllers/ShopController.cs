using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ShopController : ControllerBase
    {
        public ShopContext Context { get; set; }
        public ShopController(ShopContext context)
        {
            Context = context;
        }

        [Route("GetShops")]
        [HttpGet]
        public async Task<List<Shop>> GetShops()
        {
            return await Context.Shops.Include(p => p.Categories).ThenInclude(q => q.Products).ToListAsync();
        }

        [Route("PostShops")]
        [HttpPost]
        public async Task PostShops([FromBody] Shop shop)
        {
            Context.Shops.Add(shop);
            await Context.SaveChangesAsync();
        }

        [Route("UpdateShop")]
        [HttpPut]
        public async Task UpdateShop([FromBody] Shop shop)
        {
            Context.Update<Shop>(shop);
            await Context.SaveChangesAsync();
        }

        [Route("DeleteShop/{id}")]
        [HttpDelete]
        public async Task DeleteShop(int id)
        {
            var shop = await Context.FindAsync<Shop>(id);
            Context.Remove(shop);
            await Context.SaveChangesAsync();
        }

        [Route("PostCategory/{ShopID}")]
        [HttpPost]

        public async Task PostCategory(int ShopID, [FromBody] Category cat)
        {
            var shop = await Context.Shops.FindAsync(ShopID);
            cat.Shop = shop;
            Context.Categories.Add(cat);
            await Context.SaveChangesAsync();
        }

        [Route("PostProduct/{CategoryID}")]
        [HttpPost]
        public async Task<IActionResult> PostProduct(int CategoryID, [FromBody] Product pro)
        {
            var category = await Context.Categories.FindAsync(CategoryID);
            pro.Category = category;

            if (pro.Naziv == "" || pro.Cena < 1 || pro.NaStanju < 0 || pro.Velicina == "" || pro.Image == "")
            {
                return StatusCode(406);
            }
            else
            {
                Context.Products.Add(pro);
                await Context.SaveChangesAsync();
                int a = pro.ID;
                return Ok(a);
            }

        }

        [Route("UpdateProduct")]
        [HttpPut]
        public async Task<IActionResult> UpdateProduct([FromBody] Product product)
        {
            if (product.Naziv == "" || product.Cena < 1 || product.NaStanju < 0 || product.Velicina == "" || product.Image == "")
            {
                return StatusCode(406);
            }
            else
            {
                Context.Update<Product>(product);
                await Context.SaveChangesAsync();
                return Ok();
            }
        }

        [Route("DeleteProduct/{id}")]
        [HttpDelete]
        public async Task DeleteProduct(int id)
        {
            var product = await Context.FindAsync<Product>(id);
            Context.Remove(product);
            await Context.SaveChangesAsync();
        }
    }
}
