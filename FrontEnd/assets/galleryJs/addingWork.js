function addingNewWork () {
  
  const addingNewWorkButton = document.querySelector('.validation-modal-2');

  addingNewWorkButton.addEventListener("click", () => {
    const title = document.querySelector(".title-input-modal-2");
    const category = document.querySelector(".category-input-modal-2");
    const image = document.querySelector("#picture-adding");  
    const token = localStorage.getItem("token");

    console.log(image.src);
    console.log(title.value);
    console.log(category.value);
    console.log(token);
  
    const formData = new FormData();
    formData.append("image", image.files[0]);
    formData.append("title", title.value);
    formData.append("category", category.value);
  
    fetch("http://localhost:5678/api/works", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: formData
    })
  })
}

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

    console.log(file);

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
        const hiddingPictureAddingContainer = document.querySelector(".adding-picture-container");
        hiddingPictureAddingContainer.style.display = "none";
    }
  });
}


export async function addingNewWorkManagement () {

  addingPhotoInput ();

  addingNewWork ();

}