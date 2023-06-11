import React, { useState } from "react";
import "./Item.css";
import "animate.css";

function Item(props) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };
  return !isFlipped ? (
    <div className="item animate__animated animate__fadeIn">
      <div className="itemImgContainer">
        <img className="itemImg" src={props.imgSrc} alt={props.alt} />
      </div>
      <div className="itemInfo">
        <div>{props.name}</div>
        <div>{props.price}</div>
        <div>
          <button className="ingredientsBtn" onClick={handleFlipCard}>
            Ingredients
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="flipped animate__animated animate__flipInX">
      <div className="ingredientsTitle">Ingredients:</div>
      <ul className="ingredientsList">
        {props.ingredients.map((ingredient, index) => (
              <li key={index} className="ingredient">{ingredient}</li>
            ))}
      </ul>
      <button className="ingredientsCloseBtn" onClick={handleFlipCard}>Close</button>
    </div>
  );
}

export default Item;
