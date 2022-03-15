import { NextFunction, Request, Response } from 'express';
import CustomError from './../utils/CustomError';
import dotenv from 'dotenv';

dotenv.config({ path: './../config/.env' });

const NotFoundPage = (req: Request, res: Response, next: NextFunction) => {
	const errorMessage = `Can't find ${req.originalUrl} on server`;

	next(new CustomError(errorMessage, 404));
};

const sendErrorDev = (res: Response, err: CustomError) => {
	const { message, httpStatus = 500, status = 'error', stack } = err;

	res.status(httpStatus).send({
		error: {
			message,
			httpStatus,
			status,
		},
		stack,
	});
};

const sendErrorProd = (res: Response, err: CustomError) => {
	const { message, httpStatus = 500, status = 'error' } = err;

	res.status(httpStatus).send({
		message: 'Something went wrong :(',
		status,
	});
};

const globalErrorMiddleware = (
	err: CustomError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	if (process.env.PROJECT_MODE === 'development') {
		sendErrorDev(res, err);
	} else if (process.env.PROJECT_MODE === 'production') {
		sendErrorProd(res, err);
	}
};

export { NotFoundPage };

export default globalErrorMiddleware;
