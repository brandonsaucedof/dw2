// Carrusel Nuestro Equipo
const arrowLeft = document.querySelector('#arrow-l')
const arrowRight = document.querySelector('#arrow-r')
const team = document.querySelector('.team')

arrowLeft.onclick = () => Carrusel(0);
arrowRight.onclick = () => Carrusel(1);

function Carrusel (value) {
    let operation = value * -50;

    team.style.transform = `translateX(${ operation }%)`
}
