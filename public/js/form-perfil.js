//carrega o form de edit do perfil do adm
const editButton = document.getElementById('edit-button');
const form = document.getElementById('perfil-form');
const infoDiv = document.querySelector('.info');
const profilePicture = document.getElementById('profile-picture');
const fotoInput = document.getElementById('foto');

// Dados do usuário
const userData = {
  nome: infoDiv.querySelector('h2').innerText,
  cargo: infoDiv.querySelector('p:nth-of-type(1) span').innerText,
  turno: infoDiv.querySelector('p:nth-of-type(2) span').innerText,
  nascimento: infoDiv.querySelector('p:nth-of-type(3) span').innerText,
  telefone: infoDiv.querySelector('p:nth-of-type(4) span').innerText,
  email: infoDiv.querySelector('p:nth-of-type(5) span').innerText
};

let isEditing = false; // Variável de controle do estado de edição

// Alterna entre exibir o formulário e voltar ao estado original
editButton.addEventListener('click', function(e) {
  e.preventDefault();
  
  if (isEditing) {
    // Se já estiver editando, volta ao estado original
    form.style.display = 'none';
    fotoInput.style.display = 'none';
    infoDiv.style.display = 'block';
    isEditing = false;
  } else {
    form.querySelector('#cargo').value = userData.cargo;
    form.querySelector('#turno').value = userData.turno;
    form.querySelector('#nascimento').value = userData.nascimento;
    form.querySelector('#telefone').value = userData.telefone;
    form.querySelector('#email').value = userData.email;
    
    infoDiv.style.display = 'none';
    form.style.display = 'block';
    fotoInput.style.display = 'block';
    isEditing = true;
  }
});

fotoInput.addEventListener('change', function() {
  const file = fotoInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      profilePicture.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});
