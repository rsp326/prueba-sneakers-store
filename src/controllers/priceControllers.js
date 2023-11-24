import Product from "../models/productModel.js";
import User from "../models/userModel.js";


export const getPriceByUserAndProduct = async (req, res) =>{
    try {
        const user = await User.findOne({id: req.params.id});
        const producto = await Product.findOne({nombre: req.params.productName})

        if(user && producto ){
            if(producto.existencia > 0) {
                if(user.productos_precio_especial){
                    const productoEspecial = user.productos_precio_especial.find(productoPrecioEspecial => productoPrecioEspecial.nombre_producto == producto.nombre);
                    if(productoEspecial){
                        res.status(200).json(productoEspecial.precio_especial);
                    }else{
                        res.status(200).json(producto.precio_base);
                    }
                    
                }else{
                    res.status(200).json(producto.precio_base);
                }
            }else{
                res.status(400).json({message:'El producto no se encuentra disponible en este momento.'});
            }
            
        }else{
            res.status(400).json({message:'Usuario no encontrado o producto no encontrado'});
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({message: 'Ha ocurrido un error al obtener los productos'});
    }
};