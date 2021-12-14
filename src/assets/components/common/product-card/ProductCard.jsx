import s from "./ProductCard.module.scss";

import imgCart from "./../../../img/slider1/cart.png";
import IconCheckboxesCard from "./icon-boxes-card/IconCheckboxesCard.jsx";

function ProductCard(props) {
  return (
    <div className={s.box}>
      {props.cardData.sale && (
        <span className={s.sale} style={props.styleSale}>
          SALE
        </span>
      )}
      <a className={s.like} href="#">
        <IconCheckboxesCard />
      </a>
      <div className={s.wrap}>
        <img className={s.productImg} src={props.cardData.img} alt="" />
        <span className={s.title}>{props.cardData.title}</span>
        <span className={s.price}>{props.cardData.price}</span>

        {props.cardData.inStock && (
          <div className={s.notAvailable}>
            <span className={s.nope}>{props.cardData.nope}нет в наличии</span>
            <a className={s.inform} href="#">Сообщить о поступлении{props.inform}</a>
          </div>
        )}
      </div>
      {props.cardData.basket && (
        <a className={s.cartLink} style={props.styleCart}>
          <img className={s.cartImg} src={imgCart} alt="" />
        </a>
      )}
      {/* {props.cardData.inStock ? (
        <div> price & cartLink </div>
      ) : (
        <div> nope & inform </div>
      )} */}
    </div>
  );
}

export default ProductCard;
