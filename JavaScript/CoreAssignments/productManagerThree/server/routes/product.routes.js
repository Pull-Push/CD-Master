const ProductController = require('../controllers/product.controller');

module.exports = (app) => {
    app.post('/api/product', ProductController.createProduct);
    app.get("/api/product/:id", ProductController.getProduct);
    app.get('/api/product', ProductController.getAllProducts);
    app.put('/api/edit/:id',ProductController.updateProduct);
    app.delete('/api/product/:id', ProductController.deleteProduct);
}