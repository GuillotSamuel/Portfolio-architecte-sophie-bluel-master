/* AFFICHAGE DES WORKS */

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

    // Affichage du work[i] et creation de classes
    sectionWorks.appendChild(pieceWorks);
    pieceWorks.appendChild(imageWorks);
    pieceWorks.appendChild(titleWorks);
    pieceWorks.className = "works-card";
    imageWorks.className = "works-image";
    titleWorks.className = "works-title";

}

// Fonction : Affichage de tous les works
async function allWorks() {

    const works = await worksApi();

    for (let i = 0; i < works.length; i++) {
        recupererWorks(i);
    }
}

// Fonction : Affichage d'une seule categorie de works
async function selectedWorks(id) {

    const works = await worksApi();

    for (let i = 0; i < works.length; i++) {
        const categoryIdWorks = works[i].categoryId;
        if (categoryIdWorks == id) {
            recupererWorks(i);
        }
    }
}

// Affichage initial
allWorks();

/* ------------------------------------------------------------------------- */

/* BOUTONS DE TRI DES WORKS */

function changeFilterColor (boutonClicked) {
    var filterButtons = document.getElementsByClassName("gallery-filter-button");
    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].style.backgroundColor = "white";
        filterButtons[i].style.color = "#1D6154";
    }
    boutonClicked.style.backgroundColor = "#1D6154";
    boutonClicked.style.color = "white"; 
}

// Bouton Tous
const boutonTous = document.querySelector("#tous-button") 
boutonTous.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    allWorks();
    changeFilterColor (boutonTous);
})

// Bouton Objets
const boutonObjets = document.querySelector("#objets-button")
boutonObjets.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    selectedWorks(1);
    changeFilterColor (boutonObjets);
})

// Bouton Appartements
const boutonAppartements = document.querySelector("#appartements-button")
boutonAppartements.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    selectedWorks(2);
    changeFilterColor (boutonAppartements);
})

// Bouton Hotels et restaurants
const boutonHotelsRest = document.querySelector("#hotels-rest-button")
boutonHotelsRest.addEventListener("click", function () {
    document.querySelector(".gallery").innerHTML = "";
    selectedWorks(3);
    changeFilterColor (boutonHotelsRest);
})

// Couleur de base des boutons de tri
boutonTous.style.backgroundColor = "#1D6154";
boutonTous.style.color = "white";


/* ------------------------------------------------------------------------- */

/* EDITION MODE */

const sectionEditionMode = document.querySelector("#edition-mode");
const sectionEditionModeContainer = document.createElement("div");
sectionEditionModeContainer.className = "mode-edition-container";
const logoEdition = document.createElement("i");
logoEdition.className = "fa fa-pen-to-square edition-mode-logo";
const modeEditionTitle = document.createElement("div");
modeEditionTitle.textContent = "Mode édition";
modeEditionTitle.className = "mode-edition-title edition-mode-item";
const changesPublishing = document.createElement("button");
changesPublishing.textContent = "publier les changements";
changesPublishing.className = "change-publishing-button edition-mode-item";

sectionEditionMode.appendChild(sectionEditionModeContainer);
sectionEditionModeContainer.appendChild(logoEdition);
sectionEditionModeContainer.appendChild(modeEditionTitle);
sectionEditionMode.appendChild(changesPublishing);

// Mode edition

const tokenPresence = localStorage.getItem("token");
if (tokenPresence) {

    // Affichage du bouton logout
    const loginLogoutButton = document.querySelector("#login-logout-button");
    loginLogoutButton.innerHTML = "logout";

    // Masquage des boutons de tri
    const galleryFilterHidden = document.querySelector(".gallery-filter");
    galleryFilterHidden.style.display = "none";
}
else {
    
// Masquage de la barre d'edition
const editionModeHidden = document.querySelector("#edition-mode");
editionModeHidden.style.display = "none";

// Affichage du bouton login
const loginLogoutButton = document.querySelector("#login-logout-button");
loginLogoutButton.href="login.html";
loginLogoutButton.innerHTML = "login";

// Masquage des boutons "modifier"
const modifierButton = document.querySelector(".modifier-container");
modifierButton.style.display = "none";
const modifierPortfolioButton = document.querySelector(".modifier-container-portfolio");
modifierPortfolioButton.style.display = "none";

}

/* ------------------------------------------------------------------------- */

/* DECONNEXION */

// Suppression du token
const buttonLogout = document.querySelector("#login-logout-button");
buttonLogout.addEventListener ("click", function () {
    localStorage.removeItem('token');
    location.reload ();
})

/* ------------------------------------------------------------------------- */

/* AFFICHAGE DE LA MODALE */

// Portfolio button modifier : ouverture de la modale
const buttonModifierPortfolio = document.querySelector(".modifier-container-portfolio");
buttonModifierPortfolio.addEventListener ("click", function () {
    const overlayActivation = document.querySelector(".overlay");
    overlayActivation.style.display = "block";
    const modalActivation = document.querySelector(".modal");
    modalActivation.style.display = "block";
})

async function allWorks2() {

    const works = await worksApi();

    for (let i = 0; i < works.length; i++) {
        recupererWorks2(i);
        console.log("recupererWorks");
    }
}

// Affichage de l'ensemble des photos enregistrees dans la modale 1
async function recupererWorks2(i) {

    const works = await worksApi();

    // Recuperation de l'element du DOM accueillant les works
    const sectionWorks2 = document.querySelector(".gallery-management");
    const pieceWorks2 = document.createElement("article");

    // Recuperation de l'url de l'image d'un works[i]
    const imageLien = works[i].imageUrl;
    // Creation d'un element contenant une image
    const imageWorks2 = document.createElement("img");
    // Affectation d'une image a l'element contenant une image grace au lien URL
    imageWorks2.src = imageLien;

    // Recuperation du titre du works[i]
    const editingWorks2 = document.createElement("p");
    // Affectation du titre a l'element
    editingWorks2.innerText = "éditer";

    // Affichage du work[i] et creation de classes
    sectionWorks2.appendChild(pieceWorks2);
    pieceWorks2.appendChild(imageWorks2);
    pieceWorks2.appendChild(editingWorks2);
    pieceWorks2.className = "works-card2";
    imageWorks2.className = "works-image2";
    editingWorks2.className = "editingWorks-card2";
}


allWorks2 ();

// Ajout d'une photo dans la modale
const modal2container = document.querySelector(".modal-2-container");
modal2container.style.display = "none";
const buttonAddingPicture = document.querySelector(".adding-picture-button1");
buttonAddingPicture.addEventListener ("click", function () {
    const modal1Container = document.querySelector(".modal-1-container");
    modal1Container.style.display = "none";
    modal2container.style.display = "block";
})

// Retourner de modale 2 vers modale 1
const returnToModal1 = document.querySelector(".return-modal-1");
returnToModal1.addEventListener ("click", function () {
    const modal1Container = document.querySelector(".modal-1-container");
    const modal2Container = document.querySelector(".modal-2-container");
    modal1Container.style.display = "block";
    modal2Container.style.display = "none";
})

// Fermeture des fenetres modales
function closingModalFunction () {
    const modalClosing = document.querySelector(".modal");
    modalClosing.style.display = "none";
    const overlayClosing = document.querySelector(".overlay");
    overlayClosing.style.display = "none";
    const modal1Container = document.querySelector(".modal-1-container");
    const modal2Container = document.querySelector(".modal-2-container");
    modal1Container.style.display = "block";
    modal2Container.style.display = "none";
}

const closingModalButton = document.querySelector(".closing-modale-1");
closingModalButton.addEventListener ("click", function () {
    closingModalFunction ();
})

const closingModalBody = document.getElementsByTagName("body")[0];
closingModalBody.addEventListener ("mousedown", function(event) {
    const modal = document.querySelector(".modal-1-container");
    if (!modal.contains(event.target)) {
        closingModalFunction ();
    }
})

const closingModalButton2 = document.querySelector(".closing-modale-2");
closingModalButton2.addEventListener ("click", function () {
    closingModalFunction ();
})




/* ------------------------------------------------------------------------- */

/* SUPPRESSION DE LA GALERIE */

const galerySuppression = document.querySelector(".galery-suppression");
galerySuppression.addEventListener ("click", function () {
    const modalGallerySuppression = document.querySelector(".modal-galery-suppression");
    modalGallerySuppression.style.display = "block";
})

const annulationButton = document.querySelector(".annulation-button-galery-suppression");
annulationButton.addEventListener ("click", function () {
    const modalGallerySuppression = document.querySelector(".modal-galery-suppression");
    modalGallerySuppression.style.display = "none";
})

const confirmationButton = document.querySelector(".confirmation-button-galery-suppression");
confirmationButton.addEventListener ("click", function () {
    const modalGallerySuppression = document.querySelector(".modal-galery-suppression");
    modalGallerySuppression.style.display = "none";
})
