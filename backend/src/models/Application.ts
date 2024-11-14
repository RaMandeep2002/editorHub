import mongoose, { Document, Schema } from "mongoose";


export interface IApplication extends Document {
    job: mongoose.Schema.Types.ObjectId,
    application: mongoose.Schema.Types.ObjectId,
    status: 'pending' | 'reviewed' | 'accepted' | 'rejected',
    portfolio: string[];
    appliedAt: Date,
}

const ApplicationSchema: Schema = new Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    applicant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'reviewed', 'accepted', 'rejected'],
    },
    portfolio: {
        type: [String],
        default: []
    },
    appliedAt: {
        type: Date,
        default: Date.now
    }
})

export default mongoose.model<IApplication>('Application', ApplicationSchema)