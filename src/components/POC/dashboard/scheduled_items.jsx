import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ScheduledItemsForm() {
  const [scheduledItemFormData, setScheduledItemFormData] = useState({
    eventInstanceId: '',
    name: '',
    notes: '',
    startTime: '',
    endTime: '',
    isActive: false
  });

  const [scheduledItems, setScheduledItems] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setScheduledItemFormData({ ...scheduledItemFormData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setScheduledItems([...scheduledItems, scheduledItemFormData]);
    setScheduledItemFormData({
      eventInstanceId: '',
      name: '',
      notes: '',
      startTime: '',
      endTime: '',
      isActive: false
    });
    setFormVisible(false);
  };

  return (
    <div className="card mt-3 p-5">
      <h2>Scheduled Item Details</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={() => setFormVisible(!formVisible)}>Add Scheduled Item</button>
      </div>
      <form onSubmit={handleSubmit} style={{ display: formVisible ? 'block' : 'none' }}>
        <div className="mb-3">
          <label htmlFor="eventInstanceId" className="form-label">Event Instance ID:</label>
          <input type="text" className="form-control" id="eventInstanceId" name="eventInstanceId" value={scheduledItemFormData.eventInstanceId} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input type="text" className="form-control" id="name" name="name" value={scheduledItemFormData.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">Notes:</label>
          <input type="text" className="form-control" id="notes" name="notes" value={scheduledItemFormData.notes} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="startTime" className="form-label">Start Time:</label>
          <input type="text" className="form-control" id="startTime" name="startTime" value={scheduledItemFormData.startTime} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="endTime" className="form-label">End Time:</label>
          <input type="text" className="form-control" id="endTime" name="endTime" value={scheduledItemFormData.endTime} onChange={handleChange} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="isActive" name="isActive" checked={scheduledItemFormData.isActive} onChange={handleChange} />
          <label className="form-check-label" htmlFor="isActive">Is Active</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <table className="table mt-3" style={{ display: scheduledItems.length > 0 ? 'table' : 'none' }}>
        <thead>
          <tr>
            <th>Event Instance ID</th>
            <th>Name</th>
            <th>Notes</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Is Active</th>
          </tr>
        </thead>
        <tbody>
          {scheduledItems.map((scheduledItem, index) => (
            <tr key={index}>
              <td>{scheduledItem.eventInstanceId}</td>
              <td>{scheduledItem.name}</td>
              <td>{scheduledItem.notes}</td>
              <td>{scheduledItem.startTime}</td>
              <td>{scheduledItem.endTime}</td>
              <td>{scheduledItem.isActive ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ScheduledItemsForm;
