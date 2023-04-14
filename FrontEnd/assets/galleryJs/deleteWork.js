export async function deleteWork(workId) {

    console.log("test")

    caches.open('cacheWorks').then(function(cache) {
        cache.delete('id', workId);
    });

    const url = `http://localhost:5678/api/works/${workId}`;
    const token = localStorage.getItem("token");
    fetch(url, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    })
    .then(response => {
            if (!response.ok) {
            throw new Error("Erreur lors de la suppression du travail.");
            } 
        })
        .catch(error => {
            console.error(error);
    });

    // Supprimer l'objet correspondant du cache
    // UTILISER LES CACHE KEY POUR ACCEDER AU NUMERO D'ID 
/*     caches.open('myCache').then(cache => {
        cache.delete();
    }); */
}