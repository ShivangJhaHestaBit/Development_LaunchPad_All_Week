import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    name: { type: String, required: true, trim: true },
    brand: { type: String, required: true, trim: true },
    category: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    cost: { type: Number, required: true },
    isDeleted: { type: Boolean, default: false },
}, { timestamps: true ,
    strict: false
});
export default mongoose.model('Product', productSchema);