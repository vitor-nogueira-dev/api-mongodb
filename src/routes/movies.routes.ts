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
        this.router.get('/', MoviesController.read);
    }
}

export default new MoviesRouter().router;

