import React from 'react'
import { Modal,Button } from 'react-bootstrap'

export default function MyModal({show,onHide,formData}) {
  return (
    <div>
      <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Form Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>Name: {formData.name}</p>
        <p>Age: {formData.age}</p>
        <p>Contact: {formData.contact}</p>
        <p>Location: {formData.location}</p>
        <p>Gender: {formData.gender}</p>
        <p>Message: {formData.message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}
