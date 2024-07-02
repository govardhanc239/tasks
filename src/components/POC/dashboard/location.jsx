import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function LocationForm() {
  const [formData, setFormData] = useState({
    locationId: '',
    locationName: '',
    addressName: '',
    email: '',
    contact: ''
  });

  const [locations, setLocations] = useState([]);
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocations([...locations, formData]);
    setFormData({
      locationId: '',
      locationName: '',
      addressName: '',
      email: '',
      contact: ''
    });
    setFormVisible(false);
  };

  return (
    <div className="card mt- p-5">
        <h2>Location Details</h2>
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary" onClick={() => setFormVisible(true)}>Add Location</button>
      </div>
      <form onSubmit={handleSubmit} style={{ display: formVisible ? 'block' : 'none' }}>
        <div className="mb-3">
          <label htmlFor="locationId" className="form-label">Location ID:</label>
          <input type="text" className="form-control" id="locationId" name="locationId" value={formData.locationId} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="locationName" className="form-label">Location Name:</label>
          <input type="text" className="form-control" id="locationName" name="locationName" value={formData.locationName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="addressName" className="form-label">Address Name:</label>
          <input type="text" className="form-control" id="addressName" name="addressName" value={formData.addressName} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">Contact:</label>
          <input type="text" className="form-control" id="contact" name="contact" value={formData.contact} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <table className="table mt-3" style={{ display: locations.length > 0 ? 'table' : 'none' }}>
        <thead>
          <tr>
            <th>Location ID</th>
            <th>Location Name</th>
            <th>Address</th>
            <th>Email</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={index}>
              <td>{location.locationId}</td>
              <td>{location.locationName}</td>
              <td>{location.addressName}</td>
              <td>{location.email}</td>
              <td>{location.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LocationForm;
