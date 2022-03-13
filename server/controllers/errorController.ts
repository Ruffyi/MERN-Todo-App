import { NextFunction, Request, Response } from 'express';
import CustomError from './../utils/CustomError';

const NotFoundPage = (req: Request, res: Response, next: NextFunction) => {
	const errorMessage = `Can't find ${req.originalUrl} on server`;

	next(new CustomError(errorMessage, 404));
};

const globalErrorMiddleware = (
	err: CustomError,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.send({
		message: 'ERROR',
	});
};

export { NotFoundPage };

export default globalErrorMiddleware;
