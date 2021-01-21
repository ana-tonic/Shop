﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebAPI.Models;

namespace WebAPI.Migrations
{
    [DbContext(typeof(ShopContext))]
    [Migration("20210105155200_V1")]
    partial class V1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .UseIdentityColumns()
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.1");

            modelBuilder.Entity("WebAPI.Models.Category", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .UseIdentityColumn();

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.Property<string>("Opis")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Opis");

                    b.Property<int?>("ShopID")
                        .HasColumnType("int");

                    b.Property<string>("Slika")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Slika");

                    b.HasKey("ID");

                    b.HasIndex("ShopID");

                    b.ToTable("Category");
                });

            modelBuilder.Entity("WebAPI.Models.Product", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .UseIdentityColumn();

                    b.Property<int?>("CategoryID")
                        .HasColumnType("int");

                    b.Property<int>("Cena")
                        .HasColumnType("int")
                        .HasColumnName("Cena");

                    b.Property<string>("Image")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Image");

                    b.Property<int>("NaStanju")
                        .HasColumnType("int")
                        .HasColumnName("Na stanju");

                    b.Property<string>("Naziv")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Naziv");

                    b.Property<string>("Velicina")
                        .HasMaxLength(255)
                        .HasColumnType("nvarchar(255)")
                        .HasColumnName("Velicina");

                    b.HasKey("ID");

                    b.HasIndex("CategoryID");

                    b.ToTable("Product");
                });

            modelBuilder.Entity("WebAPI.Models.Shop", b =>
                {
                    b.Property<int>("ID")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasColumnName("ID")
                        .UseIdentityColumn();

                    b.HasKey("ID");

                    b.ToTable("Shop");
                });

            modelBuilder.Entity("WebAPI.Models.Category", b =>
                {
                    b.HasOne("WebAPI.Models.Shop", "Shop")
                        .WithMany("Categories")
                        .HasForeignKey("ShopID");

                    b.Navigation("Shop");
                });

            modelBuilder.Entity("WebAPI.Models.Product", b =>
                {
                    b.HasOne("WebAPI.Models.Category", "Category")
                        .WithMany("Products")
                        .HasForeignKey("CategoryID");

                    b.Navigation("Category");
                });

            modelBuilder.Entity("WebAPI.Models.Category", b =>
                {
                    b.Navigation("Products");
                });

            modelBuilder.Entity("WebAPI.Models.Shop", b =>
                {
                    b.Navigation("Categories");
                });
#pragma warning restore 612, 618
        }
    }
}
