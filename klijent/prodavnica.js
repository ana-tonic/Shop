import {Kategorija} from "./Kategorija.js"
import { Proizvod } from "./Proizvod.js";

export class Prodavnica

{
    constructor(){
        this.categories = [];
        this.container = null;
    }

    dodajKategoriju(kat){
        this.categories.push(kat);
    }

    crtaj(host){
        if(!host)
        throw new Error("Host nije definisan");

        //dodajemo header
        const pozadina = document.createElement("div");
        pozadina.className = "pozadina";
        host.appendChild(pozadina);

        const naslov = document.createElement("div");
        naslov.className = "naslov";
        naslov.innerHTML = "Prodavnica zdrave hrane";
        pozadina.appendChild(naslov);

        //dodajemo meni
        const meni = document.createElement("div");
        meni.className = "meni";
        host.appendChild(meni);

        //kreiramo listu
        const lista = document.createElement("ul");
        lista.className = "lista";
        meni.appendChild(lista);


        const linkPocetna = document.createElement("a");
        linkPocetna.href = "#";
        linkPocetna.className = "link";
        lista.appendChild(linkPocetna);

        const pocetna = document.createElement("li");
        pocetna.innerHTML = "Pocetna";
        linkPocetna.appendChild(pocetna);


        // pocetna stranica iscrtavanje
        const pocetnaStranica = document.createElement("div");
        pocetnaStranica.className = "pocetnaStranica";
        host.appendChild(pocetnaStranica);

        // dodavanje forme za izmenu i unos novih proizvoda
        this.crtajFormu(pocetnaStranica);
        
        let value = 0;
        // crtanje delova za categories
        this.categories.forEach(element => {
            element.prodavnica = this;
            element.crtajKategoriju(document.body, lista, pocetnaStranica, value++);
        });

    }

    crtajFormu(pocetnaStranica)
    {
        const forma = document.createElement("div");
        forma.className = "forma";
        pocetnaStranica.appendChild(forma);

        const destForma = document.createElement("a");
        destForma.name = "forma";
        forma.appendChild(destForma);

        this.crtajElementForme(forma, "ID: ", "number", "ID");
        document.querySelector(".ID").disabled = true;
        this.crtajElementForme(forma, "Naziv: ", "text", "Naziv");
        this.crtajElementForme(forma, "Cena: ", "number", "Cena");
        this.crtajElementForme(forma, "Na stanju: ", "number", "NaStanju");
        this.crtajElementForme(forma, "Velicina: ", "text", "Velicina");
        this.crtajElementForme(forma, "Lokacija slike: ", "text", "Slika");

        // izbor categories
        let elContainer = document.createElement("div");
        elContainer.className = "elContainer";
        forma.appendChild(elContainer);

        let labela = document.createElement("label");
        labela.innerHTML = "Kategorija: ";
        elContainer.appendChild(labela);

        let el = document.createElement("select");
        el.className = "DDList";
        elContainer.appendChild(el);

        let buttonBox = document.createElement("div");
        buttonBox.className = "buttonBox";
        forma.appendChild(buttonBox);

        let button = document.createElement("button");
        button.innerHTML = "Dodaj proizvod";
        buttonBox.appendChild(button);
        button.onclick = (ev)=>{
            if(document.querySelector("button").innerHTML == "Dodaj proizvod")
                this.kreirajElement();
            else this.izmeniElement();
        } 
        
        button = document.createElement("button");
        button.innerHTML = "X";
        button.style.display = "none";
        buttonBox.appendChild(button);
        button.onclick = (ev)=>{
            this.OcistiFormu();
            button.style.display = "none";
        } 
    }

    izmeniElement()
    {
        const id = document.querySelector(".ID").value;
        for (const element of this.categories) {
            for (const el of element.proizvodi) {
                if(id == el.ID)
                    {
                        el.izmeniProizvod();
                        return;
                    }
            }
        }
    }

    crtajElementForme(host, lblText, tip, className)
    {
        let elContainer = document.createElement("div");
        elContainer.className = "elContainer";
        host.appendChild(elContainer);

        let labela = document.createElement("label");
        labela.innerHTML = lblText;
        elContainer.appendChild(labela);

        let el = document.createElement("input");
        el.type = tip;
        el.className = className;
        elContainer.appendChild(el);
    }

    kreirajElement()
    {
        let Naziv = document.querySelector(".Naziv").value;
        let Cena = document.querySelector(".Cena").value;
        let naStanju = document.querySelector(".NaStanju").value;
        let Velicina = document.querySelector(".Velicina").value;
        let Image = document.querySelector(".Slika").value;
        let category = document.querySelector(".DDList");
        category = category[category.selectedIndex].text;
        let ID = 0;
        
        this.categories.forEach(element => {
            if(element.opis == category)
            {
                fetch("https://localhost:5001/Shop/PostProduct/" + element.id, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: ID,
                        naziv: Naziv,
                        cena: Cena,
                        naStanju: naStanju,
                        velicina: Velicina,
                        image: Image
                    })
                }).then(p => {
                    if(p.ok){
                        p.json().then(q => {

                        let proizvod = new Proizvod(q, Naziv, Cena, naStanju, Velicina, Image);
                        proizvod.kategorija = element;
                        element.dodajProizvod(proizvod);
                        proizvod.crtajProizvod(element.proizvodiContainer);
                        this.OcistiFormu();
                        alert("Uspesno ste dodali novi proizvod!");
                        });
                    }
                    else if(p.status == 406){
                        alert("Input all informations.");
                    }
                }).catch (p => {
                    alert("Error");
                });
            }
        })
        document.querySelector(".ID").disabled = true;
    }

    OcistiFormu()
    {
        document.querySelector(".ID").value = "";
        document.querySelector(".ID").disabled = true;
        document.querySelector(".Naziv").value = "";
        document.querySelector(".Cena").value = "";
        document.querySelector(".NaStanju").value = "";
        document.querySelector(".Velicina").value = "";
        document.querySelector(".Slika").value = "";
        document.querySelector(".DDList").selectedIndex = 0;
        document.querySelector(".DDList").disabled = false;
        document.querySelector("button").innerHTML = "Dodaj proizvod";
    }
}