//exibe a div de data ao tocar no button "liberar"
document.getElementById('liberar').addEventListener('click', function() {
    const dateDiv = document.getElementById('date');
    
    // Exibe a div de data ao clicar no botão
    if (dateDiv.style.display === 'none' || dateDiv.style.display === '') {
      dateDiv.style.display = 'block';
    }
  });

//pesquisa por filtro
const items = document.querySelectorAll('.historico-item');
const filterMenu = document.querySelectorAll('.menu-options li');

filterMenu.forEach(menu => {
  menu.addEventListener('click', function() {
    // Remove a classe ativa de todos os itens do menu
    filterMenu.forEach(item => item.classList.remove('active'));

    // Adiciona a classe ativa ao item selecionado
    this.classList.add('active');

    // Obtém a categoria selecionada no menu
    const category = this.getAttribute('data-category');

    // Filtra os items com base na categoria selecionada
    items.forEach(item => {
      // Obtém a categoria diretamente do historico-item
      const itemCategory = item.getAttribute('data-category');

      // Verifica se a categoria corresponde ou se 'all' está selecionado
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block'; // Exibe o item se corresponder
      } else {
        item.style.display = 'none'; // Oculta o item se não corresponder
      }
    });
  });
});
