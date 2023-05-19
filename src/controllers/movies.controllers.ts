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

  public static async read(req: Request, res: Response) { // post
    const movies = await MoviesServices.read();
    return res.status(200).json(movies);
  }

  public static async readById(req: Request, res: Response) { // readById
    try {
      const movies = await MoviesServices.readById(req.params.id);
      if (!movies) {
        return res.status(404).json({ message: 'id não existe' });
      }
      return res.status(200).json(movies);
    } catch (error) {
      return res.status(404).json({ message: (error as Error).message });
    }
  }
  public static async update(req: Request, res: Response) { // update
    try {
      await MoviesServices.update(req.params.id, req.body);
      return res.status(200).json({ message: 'Movie updated' });
    } catch (error) {
      return res.status(404).json({ message: (error as Error).message });
    }
  }
  

}

