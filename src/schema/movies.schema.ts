// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const moviesSchema = new Schema({
//   title: { 
//     type: String,
//     required: true,
//   }, // String is shorthand for {type: String}
//   author: {
//     type: String,
//     required: true,
//   },
//   releaseYear: {
//     type: Number,
//     required: true,
//   },
//   genre: {
//     type: String,
//     required: true,
//   },
// });

// export default mongoose.model('Movies', moviesSchema);

import { Model, Schema, model } from 'mongoose';
import { TMovie } from '../types';

class MovieSchema {
  public readonly model: Model<TMovie>;

  constructor() {
    const schema = new Schema({
      title: { 
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      releaseYear: {
        type: Number,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
    }, { timestamps: true });

    this.model = model<TMovie>('Movie', schema);
  }
}

export default new MovieSchema().model;