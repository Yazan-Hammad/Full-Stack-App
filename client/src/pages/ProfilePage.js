import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Swal from "sweetalert2";

import "../css/Profile.css";
import useBackend from "../hooks/use-backend";

import { GoGear } from "react-icons/go";

import ChangePasswordPage from "./ChangePasswordPage";
import PopupFormPage from "./PopupFormPage";

function Profile() {
  const [setting, setSetting] = useState(false);
  const [settingOption, setSettingOption] = useState("");

  const { token, user } = useBackend();

  if (!token) {
    return <h1 className="centered">Please Login</h1>;
  }

  const { name, role, email, brief } = user;

  const hasImage = false;

  const initials = name
    ?.split(" ")
    ?.map((name) => name[0])
    ?.join("");

  const handleClick = () => {
    setSettingOption("changePassword");
    setSetting((value) => false);
  };

  return (
    <>
      <div className="profile">
        <div className="container">
          <div className="basic-info">
            {hasImage ? (
              <img
                src="user-image.jpg"
                alt="User Image"
                className="user-image"
              />
            ) : (
              <div className="image-alternative">{initials}</div>
            )}
            <h2 className="user-name">{name}</h2>
            <h3 className="user-role">
              {role?.replace(role?.[0], role?.[0].toUpperCase())}
            </h3>
            <p className="user-email">{email}</p>
          </div>
          <GoGear
            className={setting ? `active` : ""}
            onClick={() => setSetting((value) => !value)}
          />
          <div className="user-brief">
            <h2>Brief</h2>
            {brief}
          </div>
          {setting && (
            <ul className="settings">
              <li onClick={handleClick}>Change Password</li>
            </ul>
          )}
        </div>
      </div>
      {settingOption === "changePassword" && (
        <ChangePasswordPage setSettingOption={setSettingOption} />
      )}
    </>
  );
}

export default Profile;
