import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
    id: {type: Number, require: true},
    title: {type: String, require: true, trim: true},
    cost: {type: Number, require: true},
});

export default mongoose.model('product', productSchema);
