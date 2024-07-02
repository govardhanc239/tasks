import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../react-config/actions";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    employeeId: "",
    email: "",
    mobileNumber: "",
    designation: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validatePassword = () => {
    const upperCaseRegex = /[A-Z]/;
    const numberRegex = /[0-9]/;
    const symbolRegex = /[^a-zA-Z0-9]/;

    return (
      upperCaseRegex.test(formData.password) &&
      numberRegex.test(formData.password) &&
      symbolRegex.test(formData.password)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
    } else if (!validatePassword()) {
      alert(
        "Password must contain at least one uppercase letter, one number, and one symbol."
      );
    } else {
      try {
        // Dispatch the registerUser action
        dispatch(registerUser(formData));

        // Show success toast and navigate to home
        toast.success("Registration successful! 🎉");
        setTimeout(() => navigate("/"), 2000); // Navigate after 2 seconds
      } catch (error) {
        // Show error toast in case of failure
        toast.error("Registration failed. Please try again. ❌");
      }
    }
  };

  return (
    <div>
      <ToastContainer />
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="employeeId">
          <Form.Label>Employee ID</Form.Label>
          <Form.Control
            type="text"
            name="employeeId"
            placeholder="Enter employee ID"
            value={formData.employeeId}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="mobileNumber">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control
            type="tel"
            name="mobileNumber"
            placeholder="Enter mobile number"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="designation">
          <Form.Label>Designation</Form.Label>
          <Form.Control
            as="select"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          >
            <option value="">Select Designation</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
            <option value="option4">Option 4</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default RegistrationForm;
