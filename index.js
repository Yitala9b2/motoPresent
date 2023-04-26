

const container = document.querySelector('.present');
const button = document.querySelector('.presentButton');

container.style.display = 'none'

button.addEventListener('click', () => {
    container.style.display = 'block'
    button.style.display = 'none'
})