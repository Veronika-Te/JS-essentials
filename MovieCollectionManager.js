class Movie {
  static nextId = 1;

  #id;
  constructor(id, title, year, genres, rating, watched) {
    this.#id = Movie.nextId++;
    this.title = title;
    this.year = year;
    this.genres = genres;
    this._rating = rating;
    this.watched = watched;
  }

  get id() {
    return this.#id;
  }

  get rating() {
    return this._rating;
  }

  set rating(value) {
    if (typeof value !== "number")
      throw new TypeError("Rating must be a number");

    if (!Number.isInteger(value))
      throw new RangeError("Rating must be an integer");

    if (value < 0 || value > 10)
      throw new RangeError("Rating must be between 0 and 10");

    this._rating = value;
  }

  get watched() {
    return this._watched;
  }
  set watched(value) {
    if (typeof value !== "boolean") {
      throw new TypeError("Watched must be a boolean (true/false)");
    }
    this._watched = value;
  }
}

class MovieLibrary {
  constructor() {
    this.movies = [];
  }

  #isValidId(id) {
    return typeof id === "number" && Number.isInteger(id) && id >= 0;
  }

  addMovie(movie) {
    if (!(movie instanceof Movie)) {
      throw new TypeError("Invalid movie object");
    }
    if (this.movies.find((m) => m.id === movie.id)) {
      return false;
    }
    this.movies.push(movie);
    return true;
  }

  removeMovieId(id) {
    if (!this.#isValidId(id)) {
      throw new TypeError("ID must be a valid number");
    }

    const index = this.movies.findIndex((m) => m.id === id);
    if (index !== -1) {
      this.movies.splice(index, 1);
      return true;
    }
    return false;
  }

  findMovieByTitle(title) {
    if (typeof title !== "string") {
      throw new TypeError("Title must be a string");
    }
    const t = title.toLowerCase();
    const movie = this.movies.find((m) => m.title.toLowerCase() === t);
    return movie || null; // return null if not found
  }

  getMoviesByGenre(genre) {
    const g = genre.toLowerCase();
    return this.movies.filter((m) =>
      m.genres.some((gen) => gen.toLowerCase() === g)
    );
  }

  markAsWatched(id) {
    if (!this.#isValidId(id)) {
      throw new TypeError("ID must be a valid number");
    }
    const movie = this.movies.find((m) => m.id === id);
    if (movie) {
      movie.watched = true;
      return true;
    }
    return false;
  }

  updateRating(id, newRating) {
    if (!this.#isValidId(id)) {
      throw new TypeError("ID must be a valid number");
    }

    const movie = this.movies.find((m) => m.id === id);
    if (movie) {
      movie.rating = newRating;
      return true;
    }
    return false;
  }

  getStatistics() {
    if (this.movies.length === 0) {
      return {
        totalMovies: 0,
        watchedCount: 0,
        unwatchedCount: 0,
        averageRating: 0,
        oldestYear: null,
        newestYear: null,
      };
    }

    const totalMovies = this.movies.length;

    const watchedCount = this.movies.filter((m) => m.watched).length;
    const unwatchedCount = totalMovies - watchedCount;

    const ratedMovies = this.movies.filter((m) => m.rating > 0);

    const averageRating =
      ratedMovies.length > 0
        ? ratedMovies.reduce((sum, m) => sum + m.rating, 0) / ratedMovies.length
        : 0;

    const years = this.movies.map((m) => m.year);
    const oldestYear = Math.min(...years);
    const newestYear = Math.max(...years);

    return {
      totalMovies,
      watchedCount,
      unwatchedCount,
      averageRating,
      oldestYear,
      newestYear,
    };
  }
}

if (require.main === module) {
  const m1 = new Movie(0, "Inception", 2010, ["Sci-Fi"], 9, true);
  const m2 = new Movie(0, "Avatar", 2009, ["Fantasy"], 8, false);
  const m3 = new Movie(0, "Interstellar", 2014, ["Sci-Fi", "Drama"], 10, true);
  const m4 = new Movie(
    0,
    "The Dark Knight",
    2008,
    ["Action", "Crime"],
    9,
    true
  );
  const m5 = new Movie(0, "Pulp Fiction", 1994, ["Crime", "Drama"], 9, false);

  const library = new MovieLibrary();

  library.addMovie(m1);
  library.addMovie(m2);
  library.addMovie(m3);
  library.addMovie(m4);
  library.addMovie(m5);

  console.log(library.findMovieByTitle("inception"));
  console.log(library.getMoviesByGenre("Drama"));
  console.log(library.getStatistics());

  console.log(m1.id);
  console.log(m2.id);
  console.log(m3.id);
}

module.exports = { Movie, MovieLibrary };
