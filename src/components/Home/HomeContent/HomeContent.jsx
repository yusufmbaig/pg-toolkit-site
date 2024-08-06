import React from "react";
import "./HomeContent.css";
import chatImage from "../../../public/logo192.png";
import arrowImage from "../../../public/logo192.png";
import magnifierImage from "../../../public/logo192.png";
function HomeContent() {
  return (
    <div className="HomeContentContainer">
      <div className="HomeContentContainerTop">
        <h1>Sublexical Toolkit </h1>
        <div className="HomeContentContainerIcons">
          <img src={chatImage} alt="chatImage" />
          <img src={arrowImage} alt="arrow" />
          <img src={magnifierImage} alt="Magnifier" />
        </div>
        <h3 id="LanguageAnalysis">Language analysis,</h3>
        <h3 id="LanguageAnalysis">customized to your needs.</h3>
      </div>
      <div className="HomeContentContainerBottom">
        <h2>Available Toolkits</h2>
        <div className="HomeContentContainerBottomCard">
          <div className="EnglishToolkitConatiner">
            <div className="EnglishToolkitConatinerTop">
              <h4>English Toolkit</h4>
              <p id="IncludesBold">Includes:</p>
              <ul>
                <li>Frequency and Consistency Log</li>
                <li>Phonology and Orthography</li>
              </ul>
            </div>
            <div className="EnglishToolkitConatinerBottom">
              <button>Visit Page</button>
            </div>
          </div>
          <div className="SpanishEnglishToolkitContainer">
            <h4>Spanish-English Toolkit</h4>
            <p>Upcoming Toolkit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
