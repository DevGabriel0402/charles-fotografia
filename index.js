

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

document.getElementById(`btn-contato`).addEventListener(`click`, () => {
    document.getElementById(`modal`).style.display = `flex`;
    document.getElementById(`card-contrate`).style.display = `none`;
    document.getElementById(`container`).style.filter = `blur(5px)`
})

document.getElementById(`btn-fechar`).addEventListener(`click`, () => {
    document.getElementById(`modal`).style.display = `none`;
    document.getElementById(`card-contrate`).style.display = `flex`;
    document.getElementById(`container`).style.filter = `blur(0)`


})

document.getElementById('submit').addEventListener('click', () => {
    const nome = document.getElementById('inputName').value
    const email = document.getElementById('inputEmail').value
    const texto = document.getElementById('inputText').value

    const mensagem = `Olá Charles tudo bem? Meu nome é ${nome} e estou entrando em contato para fazer um orçamento de ${texto}.
    
    caso precise enviar alguma coisa e não pode ser pelo whatsApp aqui está o meu e-mail:
    
    ${email}.
    
    Aguardando sua resposta.`

    const uri = encodeURIComponent(mensagem)

    const contato = `31985127512`

    const url = `https://wa.me/55${contato}?text=${uri}`

    window.open(url, `_blank`)


})