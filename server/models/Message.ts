import mongoose, { Schema, Document } from "mongoose";

export type MessageDocument = Document & {
  content: string;
  sender: mongoose.Types.ObjectId;
  recipient: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

const MessageSchema: Schema = new Schema(
  {
    content: {
      type: String,
      required: true,
      maxlength: 1000, // or any desired limit
    },
    sender: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    recipient: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

const Message = mongoose.model<MessageDocument>("Message", MessageSchema);

export default Message;
