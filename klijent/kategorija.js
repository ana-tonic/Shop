import {Proizvod} from "./Proizvod.js"

export class Kategorija
{
    constructor(naziv, opis, slika, id)
    {
        this.proizvodi = [];
        this.naziv = naziv;
        this.id = id;
        this.opis = opis;
        this.slika = slika;
        this.container = null; 
        this.proizvodiContainer = null;    
    }

    dodajProizvod(pro)
    {
        this.proizvodi.push(pro);
    }

    crtajKategoriju(host, hostLista, hostPocetnaStranica,value)
    {
        
        this.crtajStavku(hostLista);
        this.crtajKontejner(hostPocetnaStranica);

        let op = document.createElement("option");
        op.innerHTML = this.opis;
        op.value = value;
        document.querySelector(".DDList").appendChild(op);


        this.container = document.createElement("div");
        this.container.classList.add(this.naziv);
        host.appendChild(this.container); 

        let destinacija = document.createElement("a");
        destinacija.name = this.naziv;
        this.container.appendChild(destinacija);

        let pozadina = document.createElement("div");
        pozadina.className = "pozadina";
        this.container.appendChild(pozadina);
        
        let naslov = document.createElement("div");
        naslov.className = "naslov";
        naslov.innerHTML = this.opis;
        pozadina.appendChild(naslov);

        let dugmeContainer = document.createElement("div");
        dugmeContainer.className = "dugmeContainer";
        pozadina.appendChild(dugmeContainer);

        let destForma = document.createElement("a");
        destForma.href = "#forma";
        dugmeContainer.appendChild(destForma);

        let button = document.createElement("button");
        button.innerHTML = "Dodaj proizvod";
        destForma.appendChild(button);
        button.onclick = (ev)=>{
            this.dodajProizvod();
        }

        this.proizvodiContainer = document.createElement("div");
        this.proizvodiContainer.className = "proizvodi";
        this.container.appendChild(this.proizvodiContainer);

        this.proizvodi.forEach(element => {
            element.kategorija = this;
            element.crtajProizvod(this.proizvodiContainer);
        })
    }

    crtajStavku(host)
    {
        const linkPocetna = document.createElement("a");
        linkPocetna.href = "#" + this.naziv;
        linkPocetna.className = "link";
        host.appendChild(linkPocetna);

        const pocetna = document.createElement("li");
        pocetna.innerHTML = this.opis;
        linkPocetna.appendChild(pocetna);
    }

    crtajKontejner(host)
    {
        let kategorija = document.createElement("div");
        kategorija.className = "kategorija";
        host.appendChild(kategorija);

        let link = document.createElement("a");
        link.href = "#" + this.naziv;
        kategorija.appendChild(link);
       
        let slika = document.createElement("img");
        slika.src = this.slika;
        slika.className = "slika";
        link.appendChild(slika);

        let naslovSlike = document.createElement("div");
        naslovSlike.className = "naslovSlike";
        naslovSlike.innerHTML = this.naziv;
        link.appendChild(naslovSlike);
    }
}