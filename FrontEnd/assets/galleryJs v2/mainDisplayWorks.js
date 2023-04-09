/* MAIN DISPLAY WORKS */

// GET CACHE LENGTH
export async function getCacheLength() {
    if ('caches' in window) {
      const cache = await caches.open('allWorks');
      const keys = await cache.keys();
      const cacheLength = keys.length;
      return cacheLength;
    }
}


// FIRST DISPLAY ALL WORKS FROM LOCAL CACHE
export async function displayAllWorks (i) {

    // Recuperation de l'element DOM accueillant les works
    const sectionWorks = document.querySelector(".gallery");
    const pieceWorks = document.createElement("article");

    // Creation des elements contenant images et titres
    const imageWorks = document.createElement("img");
    const titleWorks = document.createElement("p");

    // Recuperation de l'image et du titre du work[i] depuis le cache
    if ('caches' in window) {
        const cache = await caches.open('allWorks');
        const keys = await cache.keys();
        const request = keys[i];
        const response = await cache.match(request);
    
        if (response) {
            const data = await response.json();
            const imageBlob = ;
            const title = data.titleObj;
    
            // Ajout de l'image et du titre
            imageWorks.src = imageBlob;
            titleWorks.textContent = title;
            
            // Affichage du work[i] et creation de classes
            sectionWorks.appendChild(pieceWorks);
            pieceWorks.appendChild(imageWorks);
            pieceWorks.appendChild(titleWorks);
            pieceWorks.className = "works-card";
            imageWorks.className = "works-image";
            titleWorks.className = "works-title";
        }
    }
}

// ALL WORKS DISPLAY MANAGEMENT
export async function displayAllWorksManagement () {

    const cacheLength = await getCacheLength();

    for (let i = 0; i < cacheLength; i++) {
        await displayAllWorks(i);
    }
}