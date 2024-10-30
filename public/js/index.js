window.addEventListener('load', function() {
    document.querySelector('.lado-1').classList.add('in-view');
    document.querySelector('.lado-2').classList.add('in-view');
});

//filtro
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-options li');
    const cards = document.querySelectorAll('.livro-card');
    const searchInput = document.getElementById('search');
    let selectedCategory = 'all'; // Variável para guardar a categoria selecionada

    // Função de debounce
    function debounce(func, delay) {
        let timeout;
        return function(...args) {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), delay);
        };
    }

    // Função de pesquisa
    function searchBooks() {
        const searchTerm = searchInput.value.toLowerCase(); 

        cards.forEach(card => {
            const livroTitle = card.querySelector('h3').innerText.toLowerCase(); 
            const matchesSearch = livroTitle.includes(searchTerm);
            const matchesCategory = selectedCategory === 'all' || card.classList.contains(selectedCategory);

            // Exibir o cartão apenas se corresponder à pesquisa e à categoria selecionada
            if (matchesSearch && matchesCategory) {
                card.style.display = 'block'; 
            } else {
                card.style.display = 'none'; 
            }
        });
    }

    // Adiciona o evento de entrada com debounce para pesquisa
    searchInput.addEventListener('input', debounce(searchBooks, 300)); 

    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            selectedCategory = this.getAttribute('data-category');

            menuItems.forEach(function(item) {
                item.classList.remove('active');
            });

            this.classList.add('active');

            // Reexecuta a pesquisa para manter a funcionalidade com base na nova categoria
            searchBooks();
        });
    });
});


  //trocar slides history
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slide.length;

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateSlidePosition();
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateSlidePosition();
});

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
}