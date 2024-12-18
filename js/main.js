/*
Задание:
Сделать рабочий фильтр цветов.
При нажатии на один из цветов, круг с цветом - мы видим автомобиль, соответствующего цвета.
А активный цвет выделяется, за счет дополнительного CSS класса ".colorItem--active".

Работу сдать через CodePen.

Другие изображения автомобиля:
https://webcademy.ru/files/js2020/solaris/black.png
https://webcademy.ru/files/js2020/solaris/blue.png
https://webcademy.ru/files/js2020/solaris/graphite.png
https://webcademy.ru/files/js2020/solaris/orange.png
https://webcademy.ru/files/js2020/solaris/red.png
https://webcademy.ru/files/js2020/solaris/white.png
https://webcademy.ru/files/js2020/solaris/white-pure.png
*/

let colorsSelector = document.querySelector('#colorsSelector');
let imgHolder = document.querySelector('#imgHolder img');

colorsSelector.addEventListener('click', colorToggle);

function colorToggle(e) {
  let colorItem = e.target.closest('.colorItem');
  if (!colorItem) {
    return;
  }
  let btn = document.querySelector('.colorItem--active');
  if (btn) {
    btn.classList.remove('colorItem--active');
  }
  colorItem.classList.add('colorItem--active');

  if (colorItem.classList.contains('colorBlue')) {
    imgHolder.src = 'https://webcademy.ru/files/js2020/solaris/blue.png';
  } else if (colorItem.classList.contains('colorWhite')) {
    imgHolder.src = 'https://webcademy.ru/files/js2020/solaris/white.png';
  } else if (colorItem.classList.contains('colorRed')) {
    imgHolder.src = 'https://webcademy.ru/files/js2020/solaris/red.png';
  } else if (colorItem.classList.contains('colorBlack')) {
    imgHolder.src = 'https://webcademy.ru/files/js2020/solaris/black.png';
  } else if (colorItem.classList.contains('colorWhitePure')) {
    imgHolder.src = 'https://webcademy.ru/files/js2020/solaris/white-pure.png';
  } else if (colorItem.classList.contains('colorOrange')) {
    imgHolder.src = 'https://webcademy.ru/files/js2020/solaris/orange.png';
  } else if (colorItem.classList.contains('colorGraphite')) {
    imgHolder.src = 'https://webcademy.ru/files/js2020/solaris/graphite.png';
  }
}
