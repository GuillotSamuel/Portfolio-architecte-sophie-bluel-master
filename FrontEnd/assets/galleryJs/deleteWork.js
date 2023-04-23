
function hidingDeletedWorkGallery (index) {
    
    const galleryWork = document.getElementById("gallery"+index);
    galleryWork.classList.add("hidden");

}

function hidingDeletedWorkModal (index) {
    
    const modalWork = document.getElementById("modal"+index);
    modalWork.classList.add("hidden");

}

async function deleteWork (workId) {

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
            } else {
                hidingDeletedWorkGallery (workId);
                hidingDeletedWorkModal (workId);
            }
        })
        .catch(error => {
            console.error(error);
    });

}

export function deleteWorkManagement () {
    const suppressionWorkLogo = document.querySelectorAll('.suppression-logo-1-work');
    suppressionWorkLogo.forEach(element => {
        element.addEventListener("click", (event) => {
            event.preventDefault();
            const index = event.target.getAttribute("data-i");

            deleteWork (index);
        });
    });
}