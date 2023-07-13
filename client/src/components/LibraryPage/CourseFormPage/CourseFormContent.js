import React from "react";
import InputTextField from "../../InputTextField";
import InputDropDownList from "../../InputDropDownList";
import useCourses from "../../../hooks/use-courses";

function CourseFormContent({
  formData,
  submit,
  setFormData
}) {
  const { handleFormOpening } = useCourses();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        name === "image" || name === "book" || name === "videos"
          ? value
          : // ? prevFormData[name]
            value,
    }));
  };
  const handlePaste = function (event) {
    event.preventDefault();
    const pastedText = event.clipboardData.getData("text/plain");
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: pastedText,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or further processing with the formData
    handleFormOpening(false); // Close the overlay after form submission
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputTextField
          label={"Course Name:"}
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <InputTextField
          label={"ID:"}
          value={formData.id}
          onChange={handleChange}
          name="id"
        />
        <InputDropDownList
          label={"Department:"}
          defaultValue={"Select a value"}
          values={["CS", "SW", "CIS", "BIT"]}
          value={formData.department}
          onChange={handleChange}
          name="department"
        />
        <InputTextField
          label={"Image: [paste the link]: "}
          value={formData.image}
          onChange={handleChange}
          name="image"
        />
        <InputTextField
          label={"Book: [paste the link]: "}
          value={formData.book}
          onChange={handleChange}
          name="book"
        />
        <InputTextField
          label={"Videos: [paste the link]: "}
          value={formData.videos}
          onChange={handleChange}
          name="videos"
        />
        <InputTextField
          label={"Notebook: [paste the link]: "}
          value={formData.notebook}
          onChange={handleChange}
          name="Notebook"
        />
        <input
          type="submit"
          onClick={(e) => {
            submit(e);
          }}
        ></input>
      </form>
    </>
  );
}

export default CourseFormContent;
