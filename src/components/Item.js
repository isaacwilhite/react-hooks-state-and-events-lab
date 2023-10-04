import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(true)
  const handleCart = () => {
    setIsInCart((isInCart) => !isInCart)
  }
  const cartClass = isInCart ? "" : "in-cart"
  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{isInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
