import { useState } from "react";

const Form = () => {
  const [outcome, setOutcome] = useState("");
  const [age, setAge] = useState("");

  const formSubmit = (event) => {
    event.preventDefault();

    fetch(`https://digidates.de/api/v1/age/${outcome}`)
      .then((response) => response.json())
      .then((data) => setAge(data.age))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <h2>Kolik je vám let?</h2>
      <div className="input-form">
        <form onSubmit={formSubmit} className="form">
          <label>Zadejte datum narození:</label>
          <input
            type="date"
            value={outcome}
            onChange={(event) => setOutcome(event.target.value)}
            className="date"
          />
          <button className="form-button">Odeslat</button>
        </form>
        <p>
          Váš věk je: <strong>{age}</strong>
        </p>
      </div>
    </>
  );
};

export default Form;
