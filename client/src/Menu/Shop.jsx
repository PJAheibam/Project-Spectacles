import React from "react";
import ProductCard from "./components/ProductCard";
const Shop = (props) => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Shop</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {props.products.map((value, ind) => {
                return (
                  <ProductCard
                    key={ind}
                    price={value.price}
                    ind={value.id - 1}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
