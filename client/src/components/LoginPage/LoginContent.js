import Link from "../Link";
import Logo from "../../images/logo.png";
import { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import InputTextField from "../InputTextField";


function LoginContent({ setEmail, setPassword, submit }) {
  const [hiddenPassword, setHiddenPassword] = useState(true);

  return (
    <>
      <div className="content">
        <img src={Logo} alt="Logo" className="logo" />
        <p>
          Connect with your classmates and the Universities around you on
          <span>StudentsLibrary</span>
        </p>
      </div>
      <div className="login-section">
        <form action="" method="post">
          <InputTextField
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
          ></InputTextField>
          <div className="password-field">
            <InputTextField
              type={hiddenPassword ? "password" : "text"}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Password"
            ></InputTextField>
            <div className="eye" onClick={() => setHiddenPassword((value) => !value)}>
              {hiddenPassword ? <GoEyeClosed /> : <GoEye />}
            </div>
          </div>
          <input type="submit" onClick={submit}></input>
        </form>
        <Link to="/signup">Signup</Link>
        <Link to="/forgotpassword">forget your password?</Link>
      </div>
    </>
  );
}

export default LoginContent;
