import { useState } from "react";
import info from "../../data/dataBox";
import "./InfoBox.css";

const InfoBox = () => {
  const [typeOfInfo, setTypeOfInfo] = useState(3);
  const filteredInfo = info.filter((oneInfo) => {
    return oneInfo.id === typeOfInfo;
  });

  return (
    <div>
      <div>
        <button
          className="one-button"
          key={info.id}
          onClick={() => {
            setTypeOfInfo(1);
          }}
        >
          Pan Brouček
        </button>
        <button
          className="one-button"
          key={info.id}
          onClick={() => {
            setTypeOfInfo(2);
          }}
        >
          Stroj času
        </button>
        <button
          className="one-button"
          key={info.id}
          onClick={() => {
            setTypeOfInfo(3);
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
