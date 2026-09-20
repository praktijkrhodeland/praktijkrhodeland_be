document.querySelectorAll('.menu-toggle').forEach((button) => {
    const menu = document.getElementById(button.getAttribute('aria-controls'));

    if (!menu) {
        return;
    }

    const isOpen = () => menu.classList.contains('is-open');

    const setOpen = (open) => {
        menu.classList.toggle('is-open', open);
        button.setAttribute('aria-expanded', String(open));
        button.setAttribute('aria-label', open ? 'Menu sluiten' : 'Menu openen');
    };

    const isInside = (target) => menu.contains(target) || button.contains(target);

    button.addEventListener('click', () => {
        setOpen(!isOpen());
    });

    menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            setOpen(false);
        }
    });

    // Escape closes the menu and puts the focus back on the menu button.
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && isOpen()) {
            setOpen(false);
            button.focus();
        }
    });

    // Clicking or tabbing outside the menu closes it as well.
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

    // On a wide screen the full navigation is shown again, so reset the state.
    window.matchMedia('(min-width: 901px)').addEventListener('change', (event) => {
        if (event.matches) {
            setOpen(false);
        }
    });
});
