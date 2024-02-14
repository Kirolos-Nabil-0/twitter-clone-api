import mongoose, { Schema, Document } from 'mongoose';

export type UserDocument = Document & {
    name: string;
    email: string;
    bio?: string;
    location?: string;
    website?: string;
    profilePicture?: string;
    tweets: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
    followers: mongoose.Types.ObjectId[];
    messages: mongoose.Types.ObjectId[];
    password: string;
    createdAt: Date;
    updatedAt: Date;
};

const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    bio: String,
    location: String,
    website: String,
    profilePicture: String,
    tweets: [{
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }],
    following: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    followers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
    }],
    password: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model<UserDocument>('User', UserSchema);

export default User;
