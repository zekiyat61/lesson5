import { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import UserDashboard from "./UserDashboard";
import Form from "./Form";


function App() {
  const [role, setrole] = useState("");

  const handleLogin = (nameInput, passwordInput) => {
    if (nameInput == "admin" && passwordInput == "admin") {
      setrole("admin");
    } else if (nameInput == "user" && passwordInput == "user") {
      setrole("user");
    } else alert("invalid input,try again");
  };
  return (
    <>
      <div>
        {role === "admin" && <AdminDashboard />}
        {role === "user" && <UserDashboard />}
        {role === "" && <Form onLogin={handleLogin} />}
      </div>
    </>
  );
}

export default App;
