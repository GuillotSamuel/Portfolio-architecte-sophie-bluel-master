export async function deleteWork(workId) {
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
}