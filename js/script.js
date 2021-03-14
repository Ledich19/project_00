"use strict";

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const nameFilm = prompt("Один из последних просмотренных фильмов?", ""),
                rating = prompt("На сколько оцените его?", "");

            if (nameFilm != null && rating != null && nameFilm != "" && rating != "" && nameFilm.length < 50) {
                personalMovieDB.movies[nameFilm] = rating;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман");
        } else {
            alert("Произошла ошибка");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const genre = prompt(`Ваш любимый жанр под номером ${i + 1}`, "");
            if (genre != null && genre != "") {
                personalMovieDB.genres[i] = genre;
            } else {
                i--;
            }
        }
        // personalMovieDB.genres.forEach(function (item, i) {
        //     console.log(`Любимый жанр ${i + 1} - это ${item}`);
        // });
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDb: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    }
};
// personalMovieDB.start();
// personalMovieDB.rememberMyFilms();
// personalMovieDB.detectPersonalLevel();
//personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDb();
console.log(personalMovieDB);





// for (let i = 1; i <= 2; i++) {
//     const nameFilm = prompt("Один из последних просмотренных фильмов?", "");
//     if (nameFilm == null || nameFilm == "" || nameFilm.length > 50) {
//         i--;
//     } else {
//         const rating = prompt("На сколько оцените его?", "1");
//         personalMovieDB.movies[nameFilm] = rating;
//     }
// }

// let i = 1;
// while (i <= 2) {
//     let nameFilm = prompt("Один из последних просмотренных фильмов?", "");
//     if (nameFilm == null || nameFilm == "" || nameFilm.length > 50) {
//         i--;
//     } else {
//         let rating = prompt("На сколько оцените его?", "1");
//         personalMovieDB.movies[nameFilm] = rating;
//     }
//     i++;
// }

// let i = 1;
// do {
//     let nameFilm = prompt("Один из последних просмотренных фильмов?", "");
//     if (nameFilm == null || nameFilm == "" || nameFilm.length > 50) {
//         i--;
//     } else {
//         let rating = prompt("На сколько оцените его?", "1");
//         personalMovieDB.movies[nameFilm] = rating;
//     }
//     i++;
// }
// while (i <= 2);