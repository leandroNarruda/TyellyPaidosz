$(function () {
    $('.carousel').carousel({
        interval: 2000,
    });

});

let imagens = document.querySelectorAll('.small');
let modal = document.querySelector('.moda');
let modalImg = document.querySelector('#imgModal');
let btnClose = document.querySelector('#btnClose');
let srcVal = "";

for (let i = 0; i < imagens.length; i++) {
    imagens[i].addEventListener('click', function () {
        srcVal = imagens[i].getAttribute('src');
        modalImg.setAttribute('src', srcVal)
        $("#ExemploModalCentralizado").modal({
            show: true
        });

    });
}
