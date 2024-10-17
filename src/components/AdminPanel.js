import React, { useState } from 'react';
import { Container, Card, Table, Button, Form } from 'react-bootstrap';
import '../App.css';
import Header from './Header';

const initialProducts = [
  { id: 1, name: 'Product 1', price: 100, stock: 10 },
  { id: 2, name: 'Product 2', price: 200, stock: 5 },
];

function AdminPanel() {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '' });

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.stock) {
      const updatedProducts = [...products, { id: products.length + 1, ...newProduct }];
      setProducts(updatedProducts);
      setNewProduct({ name: '', price: '', stock: '' }); // Reset form after adding
    }
  };

  return (
    <Container className="mt-5">
      <Header />
      <Card className="shadow-sm rounded-lg"> 
        <Card.Body>
          <h2 className="text-center mb-4">Admin Panel</h2>
          <h4 className="text-center mb-4">Manage Products</h4>

          <Form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }}>
            <Form.Group controlId="formProductName" className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter product name"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group controlId="formProductPrice" className="mb-3">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={newProduct.price}
                onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                className="rounded-pill"
              />
            </Form.Group>

            <Form.Group controlId="formProductStock" className="mb-4">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter stock"
                value={newProduct.stock}
                onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                className="rounded-pill"
              />
            </Form.Group>

            <Button 
              type="submit" 
              className="w-100 btn-custom rounded-pill" 
              style={{ backgroundColor: "#020120", border: "none", padding: "10px 20px" }}>
              Add Product
            </Button>
          </Form>

          <h4 className="mt-5 mb-3 text-center">Product List</h4>
          <Table striped bordered hover className="table-custom">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.stock}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default AdminPanel;
