//ATIVA O TEXTO EXPLICATIVO
function changeText(anything) {
    document.querySelector(".paragrafo").innerHTML = anything;
}
//TROCA A COR BASEADO NO SIMBOLO
function changeCircleColor(color) {
    const circle = document.querySelector('.circle');
    circle.style.background = color;
}
//MUDA A IMAGEM PRINCIPAL 
function imgSlider(anything) {
    document.querySelector('.logoprincipal').src = anything;

}
//ATIVA O TITULO
function changeTitle(anything) {
    document.querySelector(".h2").innerHTML = anything;
}
//ATIVA O MENU MOBILE
function toggleMenu() {
    var menuToggle = document.querySelector('.toggle')
    var menuNavigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    menuNavigation.classList.toggle('active')
}