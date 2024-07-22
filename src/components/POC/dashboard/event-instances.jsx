import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux';

function EventInstanceForm() {

  const dispatch = useDispatch();
  const events = useSelector(state=>state.event.events);
  const locations = useSelector(state=>state.location.locations)
  const [eventInstanceFormData, setEventInstanceFormData] = useState({
    eventId: '',
    locationId: '',
    startTime: '',
    endTime: '',
    isActive: false
  });

  const [eventInstances, setEventInstances] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const val = type === 'checkbox'? checked : value;
    setEventInstanceFormData({ ...eventInstanceFormData, [name]: val });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEventInstances([...eventInstances, eventInstanceFormData]);
    setEventInstanceFormData({
      eventId: '',
      locationId: '',
      startTime: '',
      endTime: '',
      isActive: false
    });
    setFormVisible(false);
  };

  return (
    <div className="card mt-3 p-5">
      <h2>Event Instance-Details</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={() => setFormVisible(!formVisible)}>Add Event Instance</button>
      </div>
      <form onSubmit={handleSubmit} style={{ display: formVisible ? 'block' : 'none' }}>
        <div className="mb-3">
          <label htmlFor="eventId" className="form-label">EventID:</label>
          <input type="text" className="form-control" id="eventId" name="eventId" value={eventInstanceFormData.eventId} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="locationId" className="form-label">Location ID:</label>
          <input type="text" className="form-control" id="locationId" name="locationId" value={eventInstanceFormData.locationId} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="startTime" className="form-label">Start Time</label>
          <input type="text" className="form-control" id="startTime" name="startTime" value={eventInstanceFormData.startTime} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="endTime" className="form-label">End Time</label>
          <input type="text" className="form-control" id="endTime" name="endTime" value={eventInstanceFormData.endTime} onChange={handleChange} />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="isActive" name="isActive" checked={eventInstanceFormData.isActive} onChange={handleChange} />
          <label className="form-check-label" htmlFor="isActive">Is Active</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      {/* Event Instance table */}
      <table className="table mt-3" style={{ display: eventInstances.length > 0 ? 'table' : 'none' }}>
        <thead>
          <tr>
            <th>Event ID</th>
            <th>Location ID</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Is Active</th>
          </tr>
        </thead>
        <tbody>
          {eventInstances.map((eventInstance, index) => (
            <tr key={index}>
              <td>{eventInstance.eventId}</td>
              <td>{eventInstance.locationId}</td>
              <td>{eventInstance.startTime}</td>
              <td>{eventInstance.endTime}</td>
              <td>{eventInstance.isActive ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EventInstanceForm;
