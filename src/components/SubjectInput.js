import React, { useState } from "react";
import "./SubjectInput.css";

const converToGrade = (char) => {
  switch (char) {
    case "S":
      return 10;

    case "A":
      return 9;
    case "B":
      return 8;
    case "C":
      return 7;
    case "D":
      return 6;
    case "E":
      return 5;

    default:
      return 0;
  }
};

function SubjectInput(props) {
  const [creditsClicked, setCreditsClicked] = useState(false);
  const [gradeClicked, setGradeClicked] = useState(false);
  const [credits, setCredits] = useState();
  const [grade, setGrade] = useState();

  const onCreditChangeHandler = (event) => {
    setCredits(event.target.value);
    const modified = [...props.courseGrades];
    modified[props.id - 1] = {
      id: props.id - 1,
      credits: parseFloat(event.target.value),
      grade: grade,
    };
    props.setCourseGrades(modified);
  };
  const onGradeChangeHandler = (event) => {
    const graded = converToGrade(event.target.value);

    setGrade(graded);
    const modified = [...props.courseGrades];
    modified[props.id - 1] = {
      id: props.id - 1,
      credits: parseFloat(credits),
      grade: graded,
    };
    props.setCourseGrades(modified);
  };
  const handleCreditsFocus = () => {
    setCreditsClicked(true);
  };
  const handleGradeFocus = () => {
    setGradeClicked(true);
  };
  return (
    <div className="SubjectInput">
      <span className="tag"> Course {props.id}: </span>
      <select onFocus={handleCreditsFocus} onChange={onCreditChangeHandler}>
        <option disabled={creditsClicked}>Credits</option>
        <option>1</option>
        <option>1.5</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <select onFocus={handleGradeFocus} onChange={onGradeChangeHandler}>
        <option disabled={gradeClicked}>Grade</option>
        <option>S</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
        <option>E</option>
        <option>F</option>
      </select>
    </div>
  );
}

export default SubjectInput;
