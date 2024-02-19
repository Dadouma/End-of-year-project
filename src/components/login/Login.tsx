import { useEffect, useState } from "react";
import "./Login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [pharmacyNumber, setPharmacyNumber] = useState("");
  const [code, setCode] = useState("");
  console.log(email);
  return (
    <div className="container text-center ">
      <div className="title">
        <h1>SIGN IN</h1>
      </div>
      <form>
        <div className="input-container">
          <input
            type="text"
            id="Email"
            placeholder="Email"
            name="Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <input
            type="text"
            id="PharmacyNumber"
            placeholder="Pharmacy Number"
            name="PharmacyNumber"
            required
          />
        </div>
        <div className="input-container">
          <input
            type="password"
            id="CofidentialCode"
            placeholder="Cofidential Code"
            name="CofidentialCode"
            required
          />
        </div>

        <div>
          <button type="submit" className="button">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
