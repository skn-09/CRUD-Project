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


let products = [];

exports.getForm = (req, res) => {
    res.render('form', { pageTitle: 'Add Product' });
};

exports.createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = { id: Date.now().toString(), name, price };
    products.push(newProduct);
    res.redirect('/products/list');
};

exports.getProducts = (req, res) => {
    res.render('productList', { products, pageTitle: 'Product List' });
};

exports.getEditForm = (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return res.send('Product Not Found');
    res.render('editProduct', { product, pageTitle: 'Edit Product' });
};

exports.updateProduct = (req, res) => {
    const { name, price } = req.body;
    const product = products.find(p => p.id === req.params.id);
    if (product) {
        product.name = name;
        product.price = price;
    }
    res.redirect('/products/list');
};

exports.deleteProduct = (req, res) => {
    products = products.filter(p => p.id !== req.params.id);
    res.redirect('/products/list');
};
