const items = document.querySelectorAll('.card');
const filterMenu = document.querySelectorAll('.menu-options li');
const searchInput = document.getElementById('search');

filterMenu.forEach(menu => {
  menu.addEventListener('click', function() {
    // Remove a classe ativa de todos os itens do menu
    filterMenu.forEach(item => item.classList.remove('active'));

    // Adiciona a classe ativa ao item selecionado
    this.classList.add('active');

    // Obtém a categoria selecionada no menu
    const category = this.getAttribute('data-category');

    // Filtra os items com base na categoria selecionada
    filterCards(category);
  });
});

// Função para filtrar os cards
function filterCards(category) {
  const searchValue = searchInput.value.toLowerCase();

  items.forEach(item => {
    const itemCategory = item.getAttribute('data-category');
    const itemName = item.querySelector('.card-title').innerText.toLowerCase();

    // Verifica se a categoria e o nome correspondem ao filtro e à pesquisa
    const matchesCategory = category === 'all' || itemCategory === category;
    const matchesSearch = itemName.includes(searchValue);

    if (matchesCategory && matchesSearch) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Evento de pesquisa
searchInput.addEventListener('input', function() {
  const activeCategory = document.querySelector('.menu-options li.active').getAttribute('data-category');
  filterCards(activeCategory);
});