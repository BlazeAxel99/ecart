import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: 999,
      title: " Phone ",
      qty: 1,
      img: "",
    };
  }

  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: "#777" }}>Rs {price}</div>
          <div style={{ color: "#777" }}>{qty} </div>
          <div className="cart-item-actions">
            {/*Buttons*/}
            <img
              alt="increase"
              className="action-icons"
              src="https://img-premium.flaticon.com/png/512/1665/premium/1665629.png?token=exp=1633012346~hmac=8dffab16d12bb1f05fd7d6e21c73b329"
            />
            <img
              alt="decrease"
              className="action-icons"
              src="https://img-premium.flaticon.com/png/512/1665/premium/1665663.png?token=exp=1633012257~hmac=bc27542522a75decd3a4254d6922e7ac"
            />
            <img
              alt="delete"
              className="action-icons"
              src="https://cdn-icons-png.flaticon.com/512/3096/3096673.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;