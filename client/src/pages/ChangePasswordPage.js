import React, { useState } from "react";
import "../css/ResetPasswordPage.css";
import useBackend from "../hooks/use-backend";
import useNavigation from "../hooks/use-navigation";
import InputTextField from "../components/InputTextField";

function ChangePasswordPage({setSettingOption}) {
  const { token, makeRequest } = useBackend();
  const { navigate } = useNavigation();

  const [passwordCurrent, setpasswordCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // console.log(code);
  // console.log(password);
  // console.log(passwordConfirm);

  const submitCode = (e) => {
    e.preventDefault();

    makeRequest(
      "patch",
      `http://127.0.0.1:5000/api/v1/users/updateMyPassword`,
      "The Password Changed Successfully",
      { passwordCurrent, password, passwordConfirm },
      {
        Authorization: `Bearer ${token}`,
      },
      () => {
        navigate("/login");
      }
    );
  };

  return (
    <div className="form-div centered">
      <form action="" method="post">
        <InputTextField
          label={"Enter the current password:"}
          value={passwordCurrent}
          onChange={(e) => setpasswordCurrent(e.target.value)}
          name="current-password"
        />

        <InputTextField
          label={"Enter the new Password:"}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="password"
          name="new-password"
        />

        <InputTextField
          label={"Re-Enter the new Password:"}
          type="password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
          placeholder="confirm password"
          name="confirm-new-password"
        />
        <div className="buttons">
          <input type="submit" onClick={submitCode}/>
          <button className="cancel" onClick={() => setSettingOption("")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default ChangePasswordPage;
