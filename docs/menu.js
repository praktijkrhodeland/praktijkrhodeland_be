document.querySelectorAll('.menu-toggle').forEach((button) => {
    const menu = document.getElementById(button.getAttribute('aria-controls'));

    button.addEventListener('click', () => {
        const isOpen = menu.classList.toggle('is-open');
        button.setAttribute('aria-expanded', String(isOpen));
        button.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
    });

    menu.addEventListener('click', (event) => {
        if (event.target.closest('a')) {
            menu.classList.remove('is-open');
            button.setAttribute('aria-expanded', 'false');
            button.setAttribute('aria-label', 'Menu openen');
        }
    });
});
