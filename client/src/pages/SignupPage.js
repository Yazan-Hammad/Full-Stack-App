import React, { useState } from "react";
import axios from "axios";
import "../css/Login.css";
import useNavigation from "../hooks/use-navigation";
import useBackend from "../hooks/use-backend";
import SignupContent from "../components/SignupPage/SignupContent";

function Signup() {
  const { makeRequest } = useBackend();
  const { navigate } = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  async function submit(e) {
    e.preventDefault();

    makeRequest(
      "post",
      "http://127.0.0.1:5000/api/v1/users/signup",
      "Created Successfully",
      {
        name: name,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
      },
      {},
      () => navigate("/")
    );
  }

  return (
    <div className="signup-landing">
      <div className="container">
        <SignupContent
          setName={setName}
          setEmail={setEmail}
          setPassword={setPassword}
          setPasswordConfirm={setPasswordConfirm}
          submit={submit}
        />
      </div>
    </div>
  );
}

export default Signup;
