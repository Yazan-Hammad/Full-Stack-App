import Link from "../Link";
import Logo from "../../images/logo.png";

function SignupContent({ setName, setEmail, setPassword, setPasswordConfirm, submit }) {
  return (
    <>
      <div className="content">
        <img src={Logo} alt="Logo" className="logo" />
        <p>
          Connect with your classmates and the Universities around you on
          <span>StudentsLibrary</span>
        </p>
      </div>
      <div className="signup-section">
        <form action="" method="post">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            name="user-name"
            placeholder="Your_Name"
          ></input>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            placeholder="Email"
            autoComplete="off"
          ></input>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            placeholder="Password"
          ></input>
          <input
            type="password"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            name="confirm-password"
            placeholder="Confirm_Password"
          ></input>
          <input type="submit" onClick={submit}></input>
        </form>
        <Link to="/login">Login</Link>
      </div>
    </>
  );
}

export default SignupContent;
