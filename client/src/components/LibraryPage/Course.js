import React, { useEffect, useState, useRef } from "react";
import "../../css/Course.css";
import { FaEllipsisH } from "react-icons/fa";
import PopupFormPage from "../../pages/PopupFormPage";
import CourseFormPage from "../../pages/CourseFormPage";
import useCourses from "../../hooks/use-courses";
import Swal from "sweetalert2";

function Course({ _id, image, name, id, department, book, videos }) {
  //  Hooks
  const [opened, setOpened] = useState(false);
  const [openOption, setOpenOption] = useState(false);

  const [highlight, setHighlight] = useState(true);

  const divEl = useRef();

  const { deleteCourseByName, handleFormOpening, setExistedCourse } =
    useCourses();

  useEffect(() => {
    //  Hilighting
    const timeout = setTimeout(() => {
      setHighlight(null);
    }, 2000);

    //  Close Option List
    const openOptionHandler = (event) => {
      if (!divEl.current?.contains(event.target)) {
        setOpenOption((value) => false);
      } else {
        setOpenOption((value) => !value);
      }
    };

    document.addEventListener("click", openOptionHandler, true);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("click", openOptionHandler);
    };
  }, []);

  const handleClick = (event) => {
    const tag = event.target.tagName.toLowerCase();
    const exclude = ["a", "svg", "path", "li", "ul"];

    if (!exclude.includes(tag)) {
      setOpened((opened) => !opened);
    }
  };

  // const handleEditing = async () => {
  //   const { value: formValues } = await Swal.fire({
  //     title: "Multiple inputs",
  //     html: `<select id="key">
  //             <option value="name">Name</option>
  //             <option value="id">ID</option>
  //             <option value="department">Department</option>
  //             <option value="image-link">Image Link</option>
  //             <option value="book-link">Book Link</option>
  //             <option value="videos-link">Videos Link</option>
  //           </select>
  //           <input id="value" class="swal2-input">`,
  //     focusConfirm: true,
  //     preConfirm: () => {
  //       return [
  //         document.getElementById("key").value,
  //         document.getElementById("value").value,
  //       ];
  //     },
  //   });

  //   if (formValues) {
  //     Swal.fire(JSON.stringify(formValues));
  //   }
  // };

  const handleEditing = () => {
    setExistedCourse({ image, name, id, department, book, videos });
    handleFormOpening(true);
  };

  return (
    <div
      className={`course ${opened ? "active" : ""} ${
        highlight ? "hilight" : ""
      }`}
      onClick={handleClick}
    >
      <div className="course-inner">
        <div className="course-front">
          <div className={`option ${openOption ? "opened" : ""}`}>
            <div className="custom" ref={divEl}>
              <FaEllipsisH
                onClick={() => {
                  // setOpenOption((value) => !value);
                }}
              />
            </div>
            <ul>
              <li onClick={handleEditing}>Edit Course</li>
              <li onClick={() => deleteCourseByName(name)}>Delete Course</li>
            </ul>
          </div>
          <div className="image">
            <img src={image} alt={name} />
          </div>
          <h2>{name}</h2>
          <p className="department">
            <span className="centered">{department}</span>
          </p>
          <p>🆔 {id}</p>
        </div>
        <div className="course-back">
          <h2>{name}</h2>
          <div className="content">
            {book && (
              <a href={book} target="_blank" rel="noreferrer">
                📖 Book
              </a>
            )}
            {videos && (
              <a href={videos} target="_blank" rel="noreferrer">
                🎥 Videos
              </a>
            )}
            {Boolean(book) || Boolean(videos) || <p>There are no resources</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
