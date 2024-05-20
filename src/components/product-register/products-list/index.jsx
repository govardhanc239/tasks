import React, { useState } from 'react';
import { Row, Col, Table, Modal, Button, Card ,FormControl,Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'react-bootstrap/Image';
import ProductAdd from '../add-product';
import ProductPagination from '../pagination';
// import AppBarComponent from '../app bar';

export const ProductList = ({ products }) => {
  const [showModal, setShowModal] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPageProducts, setCurrentPageProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [results ,setResults] = useState([])

  const handleModal = (product) => {
    setSelectedProduct(product);
    setShowModal(!showModal);
  };

  const updateCurrentPageProducts = (paginatedProducts) => {
    setCurrentPageProducts(paginatedProducts);
  };
  const handleSearchChange=(e)=>{
    setSearchQuery(e.target.value)
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
     setResults(filteredProducts)
     setShowForm(false)
     setShowTable(false)
  }
  
 const handleAddItems=()=>{
     setShowForm(!showForm)
     setShowTable(false)
     setSearchQuery('')
 }
 const handleShowDetails=()=>{
     setShowTable(!showTable)
     setShowForm(false)
     setSearchQuery('')
 }
  return (
    <div>
      <Form>
        <Row className="align-items-center mb-3">
          <Col xs="auto">
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2"
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Col>
          <Col xs="auto">
            <Button variant='info' type='button' onClick={handleShowDetails}>
              {showTable ? 'Hide' : 'Show'} details
            </Button>
          </Col>
          <Col xs="auto">
            <Button variant='primary' type='button' onClick={handleAddItems}>
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      {searchQuery && results.length > 0 && (
        <Row className="mt-4">
          {results.map((product, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={product.imagePath} alt={product.name} width={100} height={100} />
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Button variant="primary" onClick={() => handleModal(product)}>
                    View Details
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      {showTable && 
        <>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>S.NO</th>
                <th>Name</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
              {currentPageProducts.map((product, index) => (
                <tr key={index}>  
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.description}</td>
                  <td>
                    <Row>
                      <Col>
                        <button type="button" onClick={() => handleModal(product)}>
                          <Image width={20} height={10} src={product.imagePath} alt={product.name} thumbnail />
                        </button>
                      </Col>
                    </Row>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <ProductPagination products={products} onPageChange={updateCurrentPageProducts} />
        </>
       }
      

        <>
        <Modal show={showModal} onHide={() => setShowModal(!showModal)}>
        <Modal.Header closeButton>
          <Modal.Title>Product Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <Card>
              <Card.Header>
                <h3 style={{ textAlign: "center" }}>{selectedProduct.name}</h3>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <Image width={100} height={200} src={selectedProduct.imagePath} alt={selectedProduct.name} thumbnail />
                </Card.Title>
                <Card.Text>
                  <p>{selectedProduct.description}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal></>
       
      {showForm && <ProductAdd />}
    </div>
  );
};
