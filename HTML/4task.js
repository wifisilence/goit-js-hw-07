





let a = [1]

const decRim = () => { a + 1 };

console.log(a)



const dBtn = document.querySelector('[data-action="decrement"]');
dBtn.addEventListener('click', decRim)



console.log(a)
