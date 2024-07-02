import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function EventForm() {
  const [eventFormData, setEventFormData] = useState({
    eventId: '',
    eventName: '',
    imageUrl : '',
    description: '',
    isActive: false
  });

  const [events, setEvents] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setEventFormData({ ...eventFormData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, eventFormData]);
    setEventFormData({
      eventId: '',
      eventName: '',
      description: '',
      isActive: false
    });
    setFormVisible(false);
  };

  return (
    <div className="card mt-3 p-5">
      <h2>Event Details</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={() => setFormVisible(!formVisible)}>Add Event</button>
      </div>
      <form onSubmit={handleSubmit} style={{ display: formVisible ? 'block' : 'none' }}>
        <div className="mb-3">
          <label htmlFor="eventId" className="form-label">Event ID:</label>
          <input type="text" className="form-control" id="eventId" name="eventId" value={eventFormData.eventId} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="eventName" className="form-label">Event Name:</label>
          <input type="text" className="form-control" id="eventName" name="eventName" value={eventFormData.eventName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="imageUrl" className="form-label">Image URL:</label>
          <input type="text" className="form-control" id="imageUrl" name="imageUrl" value={eventFormData.imageUrl} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description:</label>
          <input type="text" className="form-control" id="description" name="description" value={eventFormData.description} onChange={handleChange} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="isActive" name="isActive" checked={eventFormData.isActive} onChange={handleChange} />
          <label className="form-check-label" htmlFor="isActive">Is Active</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* Event table */}
      <table className="table mt-3" style={{ display: events.length > 0 ? 'table' : 'none' }}>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Event Name</th>
            <th>Description</th>
            <th>Is Active</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event, index) => (
            <tr key={index}>
              <td>{event.eventId}</td>
              <td>{event.eventName}</td>
              <td>{event.description}</td>
              <td>{event.isActive ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventForm;
