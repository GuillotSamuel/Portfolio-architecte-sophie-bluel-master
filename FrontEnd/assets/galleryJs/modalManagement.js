import { allWorks2 } from './modalDisplayAllWorks.js';

function modalOpening () {
    const buttonModifierPortfolio = document.querySelector(".modifier-container-portfolio");
    buttonModifierPortfolio.addEventListener ("click", function () {
    const overlayActivation = document.querySelector(".overlay");
    overlayActivation.style.display = "block";
    const modalActivation = document.querySelector(".modal");
    modalActivation.style.display = "block";
})
}

function closingModalFunction () {
    const modalClosing = document.querySelector(".modal");
    modalClosing.style.display = "none";
    const overlayClosing = document.querySelector(".overlay");
    overlayClosing.style.display = "none";
    const modal1Container = document.querySelector(".modal-1-container");
    const modal2Container = document.querySelector(".modal-2-container");
    const modalSuppressionConfirmation = document.querySelector(".modal-galery-suppression")
    modal1Container.style.display = "block";
    modal2Container.style.display = "none";
    modalSuppressionConfirmation.style.display = "none";
}

function modalClosing () {

    const closingModalButton = document.querySelector(".closing-modale-1");
    closingModalButton.addEventListener ("click", function () {
        closingModalFunction ();
    })

    const closingModalBody = document.getElementsByTagName("body")[0];
    closingModalBody.addEventListener ("mousedown", function(event) {
        const modal = document.querySelector(".modal");
        if (!modal.contains(event.target)) {
            closingModalFunction ();
        }
    })

    const closingModalButton2 = document.querySelector(".closing-modale-2");
    closingModalButton2.addEventListener ("click", function () {
        closingModalFunction ();
    })
}

function modale1ToModale2 () {
    const modal2container = document.querySelector(".modal-2-container");
    modal2container.style.display = "none";
    const buttonAddingPicture = document.querySelector(".adding-picture-button1");
    buttonAddingPicture.addEventListener ("click", function () {
        const modal1Container = document.querySelector(".modal-1-container");
        modal1Container.style.display = "none";
        modal2container.style.display = "block";
    })
}

function modale2ToModale1 () {
    const returnToModal1 = document.querySelector(".return-modal-1");
    returnToModal1.addEventListener ("click", function () {
        const modal1Container = document.querySelector(".modal-1-container");
        const modal2Container = document.querySelector(".modal-2-container");
        modal1Container.style.display = "block";
        modal2Container.style.display = "none";
    })
}

export function modalManagement () {

    modalOpening ();

    modalClosing ();

    modale1ToModale2 ();

    modale2ToModale1 ();

    allWorks2 ();

}