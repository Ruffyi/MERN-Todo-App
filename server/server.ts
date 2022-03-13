import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

// DB
import { connectDB } from './db/connectDB';

// Router
import todoRouter from './routes/todoRoutes';

// Middlewares
import { NotFoundPage } from './controllers/errorController';
import globalErrorMiddleware from './controllers/errorController';

dotenv.config({ path: './config/.env' });

connectDB();

const app = express();

if (process.env.PROJECT_MODE === 'development') {
	app.use(morgan('dev'));
}

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use('/api/v1/todos', todoRouter);

app.all('*', NotFoundPage);

app.use('*', globalErrorMiddleware);

app.listen(SERVER_PORT, () => {
	console.log(`Server is listening at port : ${SERVER_PORT}`);
});
