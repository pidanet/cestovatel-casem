import "./OneItem.css";

const OneItem = (props) => {
  return (
    <section className="one-item">
      <div className="one-item-wrapper">
        <img src={props.itemImage} alt="" />
      </div>
      <div className="one-item-text">
        <h3>{props.itemTitle}</h3>
        <p>{props.itemDesc}</p>
      </div>
    </section>
  );
};

export default OneItem;
