class Movie {
  title: string;
  studio: string;
  rating: string;
  constructor(title: string, studio: string, rating?: string) {
    this.title = title;
    this.studio = studio;
    if (rating === undefined) this.rating = "PG";
    else this.rating = rating;
  }
  getPG(movies: Movie[]): string[] {
    var ratings = [];
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].rating.slice(0, 2) === "PG") ratings.push(movies[i].rating);
    }
    return ratings;
  }
}
var m = [];
var movie = new Movie("", "");
var m1 = new Movie("Casino Royale", "Eon Productions", "PG13");
var m2 = new Movie("XYZ", "ABC");
var m3 = new Movie("Avengers", "Warner Bros", "PG17");
var m4 = new Movie("Home Alone", "Walt Dinsney", "MS17");
m.push(m1);
m.push(m2);
m.push(m3);
m.push(m4);
var x = movie.getPG(m);
console.log(x);
