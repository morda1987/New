const numberOfFilms = +prompt ('Сколько фильмов вы уже посмотрели?', '');
const personalMovieeDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
    
 for (let i = 0; i < 2; i++) {
   const a = prompt('Один из недавно просмотренных фильмов', ''),
         b = prompt('На сколько его оцените?', '');
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieeDB.movies[a] = b;
    console.log('done');
    } else {
        console.log('Error');
        i--;
    }
    
 }
console.log(personalMovieeDB);
 if (personalMovieeDB.count < 10;) {
     console.log ('Вы посмотрели мало фильмов')
 }
