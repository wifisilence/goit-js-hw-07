const refs = {
    input: document.querySelector('#validation-input')
}
    refs.input.addEventListener('input', validAdd)



function validAdd (event) {
    let valueInp = String(event.currentTarget.value);
    let dataLength = Number(refs.input.getAttribute('data-length'))
    valueInp.length === dataLength ?
        refs.input.setAttribute('class', 'valid') :
        refs.input.setAttribute('class', 'invalid');
}