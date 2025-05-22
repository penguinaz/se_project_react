import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

function ClothesSection({ clothingItems, handleCardClick }) {
  return (
    <section className="collection">
      <div className="collection__header">
        <p className="collection__text">Your items</p>
        <button className="collection__add-btn">+ Add new</button>
      </div>
      <ul className="collection__list">
        {clothingItems.map((item) => {
          return (
            <ItemCard
              key={item._id}
              item={item}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default ClothesSection;
