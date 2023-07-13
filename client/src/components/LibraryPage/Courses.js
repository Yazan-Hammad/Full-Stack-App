import React, { useState, useEffect } from "react";
import Course from "./Course.js";
import useCourses from "../../hooks/use-courses";
import PopupFormPage from "../../pages/PopupFormPage.js";
import CourseFormPage from "../../pages/CourseFormPage.js";

function Courses() {
  const { isOpen, courses, sortFunction, sortBy } = useCourses();
  courses.sort((a, b) => sortFunction(a, b, sortBy));

  const elements = courses.map(
    ({ _id, name, id, department, image, book, videos }) => {
      return (
        <Course
          key={id}
          id={id}
          _id={_id}
          name={name}
          department={department}
          image={image}
          book={book}
          videos={videos}
        />
      );
    }
  );

  return (
    <div className="container">
      {elements}
      {isOpen && (
        <PopupFormPage>
          <CourseFormPage />
        </PopupFormPage>
      )}
    </div>
  );
}

export default Courses;
