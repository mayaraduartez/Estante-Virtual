//rola até o acervo da pagina inicial
function scrollToAcervo() {
    const acervoSection = document.querySelector('.acervo'); 
    if (acervoSection) {
        acervoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log('Elemento acervo não encontrado');
    }
}

//verifica a disponibilidade do livro na pagina detalhes
document.addEventListener('DOMContentLoaded', function() {
    const disponibilidade = document.getElementById('status-disponibilidade').innerText;
    const btnSolicitar = document.getElementById('btn-solicitar');


    if (disponibilidade === 'Disponível') {
        btnSolicitar.style.display = 'block';
    } else {
        btnSolicitar.style.display = 'none'; 
    }
  });
