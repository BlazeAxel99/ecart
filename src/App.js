import React from "react";
import Navbar from "./Navbar";
import Cart from "./Cart";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img: "https://cdn.shopify.com/s/files/1/2581/7358/products/WW194003-BK-NGM-IMG1-Hero-Zoom_c0ffea1f-1fc6-4ad2-a010-2d930027a3bd_600x.jpg?v=1630625903",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile phone",
          qty: 10,
          img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Nokia_3310_3G_%2820180116%29.jpg/1200px-Nokia_3310_3G_%2820180116%29.jpg",
          id: 2,
        },
        {
          price: 9999,
          title: " Laptop ",
          qty: 4,
          img: "https://image.shutterstock.com/image-vector/laptop-blank-screen-silver-color-260nw-1382811209.jpg",
          id: 3,
        },
      ],
    };
    //this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }
  handleIncreaseQuantity = (product) => {
    console.log("hey please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };
  handleDecreaseQuantity = (product) => {
    console.log("hey please inc the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty === 0) {
      return;
    }
    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };
  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
      products: items,
    });
  };
  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  getCartTotal = () => {
    const { products } = this.state;
    let carTotal = 0;
    products.map((product) => {
      carTotal = carTotal + product.qty * product.price;
    });
    return carTotal;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL: {this.getCartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
