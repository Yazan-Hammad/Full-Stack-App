import React, { useState } from "react";
import "../css/Login.css";
import useNavigation from "../hooks/use-navigation";
import useBackend from "../hooks/use-backend";
import LoginContent from "../components/LoginPage/LoginContent";

function Login() {
  const { makeRequest } = useBackend();
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    makeRequest(  
      "post",
      "http://127.0.0.1:5000/api/v1/users/login",
      "Successfully Logedin",
      {
        email: email,
        password: password,
      },
      {},
      () => {navigate("/");}
    );
  }

  return (
    <>
      <div className="login-landing">
        <div className="container">
          <LoginContent
            setEmail={setEmail}
            setPassword={setPassword}
            submit={submit}
          />
        </div>
      </div>
    </>
  );
}

export default Login;
