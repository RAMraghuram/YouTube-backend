import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId,
      ref: "User",
    }, // one who is subscribing
    subscribedTo: {
      type: Schema.Types.ObjectId,
      ref: "User",
    }, // one who is being subscribed to
  },
  { timestamps: true }
);

export const Subscription = model("Subscription", subscriptionSchema);
