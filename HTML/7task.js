
const refs = {
        spanText : document.querySelector('#text'),
        inputRange : document.querySelector('#font-size-control'),
};







const sizeOn = function (event) {
     let textSizeadd = event.currentTarget.value;
    refs.spanText.setAttribute("style", `font-size: ${textSizeadd}cm;`)
 };



refs.inputRange.addEventListener('input', sizeOn);



