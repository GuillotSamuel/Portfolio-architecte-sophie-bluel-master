// Fetch lors de l'affichage dans la modale d'un nouveau works pour recuperer l'id du work
async function worksApi () {
  const reponse = await fetch("http://localhost:5678/api/works");
  const works = await reponse.json();
  return works;
}

// Affichage du work ajoute dans la modale
async function displayFormObjectModal () {

  const works = await worksApi ();

  const sectionWorks = document.querySelector(".gallery-management");
  const lastKey = "formObject" + (sessionStorage.length);

  const lastObject = JSON.parse(sessionStorage.getItem(lastKey));
  const i = works.length - 1;

  const pieceWorks = document.createElement("article");
  const imageWorks = document.createElement("img");
  const editingWorks = document.createElement("p");
  const suppressionLogo1Work = document.createElement("i");
  const worksId = works[i].id;

  suppressionLogo1Work.setAttribute("data-i", worksId);
  imageWorks.src = lastObject.image.src;
  editingWorks.innerText = "éditer";

    sectionWorks.appendChild(pieceWorks);
    pieceWorks.appendChild(imageWorks);
    pieceWorks.appendChild(editingWorks);
    pieceWorks.appendChild(suppressionLogo1Work);

    pieceWorks.className = "works-card2";
    imageWorks.className = "works-image2";
    editingWorks.className = "editingWorks-card2";
    suppressionLogo1Work.className = "fa-solid fa-trash-can suppression-logo-1-work";
}

// Affichage du work ajoute dans la gallery
function displayFormObject () {
  const sectionWorks = document.querySelector(".gallery");
  const lastKey = "formObject" + (sessionStorage.length);

  const lastObject = JSON.parse(sessionStorage.getItem(lastKey));
 
  const pieceWorks = document.createElement("article");
  const imageWorks = document.createElement("img");
  const titleWorks = document.createElement("p");

  imageWorks.src = lastObject.image.src;
  titleWorks.textContent = lastObject.title;

  pieceWorks.className = "works-card";
  imageWorks.className = "works-image";
  titleWorks.className = "works-title"; 

  pieceWorks.appendChild(imageWorks);
  pieceWorks.appendChild(titleWorks);
  sectionWorks.appendChild(pieceWorks);
}

function addingNewWork () {

  const form = document.querySelector('.form-modal-2');
  const formButton = document.querySelector('.validation-modal-2');
  const title = document.querySelector('.title-input-modal-2');
  const category = document.querySelector('.category-input-modal-2');
  const image = document.querySelector('#picture-adding');
  const previewPicture = document.querySelector('#preview-picture');
  const pictureAddingContainer = document.querySelector(".adding-picture-container");

  checkFormValidity ();

  function checkFormValidity () {
    if (!image.files[0] || !title.value || !category.value) {
      formButton.style.backgroundColor = "#A7A7A7";
    } else {
      formButton.style.backgroundColor = "#1D6154";
    }
  }

  title.addEventListener("input", checkFormValidity);
  category.addEventListener("input", checkFormValidity);
  image.addEventListener("change", checkFormValidity);


  form.addEventListener('submit', (event) => {
    event.preventDefault(); 

    const formData = new FormData();
    formData.append('title', title.value);
    formData.append('category', category.value);
    formData.append('image', image.files[0]);
  
    const token = localStorage.getItem('token');

    fetch('http://localhost:5678/api/works', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        alert('Merci de compléter les trois champs avant de valider.');
      } else {
        // Suppression des reponses renseignees dans le formulaire
        previewPicture.src = '';
        pictureAddingContainer.style.display = "flex";
        title.value = '';
        category.value = '';

        // Ajout au local storage de l'objet 

        const imageSrc = URL.createObjectURL(image.files[0]);

        const formObject = {
          title: formData.get('title'),
          category: formData.get('category'),
          image: {
            name: image.files[0].name,
            src: imageSrc
          }        
        };

        let counter = 1;
          while (sessionStorage.getItem(`formObject${counter}`)) {
            counter++;
          }

        sessionStorage.setItem(`formObject${counter}`, JSON.stringify(formObject));

        displayFormObject ();

        displayFormObjectModal ();
      }
    })
  })
}

// Ajout de la photo dans l'emplacement dedie a l'import de photos
function addingPhotoInput () {

  const photoInput = document.getElementById('picture-adding');
  const addingPictureButton2 = document.getElementsByClassName('adding-picture-button2')[0];
  const previewPicture = document.querySelector('#preview-picture');

  addingPictureButton2.addEventListener("click", () => {
    photoInput.click();
  });

  photoInput.addEventListener('change', () => {

    const file = photoInput.files[0];
    const fileSize = file.size;
    const fileType = file.type;
    const allowedTypes = ['image/jpeg', 'image/png'];
    const maxSize = 4 * 1024 * 1024; // 4 MB

    if (!allowedTypes.includes(fileType)) {
        alert('Le format de fichier n\'est pas valide. Veuillez sélectionner une image au format JPEG ou PNG.');
        photoInput.value = '';
    } else if (fileSize > maxSize) {
        alert('La taille de fichier dépasse 4Mo. Veuillez sélectionner une image plus petite.');
        photoInput.value = '';
    } else {
        const reader = new FileReader();
        reader.onload = function() {
        previewPicture.src = reader.result;
        }
        reader.readAsDataURL(file);
        const PictureAddingContainer = document.querySelector(".adding-picture-container");
        PictureAddingContainer.style.display = "none";
    }
  });
}

export async function addingNewWorkManagement () {

  addingPhotoInput ();

  addingNewWork ();

}