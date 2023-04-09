/* Affichage initial des works */

// Fonction Fetch de l'API/works
async function worksApi () {
    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();
    return works;
}

// Fonction Recuperation d'un works[i]
async function recupererWorks(i) {

    const works = await worksApi();

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

    // Recuperation du categoryId du works[i]
    const categoryIdWorks = works[i].categoryId;
    // Stockage du categoriiId dans pieceWorks
    pieceWorks.dataset.categoryId = categoryIdWorks;

    // Creation et stockage du pieceWorksId
    pieceWorks.dataset.pieceWorksId = i;

    // Affichage du work[i] et creation de classes
    sectionWorks.appendChild(pieceWorks);
    pieceWorks.appendChild(imageWorks);
    pieceWorks.appendChild(titleWorks);
    pieceWorks.className = "works-card";
    imageWorks.className = "works-image";
    titleWorks.className = "works-title";
}

// Fonction : Affichage de tous les works
export async function allWorks() {

    const works = await worksApi();

    for (let i = 0; i < works.length; i++) {
        recupererWorks(i);
    }
}

