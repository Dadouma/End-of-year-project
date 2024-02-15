import "./Login.css";
const Login = () => {
  return (
    <div>
      <div className="title">
        <h2>SIGN IN</h2>
      </div>
      <form>
        <div className="input-container">
          <input
            type="text"
            id="Email"
            placeholder="Email"
            name="Email"
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
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
