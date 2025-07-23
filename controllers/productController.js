// let products=[];

// exports.createProduct = (req,res,next) => {
//     const name = req.body;
//     const price = req.body;
//     const newProduct = { id: Date.now().toString(), name, price };
//     products.push(newProduct);
//     res.status(201).json({message: "Product Created"});
// };

// exports.getProducts = (req, res) => {
//     res.status(200).json({ products });
// };

// exports.getProductById = (req, res) => {
//     const product = products.find(p => p.id === req.params.id);
//     if (!product) 
//         return res.status(404).json({ message: 'Product not found' });
//     res.status(200).json(product);
// };


// exports.updateProduct = (req,res,next)=>{
//     const product = products.find(p=>p.id === req.params.id);
//     if(!product)
//         return res.status(404).json({message:"Product Not Found"});
//     product.name=req.body.name;
//     product.price = req.body.price;
//     res.status(200).json({message:"Product Updated Successfully"});
// };

// exports.deleteProduct = (req, res) => {
//     products = products.filter(p => p.id !== req.params.id);
//     // products = products.findByIdAndDelete(id);
//     res.status(200).json({ message: 'Product Deleted' });
// };


const Product = require('../models/product');

exports.getForm = (req, res) => {
    res.render('form', { pageTitle: 'Add Product' });
};

exports.createProduct = (req, res) => {
    const { name, price } = req.body;
    const product = new Product({ name, price });
    product.save()
        .then(() => res.redirect('/products/list'))
        .catch(err => console.log(err));
};

exports.getProducts = (req, res) => {
    Product.find()
        .then(products => res.render('productList', { products, pageTitle: 'Product List' }))
        .catch(err => console.log(err));
};

exports.getEditForm = (req, res) => {
    Product.findById(req.params.id)
        .then(product => res.render('editProduct', { product, pageTitle: 'Edit Product' }))
        .catch(err => console.log(err));
};

exports.updateProduct = (req, res) => {
    const { name, price } = req.body;
    Product.findByIdAndUpdate(req.params.id, { name, price })
        .then(() => res.redirect('/products/list'))
        .catch(err => console.log(err));
};

exports.deleteProduct = (req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.redirect('/products/list'))
        .catch(err => console.log(err));
};
