using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAPI.Models
{
    [Table("Shop")]
    public class Shop
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        public virtual List<Category> Categories { get; set; }
    }
}