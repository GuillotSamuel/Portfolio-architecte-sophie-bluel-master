// Recuperation du formulaire de connexion dans login.html
const loginForm = document.getElementById("login-form");

// Click sur connection button = declanchement du submit
loginForm.addEventListener("submit", async function(event) {

    // Empechement du comportement par defaut du formulaire HTML (submit lorsqu'un bouton de soumission est clique)
    event.preventDefault();

    // Recuperation de l'email et du mdp renseigne dans le formulaire par l'utilisateur
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Connexion a l'API login
    fetch("http://localhost:5678/api/users/login", {
    method: "POST",
    // Permet a l'API de savoir que les donnees envoyees sont structurees en JSON
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (response.ok) {
        // Response = OK : envoie de la reponse sous format JSON
        return response.json();
        } else {
        // Envoie du message d'erreur de la reponse
        throw new Error(response.statusText);
        }
    })
    .then(data => {
        // Stockage du token de connecxion en cas de reussite dans le stockage local
        localStorage.setItem("token", data.token);
        
        // Redirection de l'utilisateur vers la page d'accueil 
        window.location.href = "index.html";
    })
    .catch(error => {
        // Affichage d'un message d'erreur en cas de connection impossible
        alert("Impossible de se connecter, merci de renseigner à nouveau votre E-mail et votre mot de passe.");
    });
});

