/* FILTER BUTTONS */

import { getCacheLength } from './mainDisplayWorks.js';
import { displayAllWorksManagement } from './mainDisplayWorks.js';
import { displayAllWorks } from './mainDisplayWorks.js';


// CATEGORY ID RECUPERATION IN CACHE
async function categoryIdRecuperation (i) {
    if ('caches' in window) {
        const cache = await caches.open('allWorks');
        const keys = await cache.keys();
        const request = keys[i];
       
        const response = await cache.match(request);
    
        if (response) {
            const data = await response.json();
            const categoryId = data.categoryIdObj;
            return categoryId;
        }
    }
}


// DISPLAY ONE CATEGORY
async function selectedWorks(categoryIdSelected) {
    const cacheLength = await getCacheLength();
    for (let i = 0; i < cacheLength; i++) {

        const categoryIdCollected = await categoryIdRecuperation(i);

        if (categoryIdCollected == categoryIdSelected) {
            await displayAllWorks(i);
        }
    }
}


// BUTTON COLOR CHANGE
function changeFilterColor (boutonClicked) {
    var filterButtons = document.getElementsByClassName("gallery-filter-button");
    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].style.backgroundColor = "white";
        filterButtons[i].style.color = "#1D6154";
    }
    boutonClicked.style.backgroundColor = "#1D6154";
    boutonClicked.style.color = "white"; 
}


// FILTER BUTTON
export function filterButtonManagement () {

    // Bouton Tous
    const boutonTous = document.querySelector("#tous-button") 
    boutonTous.addEventListener("click", function () {
        document.querySelector(".gallery").innerHTML = "";
        displayAllWorksManagement ();
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
}
