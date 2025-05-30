import "./ItemCard.css";

function ItemCard({ item, handleCardClick }) {
  return (
    <div className="card">
      <h2 className="card__title">{item.name}</h2>
      <img
        onClick={() => {
          handleCardClick(item);
        }}
        className="card__image"
        src={item.imageUrl}
        alt={item.name}
      />
    </div>
  );
}

export default ItemCard;
