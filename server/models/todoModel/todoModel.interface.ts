import { Document } from 'mongoose';

type TTodoModelStatus = 'status' | 'progress';

interface ITodoModel extends Document {
	name: string;
	status: TTodoModelStatus;
}

export default ITodoModel;
