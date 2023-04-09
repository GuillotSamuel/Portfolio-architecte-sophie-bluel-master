/* LOCAL CACHE MANAGEMENT */

import { displayAllWorks } from './mainDisplayWorks.js';

// FETCH API GET WORKS
async function worksApi () {
    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();
    return works;
}

// ALL WORKS CACHE COMPARAISON

async function cacheComparaison(i) {
    
    const works = await worksApi();

    // Recuperation de l'URL, categoryId et title d'un works [i]
    const worksUrl = works[i].imageUrl;
    const worksCategoryId = works[i].categoryId;
    const worksTitle = works[i].title;

    // Récupération de l'image en format png
    const response = await fetch(worksUrl);
    const blob = await response.blob();
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onloadend = function() {
        const base64data = reader.result;
        // Creation de l'objet JSON
        const worksObj = {imageUrlObj: worksUrl, categoryIdObj: worksCategoryId, titleObj: worksTitle, imagePng: base64data};
        const worksObjStr = JSON.stringify(worksObj);

        // Verification de la presence du works dans le cache
        if ('caches' in window) {
            const cacheKey = worksUrl + worksCategoryId + worksTitle;
            caches.match(cacheKey).then(async (response) => {
                if (!response) {
                    // Ajout du works au cache
                    const cache = await caches.open('allWorks');
                    const newResponse = new Response(worksObjStr);
                    cache.put(cacheKey, newResponse);
                    await displayAllWorks (i);
                } else {
                    await displayAllWorks (i);
                }
            });
        }
    }
}



// ALL WORKS CACHE COMPARAISON MANAGEMENT
export async function cacheComparaisonManagement() {

    const works = await worksApi();

    for (let i = 0; i < works.length; i++) {
        cacheComparaison(i);
    }
}
