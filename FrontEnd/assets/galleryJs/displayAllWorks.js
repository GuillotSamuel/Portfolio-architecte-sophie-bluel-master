/* Affichage initial des works */

// Fonction Fetch de l'API/works
async function worksApi () {
    const reponse = await fetch("http://localhost:5678/api/works");
    const works = await reponse.json();
    return works;
}

export const works = await worksApi();

// Fonction Recuperation d'un works[i]
async function recupererWorks(work) {

    // Recuperation de l'element du DOM accueillant les works
    const sectionWorks = document.querySelector(".gallery");
    const pieceWorks = document.createElement("article");

    // Recuperation de l'url de l'image d'un works[i]
    const imageLien = work.imageUrl;
    // Creation d'un element contenant une image
    const imageWorks = document.createElement("img");
    // Affectation d'une image a l'element contenant une image grace au lien URL
    imageWorks.src = imageLien;

    // Recuperation du titre du works[i]
    const titleWorks = document.createElement("p");
    // Affectation du titre a l'element
    titleWorks.innerText = work.title;

    // Recuperation du categoryId du works[i]
    const categoryIdWorks = work.categoryId;
    // Stockage du categoriiId dans pieceWorks
    pieceWorks.dataset.categoryId = categoryIdWorks;

    // Affichage du work[i] et creation de classes
    sectionWorks.appendChild(pieceWorks);
    pieceWorks.appendChild(imageWorks);
    pieceWorks.appendChild(titleWorks);
    pieceWorks.className = "works-card";
    imageWorks.className = "works-image";
    titleWorks.className = "works-title";
}

// Fonction Recuperer works from cache
function recupererWorksFromCache () {
    const gallery = document.querySelector('.gallery');

    caches.open('cacheWorks').then(cache => {
    cache.keys().then(keys => {
        keys.forEach(request => {
        cache.match(request).then(response => {
            if (response) {
                response.json().then(data => {
                    const pieceWorks = document.createElement('article');
                    const image = document.createElement('img');
                    const title = document.createElement('p');

                    title.textContent = data.title;
                    image.src = data.imageUrl;

                    pieceWorks.appendChild(image);
                    pieceWorks.appendChild(title);
                    gallery.appendChild(pieceWorks);
                    pieceWorks.dataset.categoryId = data.categoryId;
                    pieceWorks.className = "works-card";
                    image.className = "works-image";
                    title.className = "works-title";          
                });
            }
        });
        });
    });
    });
}

// Fonction : Affichage de tous les works
export async function allWorks() {

    for (let i = 0; i < works.length; i++) {

        recupererWorks(works[i]);
    }  

    recupererWorksFromCache ();
}

