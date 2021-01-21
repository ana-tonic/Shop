import {Prodavnica} from "./prodavnica.js";
import {Kategorija} from "./kategorija.js";
import { Proizvod } from "./Proizvod.js";

fetch("https://localhost:5001/Shop/GetShops").then( p => {
    p.json().then(data => {
         

        data.forEach(shop => {
            
            let pr = new Prodavnica();
            
            shop.categories.forEach(category => {
                let cat = new Kategorija(category.naziv, category.opis, category.slika, category.id);
                
                category.products.forEach(product => {
                    let pro = new Proizvod(product.id, product.naziv, product.cena,
                         product.naStanju, product.velicina, product.image);
                    cat.dodajProizvod(pro);
                });


                pr.dodajKategoriju(cat);
            });
            pr.crtaj(document.body);
            });
        });
    });

        
    



// proizvod = new Proizvod(3, "Mung pasulj", 465, 50, "500g", "slike/zitarice/MungoPasulj.jpg");
// kat2.dodajProizvod(proizvod);

// proizvod = new Proizvod(4, "Azuki pasulj", 400, 40, "500g", "slike/zitarice/AzukiPasulj.jpg");
// kat2.dodajProizvod(proizvod);

// proizvod = new Proizvod(5, "Integralna makarona", 100, 30, "400g", "slike/testenine/Testenine makaroni integralni_300x300.jpg");
// kat4.dodajProizvod(proizvod);



// pr.dodajKategoriju(kat);
// pr.dodajKategoriju(kat2);
// pr.dodajKategoriju(kat3);
// pr.dodajKategoriju(kat4);

// pr.crtaj(document.body);
