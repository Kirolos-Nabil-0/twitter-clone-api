import mongoose, { Schema, Document } from 'mongoose';

export type TweetDocument = Document & {
    content: string;
    author: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    retweets: mongoose.Types.ObjectId[];
    replies: mongoose.Types.ObjectId[];
    createdAt: Date;
    updatedAt: Date;
};

const TweetSchema: Schema = new Schema({
    content: {
        type: String,
        required: true,
        maxlength: 280 // or any desired limit
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    retweets: [{
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }],
    replies: [{
        type: Schema.Types.ObjectId,
        ref: 'Tweet'
    }]
}, { timestamps: true });

const Tweet = mongoose.model<TweetDocument>('Tweet', TweetSchema);

export default Tweet;
