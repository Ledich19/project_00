/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll(".promo__adv img");
adv.forEach(item => {
    item.remove();
});

const poster = document.querySelector('.promo__bg');
const genre = document.querySelector('.promo__genre');
genre.textContent = "драма";
poster.style.background = "url(img/bg.jpg)";

const movielist = document.querySelector(".promo__interactive-list");
const filmitems = movielist.querySelectorAll(".promo__interactive-item");
// filmitems.forEach(item => {
//     item.remove();
// });
// movieDB.movies.sort();
// movieDB.movies.forEach((item, i) => {
//     movielist.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${i + 1} - ${item}
//     <div class="delete"></div>
// </li>`);
// });

movielist.innerHTML = "";
movieDB.movies.sort();
movieDB.movies.forEach((item, i) => {
        movielist.innerHTML += `<li class="promo__interactive-item">${i + 1} - ${item}
        <div class="delete"></div>
    </li>`;
    });