import React from "react";
import "./BeforeSubmit.css";

function BeforeSubmit() {
  return (
    <>
      <div className="HowTo">
        <h2>How to use this toolkit:</h2>
        <p>This section will show how to use the English Toolkit.</p>
      </div>
      <div className="BeforeSubmitContainer">
        <div className="LeftContent">
          <form>
            <div className="LeftContentSegments">
              <label>
                <div className="starText">
                  <p id="star">*</p>
                  <p>Input</p>
                </div>
                <textarea id="InputBox" type="text" name="InputBox" />
              </label>
              <button id="InputSubmit">Submit</button>
            </div>

            <div className="LeftContentSegments">
              <label for="MultiPronun">
                <div className="starTextSmall">
                  <p id="star">*</p>
                  <p> Multiple Pronunciations?</p>
                </div>
              </label>
              <input type="radio" value="Yes" name="MultiPronunYesNo" />
              Yes
              <br />
              <input type="radio" value="No" name="MultiPronunYesNo" />
              No
            </div>

            <div className="LeftContentSegments">
              <label for="SortOnsetRime">
                <div className="starTextSmall">
                  <p id="star">*</p>
                  <p> Sort By Onset and Rime?</p>
                </div>
              </label>
              <input type="radio" value="Yes" name="SortOnsetRimeYesNo" />
              Yes
              <br />
              <input type="radio" value="No" name="SortOnsetRimeYesNo" />
              No
            </div>
          </form>
        </div>

        <div className="RightContent">
          <div className="RightContentTop">
            <div className="RightContentSegments">
              <h3>
                <label for="LogTypes">
                  <div className="starText">
                    <p id="star">*</p>
                    <p>Choose between:</p>
                  </div>
                </label>
              </h3>
              <input type="radio" value="LogChoice1" name="LogTypesChoice" />
              Frequency and Consistency Log
              <input type="radio" value="LogChoice2" name="LogTypesChoice" />
              Phonology and Orthography
            </div>
          </div>

          <div className="RightContentBottom">
            <div className="RightContentSegments">
              <h2>Variables</h2>
              <h3>
                <label for="General">General</label>
              </h3>

              <label>
                <input type="checkbox" name="options" value="option1" /> Option
                1
              </label>

              <label>
                <input type="checkbox" name="options" value="option2" /> Option
                2
              </label>

              <label>
                <input type="checkbox" name="options" value="option3" /> Option
                3
              </label>

              <label>
                <input type="checkbox" name="options" value="option4" /> Option
                4
              </label>
            </div>

            <div className="RightContentSegments">
              <h3>
                <label for="Orthographic">Orthographic</label>
              </h3>

              <label>
                <input type="checkbox" name="options" value="option1" /> Option
                1
              </label>

              <label>
                <input type="checkbox" name="options" value="option2" /> Option
                2
              </label>

              <label>
                <input type="checkbox" name="options" value="option3" /> Option
                3
              </label>

              <label>
                <input type="checkbox" name="options" value="option4" /> Option
                4
              </label>
            </div>

            <div className="RightContentSegments">
              <h3>
                <label for="Phonological">Phonological</label>
              </h3>

              <label>
                <input type="checkbox" name="options" value="option1" /> Option
                1
              </label>

              <label>
                <input type="checkbox" name="options" value="option2" /> Option
                2
              </label>

              <label>
                <input type="checkbox" name="options" value="option3" /> Option
                3
              </label>

              <label>
                <input type="checkbox" name="options" value="option4" /> Option
                4
              </label>
            </div>

            <div className="RightContentSegments">
              <h3>
                <label for="Semantic">Semantic</label>
              </h3>

              <label>
                <input type="checkbox" name="options" value="option1" /> Option
                1
              </label>

              <label>
                <input type="checkbox" name="options" value="option2" /> Option
                2
              </label>

              <label>
                <input type="checkbox" name="options" value="option3" /> Option
                3
              </label>

              <label>
                <input type="checkbox" name="options" value="option4" /> Option
                4
              </label>
            </div>

            <div className="RightContentSegments">
              <h3>
                <label for="Ortho-Phon">Ortho-Phon</label>
              </h3>

              <label>
                <input type="checkbox" name="options" value="option1" /> Option
                1
              </label>

              <label>
                <input type="checkbox" name="options" value="option2" /> Option
                2
              </label>

              <label>
                <input type="checkbox" name="options" value="option3" /> Option
                3
              </label>

              <label>
                <input type="checkbox" name="options" value="option4" /> Option
                4
              </label>
            </div>

            <div className="RightContentSegments">
              <h3>
                <label for="Morphology">Morphology</label>
              </h3>

              <label>
                <input type="checkbox" name="options" value="option1" /> Option
                1
              </label>

              <label>
                <input type="checkbox" name="options" value="option2" /> Option
                2
              </label>

              <label>
                <input type="checkbox" name="options" value="option3" /> Option
                3
              </label>

              <label>
                <input type="checkbox" name="options" value="option4" /> Option
                4
              </label>
            </div>

            <div className="RightContentSegments">
              <h3>
                <label for="Response Variables">Response Variables</label>
              </h3>

              <label>
                <input type="checkbox" name="options" value="option1" /> Option
                1
              </label>

              <label>
                <input type="checkbox" name="options" value="option2" /> Option
                2
              </label>

              <label>
                <input type="checkbox" name="options" value="option3" /> Option
                3
              </label>

              <label>
                <input type="checkbox" name="options" value="option4" /> Option
                4
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeforeSubmit;
