import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    firstname: {type: String, require:true, trim: true},
    lastname: {type: String, trim: true},
    password: {type: String, require:true, trim: true}
});
userSchema.index({status: 1 , createdAt: -1});
userSchema.pre("save", async function() {
    if (!this.isModified("password")) return;
    const salt = await bcrypt.genSalt(10);
    this.password = bcrypt.hash(this.password, salt);
});
const User = mongoose.model('User', userSchema);
export default User;