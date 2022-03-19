type Status = 'fail' | 'error';

class CustomError extends Error {
	message: string;
	httpStatus: number;
	status: Status;

	constructor(message: string, httpStatus: number) {
		super(message);

		this.message = message;
		this.httpStatus = httpStatus;
		this.status = String(httpStatus).startsWith('4') ? 'fail' : 'error';

		Error.captureStackTrace(this, this.constructor);
	}
}

export default CustomError;
