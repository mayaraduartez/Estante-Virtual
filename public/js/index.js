window.addEventListener('load', function() {
    document.querySelector('.lado-1').classList.add('in-view');
    document.querySelector('.lado-2').classList.add('in-view');
});


document.addEventListener('DOMContentLoaded', function() {
      const menuItems = document.querySelectorAll('.menu-options li');
      const cards = document.querySelectorAll('.livro-card');
      const searchInput = document.getElementById('search');
  
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
              const isVisible = card.style.display !== 'none';
  
              
              if (livroTitle.includes(searchTerm) && isVisible) {
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
              const selectedCategory = this.getAttribute('data-category');
  
              menuItems.forEach(function(item) {
                  item.classList.remove('active');
              });
  
              this.classList.add('active');
  
              // Filtrar cartões com base na categoria selecionada
              cards.forEach(function(card) {
                  if (selectedCategory === 'all' || card.classList.contains(selectedCategory)) {
                      card.style.display = 'block'; 
                  } else {
                      card.style.display = 'none'; 
                  }
              });
  
              // Após filtrar, reexecuta a pesquisa para manter a funcionalidade
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