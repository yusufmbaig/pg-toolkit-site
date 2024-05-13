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
              <label for="LogTypes">
                <div className="starText">
                  <h2 id="star">*</h2>
                  <h2>Choose between:</h2>
                </div>
              </label>
              <div className="InputContainer">
                <input type="radio" value="LogChoice1" name="LogTypesChoice" />
                <p>Frequency and Consistency Log</p>
              </div>
              <div className="InputContainer">
                <input type="radio" value="LogChoice2" name="LogTypesChoice" />
                <p>Phonology and Orthography</p>
              </div>
            </div>
          </div>

          <div className="RightContentBottom">
            <div className="RightContentSegments">
              <h2>Variables</h2>
              <h3>General</h3>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Frequency
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Contextual Diversity
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className="InputContainer">
                <label class="Checkcontainer">
                  Familiarity
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Age of Acquisition
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="RightContentSegments">
              <h3>Orthographic</h3>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Orthographic Length
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Graphotactic Probabilities
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className="InputContainer">
                <label class="Checkcontainer">
                  Orthographic Neighbourhood
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="RightContentSegments">
              <h3>Phonological</h3>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Phonological Length
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Phonological Probabilities
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className="InputContainer">
                <label class="Checkcontainer">
                  Phonological Neighbourhood
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  First Phoneme
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  IPA Transcription
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="RightContentSegments">
              <h3>Semantic</h3>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Concreteness/Imageability
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Polysemy
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className="InputContainer">
                <label class="Checkcontainer">
                  Number of Features
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Specific Semantic Features
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Affect
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Semantic Neighbourhood
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Vector Representation
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="RightContentSegments">
              <h3>Ortho-Phon</h3>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Phonogaphic Neighbourhood
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Consistency
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="RightContentSegments">
              <h3>Morphology</h3>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Morphological Length
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Frequency
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className="InputContainer">
                <label class="Checkcontainer">
                  Family Size
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Percent More Frequent
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Affix Length
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Affix Productivity
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
            <div className="RightContentSegments">
              <h3>Response Variables</h3>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Visual Lexicon Decision
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Auditory Lexicon Decision
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>

              <div className="InputContainer">
                <label class="Checkcontainer">
                  Reading Aloud
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Semantic Decision
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
              <div className="InputContainer">
                <label class="Checkcontainer">
                  Recognition Memory
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BeforeSubmit;
