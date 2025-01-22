const themeToggleButton = document.getElementById('themeToggle');

themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    themeToggleButton.textContent = document.body.classList.contains('dark-mode')
        ? 'Light Mode'
        : 'Dark Mode';
});
