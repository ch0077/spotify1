document.addEventListener('DOMContentLoaded', function () {
    const showMore = document.querySelector('.show-more');
    const hiddenCards = document.querySelector('.payment-cards-hidden');

    showMore.addEventListener('click', function () {
        if (hiddenCards.style.display === 'none' || hiddenCards.style.display === '') {
            hiddenCards.style.display = 'flex';
            showMore.textContent = 'Ver menos'; // Texto quando os ícones estão visíveis
        } else {
            hiddenCards.style.display = 'none';
            showMore.textContent = 'e+ 13 outros'; // Texto original
        }
    });
});
