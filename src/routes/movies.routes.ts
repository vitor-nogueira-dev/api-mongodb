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
        this.router.get('/:id', MoviesController.readById);
        this.router.put('/:id', MoviesController.update);
        this.router.delete('/:id', MoviesController.delete);
    }
}

export default new MoviesRouter().router;

