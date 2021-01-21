USE [master]
GO
/****** Object:  Database [ShopDB]    Script Date: 1/21/2021 2:15:57 PM ******/
CREATE DATABASE [ShopDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'ShopDB', FILENAME = N'C:\Users\Ana\ShopDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'ShopDB_log', FILENAME = N'C:\Users\Ana\ShopDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [ShopDB] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [ShopDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [ShopDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [ShopDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [ShopDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [ShopDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [ShopDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [ShopDB] SET AUTO_CLOSE ON 
GO
ALTER DATABASE [ShopDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [ShopDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [ShopDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [ShopDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [ShopDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [ShopDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [ShopDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [ShopDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [ShopDB] SET  ENABLE_BROKER 
GO
ALTER DATABASE [ShopDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [ShopDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [ShopDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [ShopDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [ShopDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [ShopDB] SET READ_COMMITTED_SNAPSHOT ON 
GO
ALTER DATABASE [ShopDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [ShopDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [ShopDB] SET  MULTI_USER 
GO
ALTER DATABASE [ShopDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [ShopDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [ShopDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [ShopDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [ShopDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [ShopDB] SET QUERY_STORE = OFF
GO
USE [ShopDB]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [ShopDB]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 1/21/2021 2:15:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 1/21/2021 2:15:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Naziv] [nvarchar](255) NULL,
	[Opis] [nvarchar](255) NULL,
	[Slika] [nvarchar](255) NULL,
	[ShopID] [int] NULL,
 CONSTRAINT [PK_Category] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Product]    Script Date: 1/21/2021 2:15:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Product](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Naziv] [nvarchar](255) NULL,
	[Cena] [int] NOT NULL,
	[Na stanju] [int] NOT NULL,
	[Velicina] [nvarchar](255) NULL,
	[Image] [nvarchar](255) NULL,
	[CategoryID] [int] NULL,
 CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Shop]    Script Date: 1/21/2021 2:15:57 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Shop](
	[ID] [int] IDENTITY(1,1) NOT NULL,
 CONSTRAINT [PK_Shop] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20210105155200_V1', N'5.0.1')
GO
SET IDENTITY_INSERT [dbo].[Category] ON 
GO
INSERT [dbo].[Category] ([ID], [Naziv], [Opis], [Slika], [ShopID]) VALUES (4, N'Kafa', N'Kafa i zamene za kafu', N'slike/kafa.jpg', 1)
GO
INSERT [dbo].[Category] ([ID], [Naziv], [Opis], [Slika], [ShopID]) VALUES (5, N'Zitarice', N'Zitarice, mahunarke, musli i keks', N'slike/zitarice.jpg', 1)
GO
INSERT [dbo].[Category] ([ID], [Naziv], [Opis], [Slika], [ShopID]) VALUES (6, N'Zamene', N'Biljne zamene za mleko, sir i meso', N'slike/mleko.jpg', 1)
GO
INSERT [dbo].[Category] ([ID], [Naziv], [Opis], [Slika], [ShopID]) VALUES (7, N'Testenine', N'Testenine i hlebovi', N'slike/pasta.jpg', 1)
GO
SET IDENTITY_INSERT [dbo].[Category] OFF
GO
SET IDENTITY_INSERT [dbo].[Product] ON 
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (1004, N'Kafa u zrnu', 320, 10000, N'300g', N'slike/kafe/kafa1.jpg', 4)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (1005, N'Mlevena kafa', 350, 40, N'300g', N'slike/kafe/kafa2.jpg', 4)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (2004, N'Mung pasulj', 465, 50, N'500g', N'slike/zitarice/MungoPasulj.jpg', 5)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (2005, N'Azuki pasulj', 400, 14, N'500g', N'slike/zitarice/AzukiPasulj.jpg', 5)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (2006, N'Integralna makarona', 100, 30, N'400g', N'slike/testenine/Testenine makaroni integralni_300x300.jpg', 7)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (2007, N'Psenica', 155, 20, N'500g', N'slike/zitarice/PsenicaCrvena.jpg', 5)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (2008, N'Leblebija', 420, 20, N'500g', N'slike/zitarice/Naut.jpg', 5)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (2011, N'Jecam', 155, 20, N'500g', N'slike/zitarice/Jecam.jpg', 5)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (2015, N'Tempeh przeni', 295, 25, N'200g', N'slike/zamene/tempeh-gril_300x300.jpg', 6)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (2016, N'Tofu sirov', 200, 20, N'250g', N'slike/zamene/tofu_novi_300x300.jpg', 6)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (2017, N'Soja burger', 140, 10, N'100g', N'slike/zamene/Soja burger 100g NOVO_300x300.jpg', 6)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (3021, N'Tofu gril', 260, 26, N'200g', N'slike/zamene/tofu gril 600x600_300x300.jpg', 6)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (3022, N'Seitan sirovi', 155, 50, N'200g', N'slike/zamene/pi_309_300x300.jpg', 6)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (3023, N'Spirale integralne', 140, 10, N'250g', N'slike/testenine/testenine spitale integralne_300x300.jpg', 7)
GO
INSERT [dbo].[Product] ([ID], [Naziv], [Cena], [Na stanju], [Velicina], [Image], [CategoryID]) VALUES (3024, N'Spirale trikolor', 180, 30, N'250g', N'slike/testenine/testenine spitale TRIKOLOR_300x300.jpg', 7)
GO
SET IDENTITY_INSERT [dbo].[Product] OFF
GO
SET IDENTITY_INSERT [dbo].[Shop] ON 
GO
INSERT [dbo].[Shop] ([ID]) VALUES (1)
GO
SET IDENTITY_INSERT [dbo].[Shop] OFF
GO
/****** Object:  Index [IX_Category_ShopID]    Script Date: 1/21/2021 2:15:58 PM ******/
CREATE NONCLUSTERED INDEX [IX_Category_ShopID] ON [dbo].[Category]
(
	[ShopID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
/****** Object:  Index [IX_Product_CategoryID]    Script Date: 1/21/2021 2:15:58 PM ******/
CREATE NONCLUSTERED INDEX [IX_Product_CategoryID] ON [dbo].[Product]
(
	[CategoryID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Category]  WITH CHECK ADD  CONSTRAINT [FK_Category_Shop_ShopID] FOREIGN KEY([ShopID])
REFERENCES [dbo].[Shop] ([ID])
GO
ALTER TABLE [dbo].[Category] CHECK CONSTRAINT [FK_Category_Shop_ShopID]
GO
ALTER TABLE [dbo].[Product]  WITH CHECK ADD  CONSTRAINT [FK_Product_Category_CategoryID] FOREIGN KEY([CategoryID])
REFERENCES [dbo].[Category] ([ID])
GO
ALTER TABLE [dbo].[Product] CHECK CONSTRAINT [FK_Product_Category_CategoryID]
GO
USE [master]
GO
ALTER DATABASE [ShopDB] SET  READ_WRITE 
GO
