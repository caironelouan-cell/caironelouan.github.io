// Ouvre ou ferme le menu déroulant des langues au clic
function toggleLangMenu() {
    const menu = document.getElementById("lang-menu");
    menu.classList.toggle("show");
}

// Ferme le menu déroulant si le visiteur clique n'importe où ailleurs sur la page
window.addEventListener("click", function(event) {
    if (!event.target.matches('.lang-btn')) {
        const dropdown = document.getElementById("lang-menu");
        if (dropdown && dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
});
