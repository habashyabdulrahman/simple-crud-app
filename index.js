const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const productRoute = require('./routes/product-route');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API Server');
}); 

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin:jGZrnHpSAMWN73nn@backenddb.jdow5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch((err) => {
    console.log('Failed to connect to MongoDB', err);
});