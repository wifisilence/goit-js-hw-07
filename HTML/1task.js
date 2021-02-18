//Напиши скрипт, который выполнит следующие операции.
//Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item. Получится 'В списке 3 категории.'.
const catArr = document.querySelectorAll('li.item');
console.log(`В списке ${catArr.length} категории.`);


//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) и 
//количество элементов в категории(всех вложенных в него элементов li).
catArr.forEach(function(element){
    const htwoText = element.querySelector('h2').textContent;
    const htwoLeng = element.querySelectorAll('li').length;
    console.log(`Категория: ${htwoText} Количество элементов: ${htwoLeng}`)
});
