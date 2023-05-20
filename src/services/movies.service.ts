import { TMovie } from "../types";
import MovieSchema from "../schema/movies.schema";
import { isValidObjectId } from "mongoose";

export default class MoviesServices {
  // constructor() {

  // }
  public static async create(movie: TMovie) { // post
    await MovieSchema.create(movie);
  }
  public static async read(): Promise<TMovie[]> { // read
    return MovieSchema.find();
  }
  public static async readById(id: string): Promise<TMovie | null> { // readById
    if ( !isValidObjectId(id) ) throw new Error('Invalid id');
    return MovieSchema.findById(id);
  }
  public static async update(id: string, movie: TMovie) { // update
    if ( !isValidObjectId(id) ) throw new Error('Invalid id');
    await MovieSchema.findByIdAndUpdate(id, movie);
  }
  public static async delete(id: string) { // delete
    if ( !isValidObjectId(id) ) throw new Error('Invalid id');
    await MovieSchema.findByIdAndDelete(id);
  }
}

