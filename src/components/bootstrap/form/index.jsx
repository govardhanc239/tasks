import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form ,Button} from 'react-bootstrap';
import MyModal from '../model';

export default function MyForm() {
    const intialData={
        name : '',
        age  :'',
        gender : '',
        location :'',
        department :'',
        about : ''
    }
    const [formData,setFormData] = useState(intialData);
    const [showModal,setShowModal]= useState(false);

    const handleChange =(e)=>{
        const {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        setShowModal(true);
    }
    const handleReset=()=>{
        alert("do you want reset?")
        setFormData(intialData)
    }

  const handleCloseModal =()=>{
    setShowModal(false);
    setFormData(intialData)
  }
   
  return (
    <div>
      <Form  onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="age">
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter your age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group controlId="gender">
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Check
            inline
            type="radio"
            label="Male"
            name="gender"
            value="male"
            onChange={handleChange}
            checked={formData.gender === "male"}
          />
          <Form.Check
            inline
            type="radio"
            label="Female"
            name="gender"
            value="female"
            onChange={handleChange}
            checked={formData.gender === "female"}
          />
          <Form.Check
            inline
            type="radio"
            label="Other"
            name="gender"
            value="other"
            onChange={handleChange}
            checked={formData.gender === "other"}
          />
        </div>
      </Form.Group>
       
      <Form.Group controlId="location">
        <Form.Label>Location</Form.Label>
        <Form.Control
          as="select"
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="">Select a location</option>
          <option value="location1">Hyderabad</option>
          <option value="location2">Chennai</option>
          <option value="location3">Vizag</option>
          <option value="location4">Kolhapur</option>
          <option value="location5">Bangalore</option>
        </Form.Control>
      </Form.Group> 
     
      <Form.Group controlId="message">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter your message"
          name="message"
          value={formData.about}
          onChange={handleChange}
        />
      </Form.Group>

      <Button variant='primary' type='submit'>Submit</Button>
      <Button variant="secondary" onClick={handleReset} style={{ marginLeft: '10px' }}>Reset </Button>
    
      </Form>
      <MyModal show ={showModal} onHide={handleCloseModal} formData={formData}/>
    </div>
  )
}
