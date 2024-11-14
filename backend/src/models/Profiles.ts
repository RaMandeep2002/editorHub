import mongoose, { Document, Schema } from "mongoose";


interface IEditingExperience {
    title: string;
    creator: string;
    startDate?: Date;
    endDate?: Date;
    description?: string;
    genres?: string[];
}

interface ICertification {
    name: string;
    issuingOrganization: string;
    issuedDate: Date;
    expirationDate: Date;
}

interface IEditingSample {
    title: string;
    decription: string;
    thumbnail: string;
    url: string;
    dateAdded: Date;
}

interface IEditingPorfile extends Document {
    user: mongoose.Schema.Types.ObjectId;
    firstname: string;
    lastname: string;
    headline: string;
    bio: string;
    location?: string;
    specialties: string;
    editingExperiences: IEditingExperience[];
    education: {
        degree: string;
        instituation: string;
        graducationyear: number;
    };
    certification: ICertification[];
    editingsamples?: IEditingSample[];
    rates?: {
        hourly?: number;
        perWord?: number;
        perPage?: number;
    };
    availability: {
        avialable: boolean;
        availableFrom?: Date;
        turnaroundTime?: string;
    };
}

const EditiorProfileSchema: Schema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true,
    },
    headline: {
        type: String,
        maxlenght: 200,
    },
    bio: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    specialties: {
        type: String
    },
    editingExperiences: [{
        title: { type: String, required: true },
        creator: { type: String, required: true },
        startDate: {
            type: Date,
            default: Date.now
        },
        endDate: {
            type: Date,
            default: Date.now
        },
        description: { type: String },
        genres: [{ type: String }],
    }],
    editingSamples: [{
        title: {
            type: String,
        },
        description: {
            type: String,
        },
        thumbnail:{
            type: String,
        },
        url: {
            type: String,
        },
        dateAdded: {
            type: Date,
            default: Date.now,
        },
    }],
    rates: {
        hourly: { type: Number },
        perWord: { type: Number },
        perPage: { type: Number }
    },
    availability: {
        availableFrom: { type: Date, required: true },
        turnaroundTime: { type: String }
    },
})

const EditorProfile = mongoose.model<IEditingPorfile>("EditorProfile", EditiorProfileSchema);

export { IEditingPorfile, EditorProfile };