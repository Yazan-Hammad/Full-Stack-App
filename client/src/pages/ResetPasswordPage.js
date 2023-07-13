import React, { useState } from "react";
import "../css/ResetPasswordPage.css";
import useBackend from "../hooks/use-backend";
import useNavigation from "../hooks/use-navigation";

function ResetPasswordPage() {
  const { makeRequest } = useBackend();
  const { navigate } = useNavigation();

  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  console.log(code);
  console.log(password);
  console.log(passwordConfirm);

  const submitCode = (e) => {
    e.preventDefault();

    makeRequest(
      "patch",
      `http://127.0.0.1:5000/api/v1/users/resetPassword/${code}`,
      "The Password Changed Successfully",
      { password, passwordConfirm},
      {},
      () => {
        navigate("/login");
      }
    );
  };

  return (
    <div className="reset-box">
      <h1>Find Your Account</h1>

      <form action="" method="post">
        <p>Enter the code Here:</p>
        <input
          id="key"
          value={code}
          autoComplete="none"
          type="text"
          onChange={(e) => setCode(e.target.value)}
          placeholder="Key: asdfewgrvthkjkkl65123sdfgsd"
        />
        <p>Enter the Password:</p>
        <input
          value={password}
          autoComplete="none"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          name=""
          placeholder="Password"
        ></input>
        <input
          value={passwordConfirm}
          autoComplete="none"
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          name="confirm-password"
          placeholder="Confirm_Password"
        ></input>
        <div className="buttons">
          <button
            id="cancel"
            onClick={() => {
              navigate("/login");
            }}
          >
            Cancel
          </button>
          <input type="submit" onClick={submitCode}></input>
        </div>
      </form>
    </div>
  );
}

export default ResetPasswordPage;
