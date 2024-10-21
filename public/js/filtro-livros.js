
  document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-options li');
    const cards = document.querySelectorAll('.card');
    const searchInput = document.getElementById('search');

    // Função de debounce
    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    function filterBooks() {
        const searchTerm = searchInput.value.toLowerCase();
        const selectedCategory = document.querySelector('.menu-options li.active')?.getAttribute('data-category') || 'all';

        cards.forEach(card => {
            const livroTitle = card.querySelector('h3').innerText.toLowerCase();
            const matchesSearch = livroTitle.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || card.classList.contains(selectedCategory);

            // Exibe o cartão se corresponder à pesquisa e à categoria
            if (matchesSearch && matchesCategory) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    searchInput.addEventListener('input', debounce(filterBooks, 300));

    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });

            this.classList.add('active');

            filterBooks();
        });
    });
});
