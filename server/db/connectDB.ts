import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config({ path: './../config/.env' });

const connectDB = async () => {
	try {
		const DBAUTH = process.env.MONGODB_URL?.replace(
			'<PASSWORD>',
			process.env.MONGODB_PASSWORD as string
		) as string;

		await connect(DBAUTH);

		console.log('Connection with DB : ✔');
	} catch (err) {
		return err;
	}
};

export { connectDB };
