import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
   name: { type: String, required: true }, // Corrected `string` to `String`
   email: { type: String, required: true, unique: true }, // Corrected `string` to `String`
   password: { type: String, required: true }, // Corrected `string` to `String`
   creditBalance: { type: Number, default: 5 } // Corrected `number` to `Number`
});

const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
