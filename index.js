

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
    document.getElementById(``)
}

// document.getElementById(`btn-contato`).addEventListener(`click`, () => {

    
//     window.open(`https://api.whatsapp.com/send/?phone=55${contato}&text&type=phone_number&app_absent=0`, `_blank`)
// })