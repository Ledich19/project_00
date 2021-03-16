/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

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

const input = document.querySelector('.add input');
const button = document.querySelector('.add button');

button.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value.length > 21) {
        input.value = input.value.slice(0, 21) + '...';
        movieDB.movies.push(input.value);
    } else {
        movieDB.movies.push(input.value);
    }

    if (document.querySelector('input[type="checkbox" i]').checked == true) {
        console.log('Добавляем любимый фильм');
    } else {
        console.log(false);
    }

    greateMovieList ();
});
console.log(document.querySelector('input[type="checkbox" i]'));



function deleteFilm() {
    const deleteFilmButton = document.querySelectorAll('.delete');
    deleteFilmButton.forEach((element, i) => {
        element.addEventListener('click', (e) => {
            delete movieDB.movies[i];
            console.log(movieDB.movies);
            greateMovieList ();
            deleteFilm();
        });
    });
}
deleteFilm();

function greateMovieList () {
    movielist.innerHTML = "";
            movieDB.movies.sort();
            movieDB.movies.forEach((item, i) => {
                movielist.innerHTML += `<li class="promo__interactive-item">${i + 1} - ${item}
                <div class="delete"></div>
            </li>`;
            });
}


console.log(document.querySelector('input[type="checkbox" i]'));