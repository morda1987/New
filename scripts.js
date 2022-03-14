const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
const personalMovieeDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    
const a = prompt('Один из недавно просмотренных фильмов', ''),
        b = prompt('На сколько его оцените?', ''),
        c = prompt('Один из недавно просмотренных фильмов', ''),
        d = prompt('На сколько его оцените?', '');
    

 personalMovieeDB.movies[a] = b;
 personalMovieeDB.movies[c] = d;

 
 console.log(personalMovieeDB);