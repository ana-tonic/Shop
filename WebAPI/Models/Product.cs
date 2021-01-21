using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace WebAPI.Models
{
    [Table("Product")]
    public class Product
    {
        [Key]
        [Column("ID")]
        public int ID { get; set; }

        [Column("Naziv")]
        [MaxLength(255)]
        public string Naziv { get; set; }

        [Column("Cena")]
        public int Cena { get; set; }

        [Column("Na stanju")]
        public int NaStanju { get; set; }

        [Column("Velicina")]
        [MaxLength(255)]
        public string Velicina { get; set; }

        [Column("Image")]
        [MaxLength(255)]
        public string Image { get; set; }

        [JsonIgnore]
        public Category Category { get; set; }
    }
}