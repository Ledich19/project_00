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

document.addEventListener('DOMContentLoaded', () => {
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
    const poster = document.querySelector('.promo__bg');
    const genre = document.querySelector('.promo__genre');
    const movielist = document.querySelector(".promo__interactive-list");
    const filmitems = movielist.querySelectorAll(".promo__interactive-item");
    const addForm = document.querySelector('form.add');
    const addInput = document.querySelector('.adding__input');
    const checkbox = document.querySelector('input[type="checkbox" i]');

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    
    const makeChenges = () => {
        genre.textContent = "драма";
        poster.style.background = "url(img/bg.jpg)";
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };
    
    
    // filmitems.forEach(item => {
    //     item.remove();
    // });
    // movieDB.movies.sort();
    // movieDB.movies.forEach((item, i) => {
    //     movielist.insertAdjacentHTML("beforeend", `<li class="promo__interactive-item">${i + 1} - ${item}
    //     <div class="delete"></div>
    // </li>`);
    // });

    addForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = newFilm.slice(0, 21) + '...'; 
            }

            if (favorite == true) {
                console.log('Добавляем любимый фильм');
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            greateMovieList(movieDB.movies, movielist);
            e.target.reset();
        }
    });
    

    function greateMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
        films.forEach((film, i) => {
            parent.innerHTML += `<li class="promo__interactive-item">${i + 1} - ${film}
                    <div class="delete"></div>
                </li>`;
        });
        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                movieDB.movies.splice(i, 1);
                greateMovieList(films, parent);
            });
        });
        
    }

    deleteAdv(adv);
    makeChenges();
    greateMovieList(movieDB.movies, movielist);
});