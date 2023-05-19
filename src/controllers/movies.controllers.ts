import { TMovie } from "../types";
import MoviesServices from "../services/movies.service";
import { Request, Response } from 'express';

export default class MoviesController {
  // private service: MoviesServices;

  // constructor() {
  //   this.service = new MoviesServices();
  // }
  

    public static async create(req: Request, res: Response) { // post
      await MoviesServices.create(req.body);
      return res.status(201).json({ message: 'Movie created' });
    }
}

