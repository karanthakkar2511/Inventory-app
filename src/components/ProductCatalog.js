import React, { useState } from 'react';
import { Card, Button, Container, Row, Col, Modal, ListGroup, Form } from 'react-bootstrap';
import Header from './Header';
import '../App.css';

const productsData = [
  {
    id: 1,
    name: 'Watches',
    price: 5000,
    stock: 10,
    image: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?cs=srgb&dl=pexels-ferarcosn-190819.jpg&fm=jpg',
    category: 'Watches',
  },
  {
    id: 2,
    name: ' Watches',
    price: 2000,
    stock: 5,
    image: 'https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg',
    category: 'Watches', 
  },
  {
    id: 3,
    name: ' Shoes',
    price: 1000,
    stock: 0,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s',
    category: 'Accessories', 
  },
  {
    id: 4,
    name: 'Watches',
    price: 1500,
    stock: 8,
    image: 'https://www.fastrack.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dwa3e8805a/images/Fastrack/Catalog/FV60024QM01W_1.jpg?sw=600&sh=600',
    category: 'Watches', 
  },
  {
    id: 5,
    name: 'Cloth',
    price: 2500,
    stock: 2,
    image: 'https://i.pinimg.com/222x/af/56/7b/af567b568bfcb8bffa232fd7bffaf82c.jpg',
    category: 'Fashion', 
  },
  {
    id: 6,
    name: 'Cloth',
    price: 1000,
    stock: 5,
    image: 'https://static.nextdirect.com/resource/blob/18162/d273c73652ad0ee44ae793d184bed624/hoodies-data.jpg',
    category: 'Fashion', 
  },
  {
    id: 7,
    name: ' Shoes',
    price: 3200,
    stock: 30,
    image: 'https://t3.ftcdn.net/jpg/06/12/00/18/360_F_612001823_TkzT0xmIgagoDCyQ0yuJYEGu8j6VNVYT.jpg',
    category: 'Accessories', 
  },
  {
    id: 8,
    name: ' Bands',
    price: 120,
    stock: 100,
    image: 'https://media.istockphoto.com/id/1390259144/photo/collection-of-trendy-silk-elastic-band-scrunchies-and-pearl-hair-clips-on-white-background.jpg?s=612x612&w=0&k=20&c=VHBFjE2wKKx5oXurIpUARHqjwEzJNI6O8BAkQGNNWYk=',
    category: 'Accessories', 
  },
  {
    id: 9,
    name: ' Cloth',
    price: 990,
    stock: 3,
    image: 'https://assets.vogue.com/photos/5891e0ebb482c0ea0e4db2a8/4:3/w_2560%2Cc_limit/02-lestrange.jpg',
    category: 'Fashion', 
  },
];

const categories = [...new Set(productsData.map(product => product.category))]; 

function ProductCatalog() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [sortOption, setSortOption] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(''); 

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const filteredProducts = productsData.filter((product) => {
    const matchesPriceFilter = () => {
      if (priceFilter === 'under100') return product.price < 100;
      if (priceFilter === 'under500') return product.price >= 100 && product.price < 500;
      if (priceFilter === 'under2500') return product.price >= 500 && product.price < 2500;
      return true;
    };

    const matchesCategoryFilter = () => {
      return selectedCategory ? product.category === selectedCategory : true;
    };

    return matchesPriceFilter() && matchesCategoryFilter();
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === 'lowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'highToLow') {
      return b.price - a.price;
    }
    return 0;
  });

  return (
    <Container>
      <Header /> 
      <h2 className="catalog-title">Product Catalog</h2>

      <Form.Group controlId="filterPrice">
        <Form.Label>Filter by Price</Form.Label>
        <Form.Control
          as="select"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="under100">Under $100</option>
          <option value="under500">Under $500</option>
          <option value="under2500">Under $2500</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="filterCategory">
        <Form.Label>Filter by Category</Form.Label>
        <Form.Control
          as="select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="sortProducts">
        <Form.Label>Sort by Price</Form.Label>
        <Form.Control
          as="select"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Select</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </Form.Control>
      </Form.Group>

      <Row>
        {sortedProducts.map((product) => (
          <Col key={product.id} md={4}>
            <Card className="product-card">
              <Card.Img variant="top" src={product.image} alt={product.name} className="product-image" />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Price: ${product.price}</Card.Text>
                <Card.Text>Stock: {product.stock}</Card.Text>
                <Button
                  className="custom-button"
                  onClick={() => addToCart(product)}
                  disabled={product.stock === 0}
                >
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length > 0 ? (
            <ListGroup>
              {cart.map((item, index) => (
                <ListGroup.Item key={index}>
                  <strong>{item.name}</strong> - ${item.price}
                </ListGroup.Item>
              ))}
            </ListGroup>
          ) : (
            <p>Your cart is empty.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button className="custom-button" onClick={handleCloseCart}>
            Close
          </Button>
          <Button className="custom-button" onClick={() => alert('Checkout functionality here!')}>
            Proceed to Checkout
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProductCatalog;