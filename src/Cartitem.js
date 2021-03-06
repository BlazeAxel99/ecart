import React from "react";

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } =
    props;
  return (
    <div className="cart-item">
      <div className="left-block">
        <img style={styles.image} src={product.img} />
      </div>
      <div className="right-block">
        <div style={{ fontSize: 25 }}>{title}</div>
        <div style={{ color: "#777" }}>Rs {price}</div>
        <div style={{ color: "#777" }}> Qty :{qty} </div>
        <div className="cart-item-actions">
          {/*Buttons*/}
          <img
            alt="increase"
            className="action-icons"
            src="https://img-premium.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1633012346~hmac=8dffab16d12bb1f05fd7d6e21c73b329"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            alt="decrease"
            className="action-icons"
            src="https://img-premium.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1633012257~hmac=bc27542522a75decd3a4254d6922e7ac"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            alt="delete"
            className="action-icons"
            src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
