import React from "react";
import AddIcon from "../../assets/icons/icon-add.svg";
import MinusIcon from "../../assets/icons/icon-minus.svg";
import DeleteIcon from "../../assets/icons/icon-delete.svg";
import ImageBikeShort from "../../assets/0702007-radhose-maedels-ohne-traeger-vorderseite.png";

function ProductCardBasket({
  articlenumber,
  manufacturer,
  productname,
  price,
  quantity,
  size,
}) {
  return (
    <div className="white-bg round-border-small padding-15">
      <div className="flex-container row gap-40">
        <div className="flex-container column">
          <img src={ImageBikeShort} alt="Bikeshort" className="max-width-80" />
        </div>
        <div className="flex-container column">
          <div className="flex-contain row">
            <p className="marke bold">{manufacturer}</p>
            <p className="artikelname-review bold ">{productname}</p>
          </div>
          <div className="flex-container row gap-top-small">
            <div className="flex-container column padding-right-30 border-right-grey">
              <p className="artikelnummer font-dark">Menge</p>
              <div className="flex-container row gap-10 align-vertically">
                <img
                  src={MinusIcon}
                  alt="Icon Minus"
                  className="size-icon-small"
                />
                <p className="font-dark font-extra-small">{quantity}</p>
                <img
                  src={AddIcon}
                  alt="Icon Plus"
                  className="size-icon-small"
                />
              </div>
            </div>
            <div className="flex-container column padding-left-30 padding-right-30 border-right-grey">
              <p className="artikelnummer font-dark">Nr.</p>
              <p className="font-dark font-extra-small">{articlenumber}</p>
            </div>
            <div className="flex-container column padding-left-30">
              <p className="artikelnummer font-dark">Größe</p>
              <p className="font-dark font-extra-small">{size}</p>
            </div>
          </div>
        </div>
        <div className="flex-container column space-between align-end">
          <img src={DeleteIcon} alt="Icon Delete" className="size-icon" />
          <p className="preis font-dark ">{price}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCardBasket;
