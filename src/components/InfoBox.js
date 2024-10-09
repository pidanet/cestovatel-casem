import { useState } from "react";
import info from "../dataBox";
import "./InfoBox.css";

const InfoBox = () => {
  const [typeOfInfo, setTypeOfInfo] = useState("Třetí");
  const filteredInfo = info.filter((oneInfo) => {
    return oneInfo.category === typeOfInfo;
  });

  return (
    <div>
      <div>
        <button
          className="one-button"
          key={info.id}
          onClick={() => {
            setTypeOfInfo("První");
          }}
        >
          Pan Brouček
        </button>
        <button
          className="one-button"
          key={info.id}
          onClick={() => {
            setTypeOfInfo("Druhý");
          }}
        >
          Stroj času
        </button>
        <button
          className="one-button"
          key={info.id}
          onClick={() => {
            setTypeOfInfo("Třetí");
          }}
        >
          Newtonův mozek
        </button>
      </div>

      <div className="text-box">
        {filteredInfo.map((oneInfo) => {
          const { id, text } = oneInfo;
          return (
            <div key={id} className="info-text">
              <p>{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default InfoBox;
