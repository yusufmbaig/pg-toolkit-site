import React, { useState } from "react";
import "./EnglishToolkitContent.css";
import BeforeSubmit from "./BeforeSubmit/BeforeSubmit";
import AfterSubmit from "./AfterSubmit/AfterSubmit";
function EnglishToolkitContent() {
  const [submit, setSubmit] = useState(false);
  //if api call status 200 then change state
  return (
    <>
      <div className="EnglishToolkitContentContainer">
        {!submit && <BeforeSubmit />}
        {submit && <AfterSubmit />}
      </div>
    </>
  );
}

export default EnglishToolkitContent;
