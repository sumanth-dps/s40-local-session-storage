import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  let emailInputRef = useRef();
  let passwordInputRef = useRef();
  let navigate = useNavigate();
  useEffect(() => {
    emailInputRef.current.value = localStorage.getItem("email");
    passwordInputRef.current.value = localStorage.getItem("password");
    if (localStorage.getItem("email") && localStorage.getItem("password")) {
      onLoginClick();
    }
  }, []);
  let onLoginClick = () => {
    let typedEmail = emailInputRef.current.value;
    let typedPassword = passwordInputRef.current.value;
    if (typedEmail == "dhoni@gmail.com" && typedPassword == "dhoni") {
      localStorage.setItem("email", emailInputRef.current.value);
      localStorage.setItem("password", passwordInputRef.current.value);
      // sessionStorage.setItem("email", emailInputRef.current.value);
      // sessionStorage.setItem("password", passwordInputRef.current.value);

      navigate("/dashboard");
    } else {
      alert("Username or paswsword is incorrect");
    }
  };

  return (
    <div className="App">
      <form>
        <div>
          <h2
            style={{
              backgroundColor: "red",
              color: "yellow",
              fontSize: "2rem",
              borderRadius: "50px",
              boxShadow: "5px 5px 10px grey",
            }}
          >
            Login
          </h2>
        </div>
        <div>
          <label>email</label>
          <input ref={emailInputRef}></input>
        </div>
        <div>
          <label>password</label>
          <input ref={passwordInputRef}></input>
        </div>
        <div>
          <button
            type="button"
            onClick={() => {
              onLoginClick();
            }}
          >
            Login
          </button>
        </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Login;
