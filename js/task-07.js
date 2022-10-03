const inputChange = document.querySelector('input#font-size-control')
const abracadabra = document.querySelector('span#text')

inputChange.addEventListener('change', a => {
    abracadabra.style.fontSize = `${a.target.value}px`
})