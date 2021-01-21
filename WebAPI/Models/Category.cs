using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebAPI.Models
{
    [Table("Category")]
    public class Category
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }

        [Column("Opis")]
        [MaxLength(255)]
        public string Opis { get; set; }

        [Column("Slika")]
        [MaxLength(255)]
        public string Slika { get; set; }

        public virtual List<Product> Products { get; set; }

        [JsonIgnore]
        public Shop Shop { get; set; }
    }
}