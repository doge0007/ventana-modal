const acceder = document.getElementById('acceder');
let modal = document.getElementById('modal');
const aceptar = document.getElementById('aceptar');

acceder.addEventListener('click', () => {
    modal.style.visibility = 'visible';
    return false;
})
aceptar.addEventListener('click', () => {
    modal.style.visibility = 'hidden';
})
