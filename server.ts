import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { resolve } from 'path';

// DB
import { connectDB } from './db/connectDB';

// Router
import todoRouter from './routes/todoRoutes';

// Middlewares
import { NotFoundPage } from './controllers/errorController';
import globalErrorMiddleware from './controllers/errorController';
import cors from 'cors';

dotenv.config({ path: './config/.env' });

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

if (process.env.PROJECT_MODE === 'production') {
	app.use(express.static(resolve(__dirname, './client/build')));

	app.get('*', (req: Request, res: Response) => {
		res.sendFile(resolve(__dirname, './client/build', 'index.html'));
	});
}

if (process.env.PROJECT_MODE === 'development') {
	app.use(morgan('dev'));
}

const SERVER_PORT = process.env.SERVER_PORT || 5000;

app.use('/api/v1/todos', todoRouter);

app.all('*', NotFoundPage);

app.use('*', globalErrorMiddleware);

app.listen(SERVER_PORT, () => {
	console.log(`Server is listening at port : ${SERVER_PORT}`);
});
