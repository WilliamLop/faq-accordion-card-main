const clickQuestions = document.querySelectorAll('.card__question');

clickQuestions.forEach((clickQuestion) => {
    clickQuestion.addEventListener('click', () => {
        const arrow = clickQuestion.children[0];
        const paragraph = clickQuestion.nextElementSibling;

        // Si el párrafo actual está abierto, lo cerramos
        if (paragraph.classList.contains('card__content--show')) {
            paragraph.classList.remove('card__content--show');
            clickQuestion.classList.remove('card__question--active');
            arrow.classList.remove('article__arrow--rotate');
        } else {
            // Si hay algún otro párrafo abierto, lo cerramos
            const activeQuestion = document.querySelector('.card__question.card__question--active');
            if (activeQuestion) {
                const activeArrow = activeQuestion.children[0];
                const activeParagraph = activeQuestion.nextElementSibling;

                activeParagraph.classList.remove('card__content--show');
                activeQuestion.classList.remove('card__question--active');
                activeArrow.classList.remove('article__arrow--rotate');
            }

            // Abrimos el párrafo actual
            paragraph.classList.add('card__content--show');
            clickQuestion.classList.add('card__question--active');
            arrow.classList.add('article__arrow--rotate');
        }
    });
});
