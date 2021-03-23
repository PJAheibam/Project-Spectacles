import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
const Cart = (props) => {
  let totalPrice = 0;
  props.products.forEach((product, index) => {
    if (product.order > 0) {
      totalPrice += product.price * product.order;
    } else {
      totalPrice += product.price;
    }
  });
  //console.log(totalPrice);

  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Cart</h1>
        <div className="row justify-content-center">
          <h1 className="col-3 text-center bg-primary badge fs-5">
            Total Price: {totalPrice}$
          </h1>
        </div>
      </div>

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {props.products.map((value, ind) => {
                return (
                  <ProductCard
                    key={ind}
                    ind={value.id - 1}
                    price={value.price}
                    imgsrc={value.imgsrc}
                    name={value.name}
                    desc={value.desc}
                    addToCart={props.addToCart}
                    removeFromCart={props.removeFromCart}
                    remove={props.remove}
                    order={value.order}
                  />
                );
              })}
            </div>
            <div className="row mt-5 justify-content-center">
              <Link
                to="/shop/cart/checkout"
                className=" col-3 btn btn-primary fs-5"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
