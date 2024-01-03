import { useState } from "react";
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `http://localhost:3001/register`,
        formData
      );
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
      <h1>Regiister</h1>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          value={formData.name}
          onChange={handleChange}
        />
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
          Register
        </button>
      </form>
    </>
  );
}

export default Login;
