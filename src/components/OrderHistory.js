import React from 'react';
import { Container, Table } from 'react-bootstrap';
import '../App.css'
import Header from './Header';
const orderHistoryData = [
  { id: 1, date: '2024-10-12', status: 'Completed', total: 300 },
  { id: 2, date: '2024-10-14', status: 'Pending', total: 500 },
];

function OrderHistory() {
  return (
    <Container>
        <Header /> 
      <h2>Order History</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Status</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {orderHistoryData.map((order, index) => (
            <tr key={order.id}>
              <td>{index + 1}</td>
              <td>{order.date}</td>
              <td>{order.status}</td>
              <td>${order.total}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default OrderHistory;
