/* BOUTONS DE TRI DES WORKS */

function gridRowGap () {
    const gallery = document.querySelector(".gallery");
    gallery.style.gridRowGap = "40px";
}

function changeFilterColor (boutonClicked) {
    var filterButtons = document.getElementsByClassName("gallery-filter-button");
    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].style.backgroundColor = "white";
        filterButtons[i].style.color = "#1D6154";
    }
    boutonClicked.style.backgroundColor = "#1D6154";
    boutonClicked.style.color = "white"; 
}

async function selectedWorks (catId) {
    const pieceWorks = document.querySelectorAll(".works-card");

    for(let i = 0; i < pieceWorks.length; i++) {

        const categoryId = parseInt(pieceWorks[i].dataset.categoryId);

        if (catId === 0) {
            // If 'Tous' button is clicked, show all works
            pieceWorks[i].style.display = "block";
        } else if (categoryId === catId) {
            // If work belongs to selected category, show it
            pieceWorks[i].style.display = "block";
        } else {
            // Otherwise, hide it
            pieceWorks[i].style.display = "none";
        }
    }
}

export function filterButtonManagement () {
    
// Bouton Tous
const boutonTous = document.querySelector("#tous-button") 
boutonTous.addEventListener("click", function () {
    selectedWorks(0);
    gridRowGap ();
    changeFilterColor (boutonTous);
})

// Bouton Objets
const boutonObjets = document.querySelector("#objets-button")
boutonObjets.addEventListener("click", function () {
    selectedWorks(1);
    gridRowGap ();
    changeFilterColor (boutonObjets);
})

// Bouton Appartements
const boutonAppartements = document.querySelector("#appartements-button")
boutonAppartements.addEventListener("click", function () {
    selectedWorks(2);
    gridRowGap ();
    changeFilterColor (boutonAppartements);
})

// Bouton Hotels et restaurants
const boutonHotelsRest = document.querySelector("#hotels-rest-button")
boutonHotelsRest.addEventListener("click", function () {
    selectedWorks(3);
    gridRowGap ();
    changeFilterColor (boutonHotelsRest);
})

// Couleur de base des boutons de tri
boutonTous.style.backgroundColor = "#1D6154";
boutonTous.style.color = "white";

}