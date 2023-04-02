/* ESERCIZIO 1
  Fornito il seguente oggetto, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

// const me = {
//     name: 'Joh',
//     lastName: 'Doe',
//     skills: ['javascript', 'html', 'css'],
//   }
  
//   me.skills.pop();
//   console.log(me.skills);

/* ESERCIZIO 2
  Scrivi del codice per creare un array di soli valori DISPARI da 1 a 100.
 */

// let array = [];
// for (let var1 = 1; var1 <= 99; var1+=2) {
//     array.push(var1);
// } console.log(array);

/* ESERCIZIO 4
  Scrivi del codice per ricavare solamente i valori PARI da un array composto da soli valori numerici.
 */

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let numbers = 0; numbers <= 10; numbers+=2) {
//     console.log(numbers);
// } 

/* ESERCIZIO 5
  Scrivi del codice per sommare a catena i numeri contenuti in un array.
 */

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     let mySum = 0;

// for (let i = 0; i < numbers.length; i++) {
//   mySum += numbers[i];
//  }

//  console.log("La somma dell'array è " + mySum);

/* ESERCIZIO 6
  Scrivi del codice per incrementare di 1 tutti i valori numerici in un array.
*/

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < numbers.length; i++) {
//    numbers[i] = numbers[i] + 1; //add + 1
//  }
//  console.log(numbers);

/* ESERCIZIO 7 (EXTRA)
  Scrivi del codice per eliminare solo i valori PARI da un array.
*/
  let numbers = [];

  // for (let i = 0; i <= 10; i++) { //ciclo di un array contenente dei valori che vanno da 0 a 10 (incluso)
  //   if (i%2 == 1) { //condizione [modulo%2] dell'indice [i] che scorre all'interno dell'array è vera [1] (false == 0)
  //     numbers.push(i); //allora eliminalo tramite metodo
  //   }
  // }
  // console.log(numbers); //stampali (solo dispari)
    
/* ESERCIZIO 8
  Scrivi del codice per creare un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 10 (incluso), SENZA AMMETTERE DUPLICATI.
 */

  let array = [];
  let x; //undifened

    for (let num = 0; num < 10; num++) {

      x = Math.floor(Math.random() * 11);
      if (array.includes(x) === true) {
        num = num - 1;
      } else {
        array.push(x);
      }
    }

    console.log(array);

  /* ESERCIZIO 9
  Sostituisci ogni stringa contenuta in un array con un numero rappresentante la sua lunghezza.
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/

// let array = ["VincyDeu" , "VinceBlack" , "Fusion"];

// for (let i = 0; i < array.length; i++) { //scorrimento dell'array
//     array[i] = array[i].length; //lunghezza dei caratteri
// }

// console.log(array); //print

/* ESERCIZIO 10
  Scrivi un algoritmo in grado di invertire un array.
  es: [1, 3, 5] ==> [5, 3, 1]
*/

// let numbers = [2, 3, 5];
// numbers.reverse(); //metodo invertire i numeri di un array
// console.log(numbers);

/* ESERCIZIO 11
  Scrivi del codice per estrarre il massimo valore numerico da un array.
*/

// let array = [2, 5, 6, 1, 4, 10, 18, 7, 8];

// const min = array => array.reduce((x, y) => Math.min(x, y));
// const max = array => array.reduce((x, y) => Math.max(x, y));

// console.log("Il Max è = " + max(array));
// console.log("Il Min è = " + min(array));

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]

/* ESERCIZIO 12
  Scrivi del codice per trovare il film più vecchio nell'array fornito.
*/

// let oldFilm = movies[0];

// for (let i = 0; i < movies.length; i++) {
//     if ((movies[i].Year) < (oldFilm.Year)) {
//       oldFilm = movies[i];
//   }
// }

// console.log(oldFilm);

/* ESERCIZIO 13
  Scrivi del codice per ottenere il numero di film contenuti nell'array fornito.
*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/

// let TitleFilms = []; //creo un array

// for (let i = 0; i < movies.length; i++) { //scorro all'interno dell'array movies
//     let movie = movies[i]; //all'interno della varibile movie -> metto l'indice interessato.
//     let title = movie.Title; //all'interno della varibile title -> accedo all'etichetta Title (titolo del film).
//     TitleFilms.push(title); //aggiungo tramite il metodo push, step by step, i titoli dei film.
// }

// console.log(TitleFilms);

/* ESERCIZIO 15
  Scrivi del codice per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/

// let TitlesFilms = [];

// for (let i = 0; i < movies.length; i++) {
//     if (movies[i].Year >= 2000) {
//       TitlesFilms.push(movies[i]);
//     }
// }
//   console.log(TitlesFilms);

/* ESERCIZIO 16
  Scrivi del codice per ottenere dall'array fornito il film con il seguente id.
*/

// const id = "tt0355702";

// for (let i = 0; i < movies.length; i++) {
//     //Non lo so
// }

/* ESERCIZIO 17
  Scrivi del codice per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/

// let Years = 0;

// for (let i = 0; i < movies.length; i++) {
//     Years = Years + movies[i].Year;
// }
// console.log(Years);

/* ESERCIZIO 18
  Scrivi del codice per recuperare tutti i film dall'array fornito che contengono una parola fornita.
*/

// let KeyWord = "Rings";
// let ArrayKey = [];

// for (let i = 0; i < movies.length; i++) {

//   if (movies[i].Title.includes(KeyWord)) { //se nell'array movies (tramite indice [i] che scorre all'interno, include Rings).
//       console.log(movies[i]); //allora stampalo
//   } else {
//       console.log("Non trovo la parola cercata");
//   }
// }





