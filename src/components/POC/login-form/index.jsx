import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../react-config/actions';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const loggedInUser = useSelector(state => state.user.loggedInUser);
  const status = useSelector(state => state.user.status);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
    console.log("current user", loggedInUser,status);

    if (loggedInUser || status) {
      toast.success('Login successful! 🎉');
      setTimeout(()=>navigate('/dashboard'),1000);
    } else {
      toast.error('Login failed. Incorrect credentials or user does not exist. ❌');
    }


    // setTimeout(() => {
    //   if (loggedInUser) {
    //     toast.success('Login successful! 🎉');
    //     navigate('/dashboard');
    //   } else {
    //     toast.error('Login failed. Incorrect credentials or user does not exist. ❌');
    //   }
    //   console.log("current user", loggedInUser);
    // }, 500); // Delay to ensure state is updated
  };
  // useEffect(()=>{
  //   if(loggedInUser !== null){
  //     toast.success("Login successful! 🎉")
  //    setTimeout(()=>navigate('/dashboard'),1000) 
  //   }
  //   else if(loggedInUser === null && formData.email!=='' && formData.password!==''){
  //     toast.error("Login failed. Incorrect credentials or user does not exist. ❌")
  //   }
  // },[loggedInUser,status,navigate])

  return (
    <div className="container mt-5">
      <ToastContainer />
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
          <p style={{ color: "blue" }}>Are you not registered?</p>
          <button type='button' className="btn btn-link" onClick={() => navigate('/register')}>Click here</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
