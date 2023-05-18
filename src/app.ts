import express, { Application } from 'express';
import cors from 'cors';
import mongoose, { ConnectOptions } from 'mongoose';


export class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
        this.database();
    }

    private database() {
        mongoose.connect(process.env.MONGO_URL || "", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        } as ConnectOptions)
    }

    private middlewares() {
        this.app.use(express.json());
        this.app.use(cors())
    }

    private routes() {
        this.app.get('/', (req, res) => {
            res.send('Hello World');
        })
    }
}
