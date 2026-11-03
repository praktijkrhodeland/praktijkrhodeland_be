document.querySelectorAll('[data-people-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('.people');
    const previousButton = carousel.querySelector('[data-people-previous]');
    const nextButton = carousel.querySelector('[data-people-next]');

    if (!track || !previousButton || !nextButton) {
        return;
    }

    const scrollOnePerson = (direction) => {
        const firstPerson = track.querySelector('.person');
        if (!firstPerson) {
            return;
        }

        const gap = Number.parseFloat(window.getComputedStyle(track).columnGap) || 0;
        const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth';
        const maxScroll = track.scrollWidth - track.clientWidth;
        const atStart = track.scrollLeft <= 1;
        const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 1;

        if (direction > 0 && atEnd) {
            track.scrollTo({ left: 0, behavior });
            return;
        }

        if (direction < 0 && atStart) {
            track.scrollTo({ left: maxScroll, behavior });
            return;
        }

        track.scrollBy({ left: direction * (firstPerson.getBoundingClientRect().width + gap), behavior });
    };

    previousButton.addEventListener('click', () => scrollOnePerson(-1));
    nextButton.addEventListener('click', () => scrollOnePerson(1));

    carousel.classList.add('is-enhanced');
    previousButton.disabled = false;
    nextButton.disabled = false;
});