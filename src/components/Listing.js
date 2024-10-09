import OneItem from "./OneItem";
import allItems from "../data";
import "./Listing.css";

const Listing = () => {
  return (
    <section className="item-section">
      <OneItem
        itemImage={allItems[0].image}
        itemTitle={allItems[0].title}
        itemDesc={allItems[0].description}
      />
      <OneItem
        itemImage={allItems[1].image}
        itemTitle={allItems[1].title}
        itemDesc={allItems[1].description}
      />
      <OneItem
        itemImage={allItems[2].image}
        itemTitle={allItems[2].title}
        itemDesc={allItems[2].description}
      />
      <OneItem
        itemImage={allItems[3].image}
        itemTitle={allItems[3].title}
        itemDesc={allItems[3].description}
      />
    </section>
  );
};

export default Listing;
