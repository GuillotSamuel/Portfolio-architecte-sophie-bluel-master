function tokenPresence () {
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
}

function tokenRemoval () {
    const buttonLogout = document.querySelector("#login-logout-button");
    buttonLogout.addEventListener ("click", function () {
        localStorage.removeItem('token');
        location.reload ();
    })
}

export async function editionModeManagement () {

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

    tokenPresence ();

    tokenRemoval ();
};
