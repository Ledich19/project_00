"use strict";
/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/


let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

if (numberOfFilms > 0 && numberOfFilms < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("Вы классический зритель");
} else if (numberOfFilms > 30) {
    alert("Вы киноман");
} else {
    alert("Произошла ошибка");
}

// for (let i = 1; i <= 2; i++) {
//     let nameFilm = prompt("Один из последних просмотренных фильмов?", "");
//     if (nameFilm == null || nameFilm == "" || nameFilm.length > 50) {
//         i--;
//     } else {
//         let rating = prompt("На сколько оцените его?", "1");
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

let i = 1;
do {
    let nameFilm = prompt("Один из последних просмотренных фильмов?", "");
    if (nameFilm == null || nameFilm == "" || nameFilm.length > 50) {
        i--;
    } else {
        let rating = prompt("На сколько оцените его?", "1");
        personalMovieDB.movies[nameFilm] = rating;
    }
    i++;
}
while (i <= 2);

console.log(personalMovieDB);