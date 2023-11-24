import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    nombre: {type: String, require:true},
    precio_base: { type: Number, require:true },
    existencia: { type: Number, require:true }
});

const Product = mongoose.model('Product',productSchema);

export default Product;