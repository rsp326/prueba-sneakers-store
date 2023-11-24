import Product from "../models/productModel.js";

export const getProducts = async (req, res) =>{
    try {
        const products = await Product.find();
        const productsResult = products.filter(product => product.existencia > 0);
        
        res.status(200).json(productsResult);

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Ha ocurrido un error al obtener los productos'});
    }
};