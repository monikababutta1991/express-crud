const Product = require('../models/product.model');

 const CreateProduct = async (req, res) =>{
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch(error){
        // console.log(error);
        res.status(500).json({message: error.message});
    }
};

 const GetAllProducts = async (req, res)=>{
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

 const GetProductFromId = async (req, res)=>{
    try{
        const id = req.params.id
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    }
};

 const UpdateProduct = async(req, res)=>{
    try{
        // const id = req.params.id
        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);
        if (!product){
            return res.status(404).json({message : `Product not found for id ${id}`});
        }
        // res.status(200).json(product);

        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);

    } catch(error){
        res.status(500).json({message: error.message});
    }
};

 const DeleteProduct = async(req, res)=>{
    try{
        const {id} = req.params;

        const product = await Product.findByIdAndDelete(id);
        
        if (!product){
            return res.status(404).json({message: `Product not found for id ${id}`});
        }

        res.status(200).json({message: "Product deleted successfully"});

    } catch(error){
        res.status(500).json({message: error.message});
    }
};

module.exports = {
    CreateProduct,
    GetAllProducts,
    GetProductFromId,
    UpdateProduct,
    DeleteProduct
}