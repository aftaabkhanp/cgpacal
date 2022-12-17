import React, { useState, useEffect } from "react";
import "./GpaCalculator.css";
import SubjectInput from "./SubjectInput";
const initial = [
  {
    id: -1,
    credits: -1,
    grade: -1,
  },
];
function GpaCalculator() {
  const [numberOfCourses, setNumberOfCourses] = useState("");
  const [isValidInput, setIsValid] = useState(true);
  const [courseGrades, setCourseGrades] = useState(initial);
  const [isCompletedCalculation, setIsCompletedCalculation] = useState(false);
  const [gpa, setGpa] = useState(0);

  useEffect(() => {
    setIsCompletedCalculation(false);
    var totCredits = 0;
    var sum = 0;
    var count=0;
    var flag = false;
    if (courseGrades.length !== parseInt(numberOfCourses)) {
      return;
    } else {
      try {

        for (var i = 0; i < courseGrades.length; i++) {
          var data = courseGrades[i];
          if (data === null) {
            return;
          }
          if (
            typeof data.credits === "number" &&
            typeof data.grade === "number"
          ) {
            sum = sum + data.credits * data.grade;
            totCredits = totCredits + data.credits;
            count=count+2;
          }
        }
      } catch (exception) {
        flag = true;
        return;
      }
      if (!flag && count===2*parseInt(numberOfCourses)) {
        setIsCompletedCalculation(true);
        setGpa(sum / totCredits);
      }
    }
  }, [courseGrades, numberOfCourses]);

  const courseList = Array.from({ length: numberOfCourses }, (_, index) => {
    return (
      <SubjectInput
        key={index}
        id={index + 1}
        setCourseGrades={setCourseGrades}
        courseGrades={courseGrades}
      />
    );
  });

  const onNumberOfCourseChangehandler = (event) => {
    setNumberOfCourses(event.target.value);
    if (event.target.value <= 0 || event.target.value > 9) {
      setIsValid(false);
      return;
    }
    setCourseGrades(initial);
    setIsValid(true);
  };

  return (
    <div className="container">
      <div className="GpaCalculator flex">
        <div className="form-area flex">
          <div className="subjectForm flex">
            <p>Enter Number of subjects taken in this semester</p>
            <input
              min={1}
              type="number"
              value={numberOfCourses}
              onChange={onNumberOfCourseChangehandler}
            ></input>
            {!isValidInput && (
              <p className="error-text">
                Number of courses Should be greater than zero
                <br></br> and less than nine
              </p>
            )}
          </div>
          {isCompletedCalculation && (
            <div className="result flex">
              <p>Your GPA is :{gpa.toFixed(2)}</p>
            </div>
          )}
        </div>

        <div className="GpaDetails flex">{isValidInput && courseList}</div>
      </div>
    </div>
  );
}

export default GpaCalculator;
