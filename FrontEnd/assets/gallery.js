// Recuperation des works depuis l'API
async function recupererWorks() {
    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();
    console.log(works)
        // Boucle for afin de charger l'ensemble des works
        for (let i = 0; i < works.length; i++) {

            // Changement du numero de works avec la boucle
            const numWorks = works[i];

            // Recuperation de l'element du DOM accueillant les works
            const sectionWorks = document.querySelector(".gallery");
            const pieceWorks = document.createElement("article");

            // Recuperation de l'url de l'image d'un works[i]
            const imageLien = works[i].imageUrl;
            // Creation d'un element contenant une image
            const imageWorks = document.createElement("img");
            // Affectation d'une image a l'element contenant une image grace au lien URL
            imageWorks.src = imageLien;

            // Recuperation du titre du works[i]
            const titleWorks = document.createElement("p");
            // Affectation du titre a l'element
            titleWorks.innerText = works[i].title;

            // Affichage du work[i]
            sectionWorks.appendChild(pieceWorks);
            pieceWorks.appendChild(imageWorks);
            pieceWorks.appendChild(titleWorks);
        }
    }

// Activation de la fonction permettant de recuperer les works lors du chargement de la page
recupererWorks();

  