import { works } from './displayAllWorks.js';

// Affichage de l'ensemble des photos enregistrees dans la modale 1
async function recupererWorks2(work) {

    // Recuperation de l'element du DOM accueillant les works
    const sectionWorks2 = document.querySelector(".gallery-management");
    const pieceWorks2 = document.createElement("article");

    // Recuperation de l'url de l'image d'un works[i]
    const imageLien = work.imageUrl;
    // Creation d'un element contenant une image
    const imageWorks2 = document.createElement("img");
    // Affectation d'une image a l'element contenant une image grace au lien URL
    imageWorks2.src = imageLien;

    // Recuperation du titre du works[i]
    const editingWorks2 = document.createElement("p");
    // Affectation du titre a l'element
    editingWorks2.innerText = "éditer";

    // Creation du logo de suppression
    const suppressionLogo1Work = document.createElement("i");
    // Recuperation de l'ID du works
    const worksId = work.id;
    // Ajout d'un attribut data-i contenant l'ID du work correspondant au click de suppression
    suppressionLogo1Work.setAttribute("data-i", worksId);

    // Affichage du work[i] et creation de classes
    sectionWorks2.appendChild(pieceWorks2);
    pieceWorks2.appendChild(imageWorks2);
    pieceWorks2.appendChild(editingWorks2);
    pieceWorks2.appendChild(suppressionLogo1Work);
    pieceWorks2.className = "works-card2";
    pieceWorks2.setAttribute("id", "modal"+worksId);
    imageWorks2.className = "works-image2";
    editingWorks2.className = "editingWorks-card2";
    suppressionLogo1Work.className = "fa-solid fa-trash-can suppression-logo-1-work";

}

export async function allWorks2() {

    for (let i = 0; i < works.length; i++) {
        recupererWorks2(works[i]);
    }
}