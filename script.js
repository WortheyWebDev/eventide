document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            document.getElementById('menu').checked = false;
        });
    });
});
