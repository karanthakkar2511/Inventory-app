import React from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import '../App.css';

function Cart({ cart }) {
  const handleCheckout = () => {
    // Checkout logic here
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Your Cart</h2>

      <Table striped bordered hover className="cart-table">
        <thead className="table-header">
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>${item.price}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                Your cart is empty
              </td>
            </tr>
          )}
        </tbody>
      </Table>

      {cart.length > 0 && (
        <div className="d-flex justify-content-end">
          <Button 
            variant="success" 
            onClick={handleCheckout} 
            className="btn-checkout rounded-pill">
            Proceed to Checkout
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Cart;
