import React, { useState } from "react";

const EmailSignup = () => {
  const [inputData, setInputDate] = useState("");
  return (
    <form action="">
      {console.log(inputData)}
      <input
        type="text"
        placeholder="Email"
        className="newsletter-input"
        value={inputData}
        onChange={(e) => setInputDate(e.target.value)}
      />
      <button className="btn btn-orange">Sign Up</button>
    </form>
  );
};

export default EmailSignup;
