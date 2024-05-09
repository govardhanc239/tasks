import React from "react";
import {useNavigate} from 'react-router-dom'

const Dashboard = ({ loggedUser }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button style={{alignItems:"right"}} type="button" onClick={()=>navigate('/login')} >logout</button>
      <h2 style={{ textAlign: "center" }}>Dashboard</h2>
      {(loggedUser.role ==="user") &&
      (
          <>
            <h3>Hello,{loggedUser.name}!!</h3>
            <h4>Role :{loggedUser.role}</h4>
            <p>In the world of technology and design, the term "user" holds profound significance. 
                Whether it's an app, website, software, or any digital product, 
                users are at the core of its existence and success. </p>
          </>
        )}
        {(loggedUser.role==='manager' ) &&
          (<>
          <h3>Hello,{loggedUser.name}!!</h3>
          <h4>{loggedUser.role}</h4>
          <p>Managers serve as the linchpin of organizational success,
             tasked with the responsibility of guiding teams, driving performance, 
            and fostering a culture of collaboration and innovation.</p>
          </>)}
    </div>
  );
};
export default Dashboard;
