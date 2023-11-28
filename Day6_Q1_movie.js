/*
Question -1 : https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
*/

class Movie{
    constructor(title, studio, rating = "PG"){
        this.title = title;
        this.studio = studio;
        this.rating = rating;

        // console.log(this.rating);
    }
    getPG(movies){
        let pgMovies = [];

        for(let i=0;i < movies.length;i++){
            if(movies[i].rating == "PG"){
                pgMovies.push(movies[i]);
            }
        }
        return pgMovies;
    }
}

let film = new Movie();
let movies = [
    new Movie("Casino Royale", "Eon Productions", "PG-13"),
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3",)
  ];
let pgM= film.getPG(movies);
console.log(pgM);