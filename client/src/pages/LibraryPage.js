import React, { useState, useEffect } from "react";
import "../css/LibraryPage.css";
import Courses from "../components/LibraryPage/Courses.js";
import Options from "../components/LibraryPage/Options.js";
import useCourses from "../hooks/use-courses";
import PopupFormPage from "./PopupFormPage";
import CourseFormPage from "./CourseFormPage";
import Swal from "sweetalert2";
import axios from "axios";

function LibraryPage() {
  //  Hooks
  const { isOpen } = useCourses();

  return (
    <>
      <section className="library">
        <Options/>
        <Courses/>
      </section>
    </>
  );
}

export default LibraryPage;
