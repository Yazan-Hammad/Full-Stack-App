import React, { useState } from "react";
import { GoPlus } from "react-icons/go";
import "../../css/Options.css";
import useBackend from "../../hooks/use-backend";
import CourseFormPage from "../../pages/CourseFormPage";
import PopupPage from "../../pages/PopupFormPage";
import useCourses from "../../hooks/use-courses";


function Options() {
  const { handleFormOpening, sortBy, setSortBy, setExistedCourse } = useCourses();

  const handleFormRequest = () => {
    setExistedCourse(undefined);
    handleFormOpening(true)
  };

  return (
    <>
      <div className="options container">
        <button onClick={handleFormRequest}>
          <GoPlus /> Add Course
        </button>
        <p>
          Sort Courses By:
          <button
            className={sortBy === "name" ? "active" : ""}
            onClick={() => setSortBy("name")}
          >
            Name
          </button>
          <button
            className={sortBy !== "name" ? "active" : ""}
            onClick={() => setSortBy("department")}
          >
            Department
          </button>
        </p>
      </div>
    </>
  );
}

export default Options;
