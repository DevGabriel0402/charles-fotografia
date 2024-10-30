

setTimeout(() => {
    document.getElementById(`card-contrate`).style.animation = `enterCard .5s forwards`
}, 2000)

//Caso o tamanho da tela forma maior que 400 ele coloque 3 slide na tela
if (innerWidth >= 400) {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        // spaceBetween: 10,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    // Senao ele coloque somente 1 slide
} else {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        // spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
}

document.getElementById('submit').addEventListener('click', ()=>{
    const nome = document.getElementById('inputName').value
    const email = document.getElementById('inputEmail').value
    const texto = document.getElementById('inputText').value

    const mensagem = `Olá Charles tudo bem? Meu nome é ${nome} e estou entrando em contato para fazer um orçamento`
})