import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "../css/PopupFormPage.css";
import useCourses from "../hooks/use-courses";

function PopupFormPage({ children }) {
  
  const { handleFormOpening, existedCourse } = useCourses();
  
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div
        className="overlay"
        onClick={() => {
          handleFormOpening(false);
        }}
      ></div>
      <div className="form-container">
        <h1>{existedCourse? "Edit The Course":"Add a New Course"}</h1>
        {children}
      </div>
    </>,
    document.querySelector(".modal-container")
  );
}

export default PopupFormPage;
