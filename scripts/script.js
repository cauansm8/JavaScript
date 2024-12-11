function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open"); // Altera a classe sidebar adicionando 'open' ao abrir e tira ao fechar

    var menuIcon = document.getElementById("menu-icon");  // Seleciona o ícone da imagem
    
    
    // Verifica se o sidebar está aberto
    if (sidebar.classList.contains("open"))
    {
        menuIcon.src = "imagens/iconX.png";  // Troca a imagem para 'iconX.png'
    }
    else
    {
        menuIcon.src = "imagens/icon.png";  // Retorna a imagem original 'icon.png'
    }
}

let isOn = false;

function toggleStateButton() {
    console.log("Botão Pressionado1");
    isOn = !isOn;
    const button = document.getElementById("toggle-button");
    button.style.backgroundColor = isOn ? "#76b900" : "#333333";
    button.innerText = isOn ? "ON" : "OFF";
}

function toggleReveal() {
    console.log("Botão Pressionado2");
    const image = document.getElementById("toggleImage");
    
    //verifica qual classe esta na imagem adiciona uma, excluindo a outra classe
    if (image.classList.contains("non-revealed"))
    {
        image.classList.remove("non-revealed");
        image.classList.add("revealed");
    } else 
    {
        image.classList.remove("revealed");
        image.classList.add("non-revealed");
    }
}

$(document).ready(function () {
    document.getElementById('select').addEventListener("change", function()
    {
        var element = document.getElementById('select');
        var option = parseInt(element.value);

        console.log("valor: ", option);

        switch(option)
        {
            case 1:
                $('#input-arquitetura').val("Ampere");
                $('#input-cores').val("10.752");
                $('#input-frequencia').val("1.560 MHz");
                $('#input-memoria').val("24GB GDDR6X");
            break;
            case 2:
                $('#input-arquitetura').val("Turing");
                $('#input-cores').val("4.352");
                $('#input-frequencia').val("1.350 MHz");
                $('#input-memoria').val("11GB GDDR6");
            break;
            case 3:
                $('#input-arquitetura').val("Pascal");
                $('#input-cores').val("3.584");
                $('#input-frequencia').val("1.480 MHz");
                $('#input-memoria').val("11GB GDDR5X");
            break;
            case 4:
                $('#input-arquitetura').val("Turing");
                $('#input-cores').val("1.408");
                $('#input-frequencia').val("1.530 MHz");
                $('#input-memoria').val("6GB GDDR6");
            break;
        }
    });
});



// Selecionar os elementos
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const mainImage = document.getElementById('mainImage');

// Configuração inicial
let currentIndex = 0;

// Função para atualizar o carrossel
function updateCarousel() {
    const offset = currentIndex * items[0].clientWidth;
    carousel.style.transform = `translateX(-${offset}px)`;
}

// Botão "Anterior"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

// Botão "Próximo"
nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
        currentIndex++;
        updateCarousel();
    }
});

// Atualizar a imagem principal ao clicar em um item do carrossel
items.forEach(item => {
    item.addEventListener('click', () => {
        mainImage.src = item.src;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".main-nav ul");

    menuToggle.addEventListener("click", function () {
        navMenu.classList.toggle("open");
    });
});