import React, { useState } from "react";
import "./InputData.css";

export const InputData = () => {
  
  
  let handleSubmit = (e) => {
    e.preventDefault();
    let Data = Object.fromEntries(new FormData(e.target));
    alert("Form submitted successfully");
    console.log(Data);
    
  };
  

  return (
    <div className="form-container">
      <h2>Input Data Form</h2>
      <form className="input-form" onSubmit={handleSubmit}>
        {Array.from({ length: 33 }, (_, i) => (
          <div className="form-group" key={`X${i + 1}`}>
            <label htmlFor={`X${i + 1}`}>{`X${i + 1} :`}</label>
            <input type="number" id={`X${i + 1}`} name={`X${i + 1}`} />
          </div>
        ))}
        <div className="form-group">
          <label htmlFor="A1">A1 :</label>
          <input type="number" id="A1" name="A1" />
        </div>
        <div className="form-group">
          <label htmlFor="A2">A2 :</label>
          <input type="number" id="A2" name="A2" />
        </div>
        <div className="form-group">
          <label htmlFor="NoOfSHG">No of SHG :</label>
          <input type="number" id="NoOfSHG" name="NoOfSHG" />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
