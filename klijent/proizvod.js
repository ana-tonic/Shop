export class Proizvod
{
    constructor(ID, naziv, cena, naStanju, velicina, image)
    {
        this.ID = ID;
        this.naziv = naziv;   
        this.cena = cena;
        this.naStanju = naStanju;
        this.velicina = velicina;
        this.image = image;
        this.container = null;
        this.kategorija = null;        
    }

    crtajProizvod(host)
    {
        this.container = document.createElement("div");
        this.container.className = "images";
        host.appendChild(this.container);

        let imageContainer = document.createElement("img");
        imageContainer.src = this.image;
        imageContainer.className = "item-image-size";
        imageContainer.classList.add("imageContainer" + this.ID);
        this.container.appendChild(imageContainer);

        let opis = document.createElement("div");
        opis.className = "opis";
        this.container.appendChild(opis);

        let nazivContainer = document.createElement("b");
        nazivContainer.innerHTML = this.naziv;
        nazivContainer.className = "nazivContainer" + this.ID;
        opis.appendChild(nazivContainer);

        let cenaContainer = document.createElement("div");
        cenaContainer.className = "item-select";
        cenaContainer.classList.add("cenaContainer" + this.ID);
        cenaContainer.innerHTML = "Cena: " + this.cena;
        opis.appendChild(cenaContainer);

        let velicinaContainer = document.createElement("div");
        velicinaContainer.className = "item-select";
        velicinaContainer.innerHTML = "Velicina: " + this.velicina;
        velicinaContainer.classList.add("velicinaContainer" + this.ID);
        opis.appendChild(velicinaContainer);

        let naStanjuContainer = document.createElement("div");
        naStanjuContainer.className = "item-select";
        naStanjuContainer.classList.add("naStanjuContainer" + this.ID);
        naStanjuContainer.innerHTML = "Na stanju: " +this.naStanju;
        opis.appendChild(naStanjuContainer);

        let dugme = document.createElement("button");
        dugme.innerHTML = "Obrisi";
        opis.appendChild(dugme);
        dugme.onclick = (ev)=>{
            this.obrisi();
        }

        let destForma = document.createElement("a");
        destForma.href = "#forma";
        opis.appendChild(destForma);
        
        dugme = document.createElement("button");
        dugme.innerHTML = "Izmeni";
        destForma.appendChild(dugme);
        dugme.onclick = (ev) =>{
            this.izmeni(nazivContainer, cenaContainer, velicinaContainer, naStanjuContainer, imageContainer);
        }

        
    }

    obrisi()
    {
        fetch("https://localhost:5001/Shop/DeleteProduct/" + this.ID,{
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

        var parent = this.container.parentNode;
        parent.removeChild(this.container);
        this.kategorija.proizvodi = this.kategorija.proizvodi.filter(el => el.ID !== this.ID);
    }

    izmeni(nazivContainer, cenaContainer, velicinaContainer, naStanjuContainer, imageContainer)
    {
        //#region Dodavanje objekta u kontrole
        document.querySelector(".ID").value = this.ID;
        document.querySelector(".ID").disabled = true;
        document.querySelector(".Naziv").value = this.naziv;
        document.querySelector(".Cena").value = this.cena;
        document.querySelector(".NaStanju").value = this.naStanju;
        document.querySelector(".Velicina").value = this.velicina;
        document.querySelector(".Slika").value = this.image;
        document.querySelector(".DDList").disabled = true;

        let isSameName = (element) => element.naziv == this.kategorija.naziv;
        document.querySelector(".DDList").selectedIndex = 
        this.kategorija.prodavnica.categories.findIndex(isSameName);
        
        document.querySelector("button").innerHTML = "Izmeni proizvod";
        document.querySelectorAll("button")[1].style.display = "initial";
        //#endregion      
    }

    izmeniProizvod()
    {
        // Ako se klikne na Izmeni proizvod
        // uzimanje iz forme koja je vec adekvatno popunjena
        const id = this.ID;
        const naziv = document.querySelector(".Naziv").value;
        const cena = document.querySelector(".Cena").value;
        const naStanju = document.querySelector(".NaStanju").value;
        const velicina = document.querySelector(".Velicina").value;
        const image = document.querySelector(".Slika").value;
     
        fetch("https://localhost:5001/Shop/UpdateProduct", {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        id: id,
                        naziv: naziv,
                        cena: cena,
                        naStanju: naStanju,
                        velicina: velicina,
                        image: image
                    })
                }).then(p => {
                    if(p.ok)
                    {
                        this.naziv = naziv;
                        this.cena = cena;
                        this.naStanju = naStanju;
                        this.velicina = velicina;
                        this.image = image;
                        
                        document.querySelector(".nazivContainer" + this.ID).innerHTML = this.naziv;
                        document.querySelector(".cenaContainer" + this.ID).innerHTML = "Cena: " + this.cena;
                        document.querySelector(".naStanjuContainer" + this.ID).innerHTML = "Na stanju: " + this.naStanju;
                        document.querySelector(".velicinaContainer" + this.ID).innerHTML = "Velicina " + this.velicina; 
                        document.querySelector(".imageContainer" + this.ID).src = this.image;

                        this.kategorija.prodavnica.OcistiFormu();
                        document.querySelectorAll("button")[1].style.display = "none";
                        alert("Uspesno ste izmenili proizvod!");
                    }
                    else if(p.status == 406){
                        alert("Input all informations.");
                    }
                }).catch (p => {
                    alert("Error");
                 });
    }
}