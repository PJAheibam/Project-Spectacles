import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import Add from "../../assets/img/add-to-cart.png";
import Remove from "../../assets/img/remove-cart.png";
const ProductCard = (props) => {
  const location = useLocation();
  //console.log(props.price);
  //const {id, name, desc, amount} = props.item;
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card align-items-center">
          <img
            src={props.imgsrc}
            className="card-img-top mt-5"
            alt="Product"
            width="100"
          />

          <div className="card-body">
            <h2 className="card-title">{props.name}</h2>
            <h6>Price: {props.price}$</h6>
            <ul className="card-text">
              {props.desc.map((f) => (
                <li key={props.desc.indexOf(f)}>{f}</li>
              ))}
            </ul>
            {location.pathname === "/shop" ? (
              <NavLink
                onClick={() => props.addToCart(props.ind)}
                to={`/shop/cart`}
                className="btn btn-primary"
              >
                Buy
              </NavLink>
            ) : (
              <NavLink
                onClick={() => props.remove(props.ind)}
                to={`/shop/cart`}
                className="btn btn-danger"
              >
                Remove
              </NavLink>
            )}

            <img
              className="mx-2"
              onClick={() => props.removeFromCart(props.ind)}
              src={Remove}
              width="40"
              alt="add to cart"
            />
            <span className="badge bg-info fs-6">{props.order}</span>
            <img
              className="ms-2 btn-img"
              onClick={() => props.addToCart(props.ind)}
              src={Add}
              width="40"
              alt="add to cart"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
