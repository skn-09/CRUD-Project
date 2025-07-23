// const express = require('express');   
// const bodyParser = require('body-parser');
// const productRoutes = require('./routes/productRoutes');

// const app = express();    //Used to create server
// app.use(bodyParser.json());  //use to read the data from middleware(JSON Data)

// app.use('/api/products',productRoutes);

// app.listen(3000 , ()=>{;
//     console.log("Listening server on port localhost:3000")
// });


const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');

const productRoutes = require('./routes/productRoutes');

const app = express();

// EJS setup
app.set('view engine', 'ejs');
app.set('views', 'views');

// Serve CSS files from public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

// Routes
app.use('/products', productRoutes);

mongoose.connect('mongodb+srv://nikamsnehal0903:root@cluster1.rimnwbb.mongodb.net/crud?retryWrites=true&w=majority&appName=Cluster1')
    .then(() => {
        app.listen(3000, () => 
            console.log('Server running on server 3000'));
    })
    .catch(err => console.log(err));
