const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ourUl = document.querySelector('ul'); // находим родителя для нашего списка


const addLi = function (arr) {
    arr.forEach(element => {
        let newLi = document.createElement('li');
        newLi.textContent = element;
        ourUl.appendChild(newLi);
    });
};
//Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li,
//после чего вставит все li за одну операцию в список ul.ingredients.Для создания DOM -
//узлов используй document.createElement().

addLi(ingredients)