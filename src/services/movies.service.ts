import { TMovie } from "../types";
import MovieSchema from "../schema/movies.schema";

export default class MoviesServices {
  // constructor() {

  // }

  public static async create(movie: TMovie) { // post
    await MovieSchema.create(movie);
  }
}

