import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "../css/Form.css";
import FormContent from "../components/LibraryPage/CourseFormPage/CourseFormContent";
import useBackend from "../hooks/use-backend";
import useCourses from "../hooks/use-courses";

function CourseFormPage() {
  const { createCourse, editCourse, existedCourse } = useCourses();

  const [formData, setFormData] = useState(
    existedCourse
      ? existedCourse
      : {
          name: "",
          id: "",
          department: "",
          image: "",
          book: "",
          videos: "",
          notebook: "",
        }
  );

  const submit = async function (e) {
    e.preventDefault();

    if (existedCourse) editCourse(formData);
    else createCourse(formData);
  };

  return (
    <FormContent
      formData={formData}
      submit={submit}
      setFormData={setFormData}
    />
  );
}

export default CourseFormPage;
