import { App } from "./app";
import dotenv from 'dotenv';

dotenv.config();
const app = new App().app;

app.listen(3333, () => console.log('Server running on port 3333'));