const editButton = document.getElementById('edit-button');
const form = document.getElementById('perfil-form');
const infoDiv = document.querySelector('.info');
const profilePicture = document.getElementById('profile-picture');
const fotoInput = document.getElementById('foto-input'); 

const userData = {
  nascimento: infoDiv.querySelector('p:nth-of-type(1) span').innerText,
  telefone: infoDiv.querySelector('p:nth-of-type(4) span').innerText,
  email: infoDiv.querySelector('p:nth-of-type(5) span').innerText
};

editButton.addEventListener('click', function(e) {
  e.preventDefault();

  form.querySelector('#nascimento').value = userData.nascimento;
  form.querySelector('#telefone').value = userData.telefone;
  form.querySelector('#email').value = userData.email;

  infoDiv.style.display = 'none';
  form.style.display = 'block';
});


fotoInput.addEventListener('change', function() {
  const newPhoto = fotoInput.files[0]; 

  if (newPhoto) {
    const reader = new FileReader();

    reader.onload = function(e) {
      profilePicture.src = e.target.result;  
    };

    reader.readAsDataURL(newPhoto);  
  }
});

form.addEventListener('submit', function(e) {
  alert('Perfil atualizado!');
  form.style.display = 'none';
  infoDiv.style.display = 'block';
});
