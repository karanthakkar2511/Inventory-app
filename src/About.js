// About.js
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from './components/Header';

function About() {
  return (
    <Container className="mt-4">
      <Header /> 
      <h2>About Us</h2>
      <Row>
        <Col md={12}>
          <p>
            Welcome to My Store! We are dedicated to providing you with the best shopping experience.
            Our mission is to offer a wide selection of high-quality products at competitive prices.
            Whether you are looking for electronics, fashion, or home goods, we have something for everyone.
          </p>
          <p>
            Our team is passionate about customer satisfaction and strives to exceed your expectations.
            Thank you for choosing My Store for your shopping needs!
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://cdn.thewirecutter.com/wp-content/media/2024/08/lcdledtvs-2048px-hisenseu8n-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp" alt="Electronics" />
            <Card.Body>
              <Card.Title>Electronics</Card.Title>
              <Card.Text>
                Discover the latest gadgets and devices that enhance your lifestyle.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn6F4wKWB-TTT7l3vGZrUKqDx9XZJwhlO5t92osZVVgY5o0xO3LHu03WAdeGh5hYGRTHE&usqp=CAU" alt="Fashion" />
            <Card.Body>
              <Card.Title>Fashion</Card.Title>
              <Card.Text>
                Explore our trendy collection to find your perfect style.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="https://secondnatureonline.co.uk/cdn/shop/collections/Firefly_cosy_living_room_with_towels_candles_and_baskets_9993.jpg?v=1711566567" alt="Home Goods" />
            <Card.Body>
              <Card.Title>Home Goods</Card.Title>
              <Card.Text>
                Upgrade your home with our stylish and functional products.
              </Card.Text>
              <Button variant="primary">Shop Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

     
      <Row className="mt-5">
        <Col md={12}>
          <h3>Our History</h3>
          <p>
            Founded in [Year], My Store started with a simple idea: to make online shopping convenient
            and accessible for everyone. Over the years, we have grown from a small startup to a
            reputable online retailer with a vast range of products and a loyal customer base.
          </p>
        </Col>
      </Row>

     
      <Row className="mt-5">
        <Col md={12}>
          <h3>What Our Customers Say</h3>
          <blockquote className="blockquote">
            <p>"My Store has transformed my shopping experience. The quality of products is unmatched!"</p>
            <footer className="blockquote-footer">Jane Doe, <cite title="Source Title">Satisfied Customer</cite></footer>
          </blockquote>
          <blockquote className="blockquote">
            <p>"I love the variety and the fast delivery. My go-to place for online shopping!"</p>
            <footer className="blockquote-footer">John Smith, <cite title="Source Title">Happy Shopper</cite></footer>
          </blockquote>
        </Col>
      </Row>

   
      <Row className="mt-5">
        <Col md={12}>
          <h3>Meet Our Team</h3>
          <p>
            Our dedicated team works tirelessly to bring you the best products and services. Each member 
            brings unique skills and expertise to ensure that we meet your needs and exceed your expectations.
          </p>
        </Col>
      </Row>

      <Row className="mt-5">
        <Col md={12}>
          <h3>Frequently Asked Questions</h3>
          <h5>1. How do I place an order?</h5>
          <p>You can easily place an order by browsing our products, adding them to your cart, and checking out.</p>
          
          <h5>2. What payment methods do you accept?</h5>
          <p>We accept all major credit cards, PayPal, and other secure payment methods.</p>
          
          <h5>3. What is your return policy?</h5>
          <p>We have a 30-day return policy for unused products. Please visit our return policy page for more details.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
