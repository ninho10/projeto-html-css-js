
let menu = document.querySelector('nav ul');
let menuBar = document.querySelector('nav .menu-icon');
let iconMenu = document.querySelector('nav .menu-icon img');

menuBar.addEventListener('click', function () {

    if (iconMenu.getAttribute("src") == 'imagem/menu.png') {
        iconMenu.setAttribute("src", "imagem/close.png");
    } else {
        iconMenu.setAttribute("src", "imagem/menu.png")
    }

    menu.classList.toggle('active')
});

