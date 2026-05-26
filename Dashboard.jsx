import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Dashboard() {
  const { user, setUser } = useContext(UserContext);  
  const navigate = useNavigate();                      

  const handleLogout = () => {
    setUser("");           
    navigate("/");        
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, <strong>{user}</strong>! </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;