// app/api/models/User.ts
import mongoose, { Schema, Document, models, model } from 'mongoose';


/**
 * preference of interface over type
 * :-  In TypeScript, you can use both type and interface to define the structure of a Mongoose document — but in the case of Mongoose and extending Document, interface is recommended and more idiomatic
 */


// 1. Define a TypeScript interface
export interface IUser extends Document {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

// 2. Define the Mongoose schema using `Schema<IUser>`
const UserSchema = new Schema<IUser>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// 3. Export the model (prevent overwrite on hot-reload)
const User = models.User || model<IUser>('User', UserSchema);
export default User;
