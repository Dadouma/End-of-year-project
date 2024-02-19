import Login from "../../components/login/Login";
import "./LoginPage.css";
function LoginPage() {
  return (
    <div className=" container-fluid ">
      <div className="row maingrid">
        <div className="col-sm-4 firstgrid text-center">
          <h2 className="title">Welcome Back!</h2>
          <img src={"src/assets/pharmacie.png"} alt="Pharmacie" />
        </div>
        <div className="col-sm-8 ">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
