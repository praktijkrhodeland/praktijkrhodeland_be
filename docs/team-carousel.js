document.querySelectorAll('[data-people-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.people');
    const previousButton = carousel.querySelector('[data-people-previous]');
    const nextButton = carousel.querySelector('[data-people-next]');

    if (!track || !previousButton || !nextButton) {
        return;
    }

    const updateButtons = () => {
        previousButton.disabled = track.scrollLeft <= 1;
        nextButton.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;
    };

    const scrollOnePerson = (direction) => {
        const firstPerson = track.querySelector('.person');
        if (!firstPerson) {
            return;
        }

        const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        track.scrollBy({ left: direction * (firstPerson.getBoundingClientRect().width + gap), behavior });
    };

    previousButton.addEventListener('click', () => scrollOnePerson(-1));
    nextButton.addEventListener('click', () => scrollOnePerson(1));
    track.addEventListener('scroll', updateButtons, { passive: true });
    window.addEventListener('resize', updateButtons);

    carousel.classList.add('is-enhanced');
    updateButtons();
});