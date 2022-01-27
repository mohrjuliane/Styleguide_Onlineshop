import React from "react";
import AddToBasketIcon from "../../assets/icons/icon-add-to-basket.svg";
import ImageBikeShort from "../../assets/0702007-radhose-maedels-ohne-traeger-vorderseite.png";

function ProductCard({ articlenumber, manufacturer, productname, price }) {
  return (
    <div className="white-bg round-border-small padding-15 max-width-200">
      <div className="flex-container column ">
        <div className="flex-container row space-between">
          <p className="artikelnummer font-dark">Nr. {articlenumber}</p>
          <img
            src={AddToBasketIcon}
            alt="Icon add to basket"
            className="size-icon"
          />
        </div>
        <img src={ImageBikeShort} alt="Bikeshort" className="max-width-200" />
        <p className="marke bold">{manufacturer}</p>
        <p className="artikelname-review bold">{productname}</p>
        <p className="preis font-dark">{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
