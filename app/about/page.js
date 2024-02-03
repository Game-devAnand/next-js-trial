"use client";

import { useState } from "react";

export default function About() {
  const convertText = () => {
    let newtxt = text.toUpperCase();
    settext(newtxt);
  };

  const onClickFun = (event) => {
    settext(event.value);
  };

  const [datas, settext] = useState(" ");

  return (
    <div className="flex justify-center items-center">
      <h1 className="flex justify-start">About</h1>
      <div>
        <h1>Enter text here</h1>
        <textarea
          name="data"
          id="text"
          cols="30"
          rows="10"
          value={datas}
          onChange={onClickFun}
        ></textarea>
        <button type="button" onClick={convertText}>
          Convert to upper
        </button>
      </div>
    </div>
  );
}
