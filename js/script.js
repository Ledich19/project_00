"use strict";

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const nameFilm = prompt("Один из последних просмотренных фильмов?", ""),
            rating = prompt("На сколько оцените его?", "");

        if (nameFilm != null && rating != null && nameFilm != "" && rating != "" && nameFilm.length < 50) {
            personalMovieDB.movies[nameFilm] = rating;
        } else {
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count > 0 && personalMovieDB.count <= 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    } else {
        alert("Произошла ошибка");
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
   for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`);
   }
}
writeYourGenres();

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
console.log(personalMovieDB);