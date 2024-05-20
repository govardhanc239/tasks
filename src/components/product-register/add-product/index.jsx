import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
const ProductAdd = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        image: null,
      });
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, image: file });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        fetch('http://localhost:3000/products',{
        method :"POST",
        headers :{
          'Content-type' :"application/json"
        },
        body : JSON.stringify(formData)
      })
      .then(res=>res.json())
      .then(data=>console.log(data))
      };
    
 
  return (
    <div style={{border :"1px solid lightgrey"}}>
        <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" name="name" value={formData.name} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter description" name="description" value={formData.description} onChange={handleChange} />
      </Form.Group>

      <Form.Group controlId="formImage">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" accept=".jpg, .jpeg, .png, .gif, .pdf, .doc" name="image" value={formData.image} onChange={handleFileChange} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default ProductAdd