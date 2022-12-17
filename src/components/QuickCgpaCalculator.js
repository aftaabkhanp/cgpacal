import React, { useState } from "react";
import "./QuickCgpaCalculator.css";
function QuickCgpaCalculator() {

  const [totCredits, setTotCredits] = useState("");
  const [isValidtotCredits, setIsValidTot] = useState(true);
  const [isValidtotCreditstouched, setIsValidTottouched] = useState(false);
  const handleOnChangetotCredits = (event) => {
    var data = parseFloat(event.target.value);
    if (data <= 0) {
      setIsValidTot(false);
      return;
    }
    setTotCredits(data);
    setIsValidTot(true);
    setIsValidTottouched(true)
  };

  const [totCgpa, setTotCgpa] = useState("");
  const [isValidtotCgpa, setIsValidTotCgpa] = useState(true);
  const [isValidtotCgpatouched, setIsValidTotCgpatouched] = useState(false);

  const handleOnChangetotCgpa = (event) => {
    var data = parseFloat(event.target.value);
    if (data <= 0 || data > 10) {
      setIsValidTotCgpa(false);
      return;
    }
    setTotCgpa(data);
    setIsValidTotCgpa(true);
    setIsValidTotCgpatouched(true);
  };
  const [nowCredits, setnowCredits] = useState("");
  const [isValidnowCredits, setIsValidnowCredits] = useState(true);
  const [isValidnowCreditstouched, setIsValidnowCreditstouched] = useState(false);
  const handleOnChangeNowCredits = (event) => {
    var data = parseFloat(event.target.value);
    if (data <= 0) {
      setIsValidnowCredits(false);
      return;
    }
    setnowCredits(data);
    setIsValidnowCredits(true);
    setIsValidnowCreditstouched(true);
  };

  const [nowCgpa, setnowCgpa] = useState("");
  const [isValidnowCgpa, setIsValidnowCgpa] = useState(true);
  const [isValidnowCgpatouched, setIsValidnowCgpatouched] = useState(false);

  const handleOnChangenowCgpa = (event) => {
    var data = parseFloat(event.target.value);
    if (data <= 0 || data > 10) {
      setIsValidnowCgpa(false);
      return;
    }
    setnowCgpa(data);
    setIsValidnowCgpa(true);
    setIsValidnowCgpatouched(true);
  };

  var isFormValid= isValidtotCreditstouched && isValidnowCgpa && isValidtotCgpatouched && isValidnowCredits && isValidnowCreditstouched && isValidtotCgpa && isValidnowCgpatouched && isValidtotCredits;
  var ans=0;
  if(isFormValid)
  {
    var sumOfCredits=nowCredits+totCredits;

     ans=((totCredits/sumOfCredits)*totCgpa)+((nowCredits/sumOfCredits)*nowCgpa);
  }

  return (
    <div className="QuickCgpaCalculator container flex">
      <div className="form-area-quick flex">
        <p>Total credits completed upto previous semester</p>
        <input
          type="number"
          value={totCredits}
          onChange={handleOnChangetotCredits}
        ></input>
        {!isValidtotCredits && (
          <p className="error-text">
            Total credits should be greater than zero
          </p>
        )}
        <p>CGPA upto previous semester</p>
        <input
          type="number"
          value={totCgpa}
          onChange={handleOnChangetotCgpa}
        ></input>
        {!isValidtotCgpa && (
          <p className="error-text">
            Cgpa should be greater than zero and less than 10
          </p>
        )}
        <p>Credits completed this semester</p>
        <input
          type="number"
          value={nowCredits}
          onChange={handleOnChangeNowCredits}
        ></input>
        {!isValidnowCredits && (
          <p className="error-text">Credits should be greater than zero</p>
        )}
        <p>CGPA in this semester</p>
        <input
          type="number"
          value={nowCgpa}
          onChange={handleOnChangenowCgpa}
        ></input>
        {!isValidnowCgpa && (
          <p className="error-text">
            Cgpa should be greater than zero and less than 10
          </p>
        )}
      </div>
      <div className="result">

      {isFormValid && !isNaN(ans) && <p> Your CGPA is{ans.toPrecision(3)}</p>}
      </div>
    </div>
  );
}

export default QuickCgpaCalculator;
