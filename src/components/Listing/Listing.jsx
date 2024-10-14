import allItems from "../../data/data";
import "./Listing.css";

const Listing = () => {
  return (
    <section className="item-section">
      {allItems.map((oneMovie) => {
        return (
          <section className="one-item" key={oneMovie.id}>
            <div className="one-item-wrapper">
              <img src={oneMovie.image} alt={oneMovie.title} />
            </div>
            <div className="one-item-text">
              <h3>{oneMovie.title}</h3>
              <p>{oneMovie.description}</p>
            </div>
          </section>
        );
      })}
    </section>
  );
};

export default Listing;
