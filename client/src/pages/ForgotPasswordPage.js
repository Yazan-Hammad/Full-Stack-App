import React, { useState } from "react";
import "../css/ResetPasswordPage.css";
import useBackend from "../hooks/use-backend";
import useNavigation from "../hooks/use-navigation";

function ResetPasswordPage() {
  const { makeRequest } = useBackend();
  const { navigate } = useNavigation();

  const [email, setEmail] = useState("");

  const submitEmail = (e) => {
    e.preventDefault();

    makeRequest(
      "post",
      "http://127.0.0.1:5000/api/v1/users/forgotPassword",
      "We'll send you a code to your email",
      { email },
      {},
      () => {
        navigate("/resetpassword");
      }
    );
  };

  return (
    <div className="reset-box">
      <h1>Find Your Account</h1>
      <form action="" method="post">
        <p>Please enter your email to search for your account.</p>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="xxxxxxx@std.hu.edu.jo"
        />
        <div className="buttons">
          <button
            id="cancel"
            onClick={() => {
              navigate("/login");
            }}
          >
            Cancel
          </button>
          <input type="submit" onClick={submitEmail}></input>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
