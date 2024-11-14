import mongoose, { Document, mongo, Schema } from "mongoose";


export interface IJob extends Document {
    title: String;
    description: String;
    requirements: String;
    createdAt: Date;
}

const JobSchema: Schema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    requirements: {
        type: [String],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },

})

export default mongoose.model<IJob>('JOb', JobSchema);