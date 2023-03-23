// Recuperation des works depuis l'API
async function recupererWorks() {
    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();

        // Boucle for afin de charger l'ensemble des works
        for (let i = 0; i < works.length; i++) {

            // Changement du numero de works avec la boucle
            const numWorks = works[i];
            // Recuperation de l'element du DOM accueillant les works
            const sectionWorks = document.querySelector(".gallery");
            // Recuperation de l'url d'un works[i]
            const imageLien = works[i].imageUrl;
            // Creation d'un element contenant une image
            const imageWorks = document.createElement("img");
            // Affectation d'une image a l'element contenant une image grace au lien URL
            imageWorks.src = imageLien;
            // Affichage du work[i]
            sectionWorks.appendChild(imageWorks);
        }
    }
  
  recupererWorks();
  