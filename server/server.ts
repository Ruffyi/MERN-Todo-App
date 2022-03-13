import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';

dotenv.config({ path: './config/.env' });

const app = express();

if (process.env.PROJECT_MODE === 'development') {
	app.use(morgan('dev'));
}

const SERVER_PORT = process.env.SERVER_PORT || 3000;

app.use('/', (req, res) => {
	res.send({
		message: 'Hi!',
	});
});

app.listen(SERVER_PORT, () => {
	console.log(`Server is listening at port : ${SERVER_PORT}`);
});
