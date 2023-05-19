import { Router } from 'express';
import MoviesController from '../controllers/movies.controllers';

class MoviesRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }
    
    private routes() {
        this.router.post('/', MoviesController.create);
    }
}

export default new MoviesRouter().router;

