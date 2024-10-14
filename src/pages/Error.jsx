import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <h2>Stránka nenalezena</h2>
      <p className="link-to-main-page">
        Pokračujte na <Link to="/">úvodní stranu</Link>
      </p>
    </>
  );
};

export default Error;
