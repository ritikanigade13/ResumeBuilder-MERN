import { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3001/login`,
        formData
      );
      console.log(response.data); // Assuming the server returns some data on successful login
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={formData.email}
          onChange={handleChange}
        />

        <br />
        <label htmlFor="pwd">Password: </label>
        <input
          type="password"
          id="pwd"
          name="password"
          placeholder="********"
          required
          value={formData.password}
          onChange={handleChange}
        />
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </form>
    </>
  );
}

export default Login;
