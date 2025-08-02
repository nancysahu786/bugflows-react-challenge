import { useState } from "react";

const LoginForm = () => {
  // This state stores data of form
  const [formData, setFormData] = useState({ password: "" });
  //This state is used to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);

  // This function will collect all the fields values and set it in formData
  const handleFieldChange = (field) => (event) => {
    const value = event.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  // This handle submit function will call alert when clicked on login button
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Logged in!");
    console.log("User Data:", formData);
  };

  return (
    <div className="login-container">
      <h2>Login to Bugflows</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            placeholder="Email"
            onChange={handleFieldChange("email")}
            required
          />
        </div>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleFieldChange("password")}
            required
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            style={{
              position: "absolute",
              right: "10px",
              top: "50%",
              transform: "translateY(-50%)",
              cursor: "pointer",
            }}
          >
            {formData.password.length > 0 ? (showPassword ? "👁️" : "🙈") : ""}
          </span>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
