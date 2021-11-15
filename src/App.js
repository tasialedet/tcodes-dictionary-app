import React from "react";
import "./App.css";
import Images from "./Images";
import Search from "./Search";

function App() {
  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <p>What word do you want to look up?</p>
      <Search defaultWord="ram" />
      <hr />
      <strong className="SearchedWord">ram</strong>
      {""}
      <span className="phonetics">[ram]</span>
      <p className="partOfSpeech">noun</p>
      <p className="definition">
        1. a male sheep. 2. (initial capital letter)Astronomy, Astrology. the
        constellation or sign of Aries. 3. any of various devices for battering,
        crushing, driving, or forcing something, especially a battering ram. 4.
        (formerly) a heavy beak or spur projecting from the bow of a warship for
        penetrating the hull of an enemy's ship. 5. (formerly) a warship so
        equipped, especially one used primarily for ramming enemy vessels. 6.
        the heavy weight that strikes the blow in a pile driver or the like. 7.
        a piston, as on a hydraulic press. 8. a reciprocating part of certain
        machine tools, as the toolholder of a slotter or shaper. 9. hydraulic
        ram.
      </p>
      <p className="partOfSpeech">verb (used with object), rammed, ram·ming</p>
      <p className="definition">
        10. to drive or force by heavy blows. 11. to strike with great force;
        dash violently against: The car went out of control and rammed the
        truck. 12. to cram; stuff: They rammed the gag in his mouth. 13. to push
        firmly: to ram a bill through the Senate. 14. to force (a charge) into a
        firearm, as with a ramrod.
      </p>
      <Images />
      <p>
        Open-Sourced by Tasia Ledet on{" "}
        <a
          href="https://github.com/tasialedet/tcodes-dictionary"
          target="blank"
        >
          Github
        </a>{" "}
        and Hosted on{" "}
        <a href="https://objective-kepler-9b99bd.netlify.app" target="blank">
          Netlify
        </a>
      </p>
    </div>
  );
}

export default App;
