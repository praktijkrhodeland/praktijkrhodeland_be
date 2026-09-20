document.querySelectorAll('.menu-toggle').forEach((button) => {
    const menu = document.getElementById(button.getAttribute('aria-controls'));
    if (!menu) {
        return;
    }

    const isOpen = () => menu.classList.contains('is-open');
    const setOpen = (open) => {
        menu.classList.toggle('is-open', open);
        button.setAttribute('aria-expanded', String(open));
    };
    const isInside = (target) => menu.contains(target) || button.contains(target);

    button.addEventListener('click', () => setOpen(!isOpen()));

    menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            setOpen(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isOpen()) {
            setOpen(false);
            button.focus();
        }
    });

    document.addEventListener('pointerdown', (event) => {
        if (isOpen() && !isInside(event.target)) {
            setOpen(false);
        }
    });

    document.addEventListener('focusin', (event) => {
        if (isOpen() && !isInside(event.target)) {
            setOpen(false);
        }
    });

    window.matchMedia('(min-width: 941px)').addEventListener('change', (event) => {
        if (event.matches) {
            setOpen(false);
        }
    });
});
