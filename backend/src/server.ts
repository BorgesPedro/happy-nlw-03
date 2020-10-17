import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import './database/connection';
import routes from './routes';
import errorHandler from './errors/handler';
import path from 'path';




//usa o framework express para trabalhar com as rotas
const app = express();
//definir que o express possa usar json
app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);



//serviodr escutando na porta 3333
app.listen(3333);
