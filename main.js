function scrollToAcervo() {
    const acervoSection = document.querySelector('.acervo'); // Seletor de classe
    if (acervoSection) {
        acervoSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log('Elemento acervo não encontrado');
    }
}
