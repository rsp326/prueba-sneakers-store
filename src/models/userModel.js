import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    id: {type: Number, autoIncrement:true},
    nombre: {type: String, require:true},
    apellido: {type: String, require:true},
    documento: {type: String, require:true},
    celular: {type: String, require:true},
    productos_precio_especial: { type: [Object]}
});

const User = mongoose.model('User',userSchema);

export default User;