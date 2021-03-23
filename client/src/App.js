import React, { useState } from "react";
import Axios from "axios";
import {
  useHistory,
  withRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Menu/Home";
import About from "./Menu/About";
import Contact from "./Menu/Contact";
import Shop from "./Menu/Shop";
import Cart from "./Menu/Cart";
import Navbar from "./Menu/Navbar";
import SignIn from "./Menu/SignIn";
import SignUp from "./Menu/SignUp";
import UserProfile from "./Menu/components/UserProfile";
import EditProfile from "./Menu/components/EditProfile";
import ProductList from "./Menu/ProductList";
import Checkout from "./Menu/Checkout";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

const App = () => {
  const history = useHistory();
  const [pro, updateProduct] = useState({ ...ProductList });
  const [cart, setCart] = useState(0);
  const products = ProductList;
  const [guest, setGuest] = useState(true);
  const [userData, setUserData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    country: "",
    city: "",
    state: "",
    address: "",
    address2: "",
    zip: "",
  });

  //event handler
  const remove = (index) => {
    let temp = pro[index];
    temp.order = 0;
    updateProduct({ ...pro, [index]: temp });
    setCart(products.filter((p) => p.order > 0).length);
  };
  const removeFromCart = (index) => {
    if (products[index].order !== 0) {
      let temp = pro[index];
      temp.order -= 1;
      updateProduct({ ...pro, [index]: temp });
    }
    setCart(products.filter((p) => p.order > 0).length);
  };
  const addToCart = (index) => {
    let temp = pro[index];
    temp.order += 1;
    updateProduct({ ...pro, [index]: temp });
    setCart(products.filter((p) => p.order > 0).length);
    //console.log(pro[i]);
  };
  const handleSignIn = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/login", userData).then((response) => {
      if (response.data.length > 0) {
        console.log("Sign In Clicked");
        setUserData(response.data[0]);
        setGuest(false);
      } else {
        console.log("no user exist!");
      }
    });
  };
  const handleLogOut = () => {
    console.log("logout clicked");
    setGuest(true);
    setUserData({
      id: null,
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      country: "",
      city: "",
      state: "",
      address: "",
      address2: "",
      zip: "",
    });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    setGuest(false);

    Axios.put("http://localhost:3001/update-user-info", userData).then(
      (response) => {
        if (response.data.sqlMessage || response.data.code) {
          console.log(response.data.sqlMessage);
        } else {
          console.log("Update Successful");
          history.push("/" + userData.firstName);
        }
      }
    );
  };
  const inputEvent = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    setGuest(false);

    Axios.post("http://localhost:3001/addNewUser", userData).then(
      (response) => {
        if (response.data.sqlMessage || response.data.code) {
          setGuest(true);
          console.log(response.data.sqlMessage);
          setUserData({
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            country: "",
            city: "",
            state: "",
            address: "",
            address2: "",
            zip: "",
          });
          console.log(userData);
        } else {
          console.log("signup successfull");
          setGuest(false);
          //history.push(`/${userData.firstName}`, { from: "SignUp" });
          console.log(userData);
        }
      }
    );
    //setGuest(false);
  };
  return (
    <>
      <Navbar
        cart={cart}
        guest={guest}
        userData={userData}
        handleLogOut={handleLogOut}
      />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/shop">
          <Shop
            products={ProductList}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            remove={remove}
          />
        </Route>
        <Route exact path="/shop/cart">
          <Cart
            products={products.filter((p) => p.order > 0)}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            remove={remove}
          />
        </Route>

        {guest ? (
          <Route exact path="/signin">
            {" "}
            <SignIn
              inputEvent={inputEvent}
              handleSignIn={handleSignIn}
              guest={guest}
              userData={userData}
            />{" "}
          </Route>
        ) : (
          <Redirect from="/signin" to={`/${userData.firstName}`} />
        )}

        {guest ? (
          <Route exact path="/signup">
            <SignUp
              inputEvent={inputEvent}
              handleSubmit={handleSubmit}
              guest={guest}
              userData={userData}
            />
          </Route>
        ) : (
          <Redirect from="/signup" to="/shop" />
        )}
        {guest ? (
          //<Redirect to="/" />
          <Route exact path="/" component={Home} />
        ) : (
          <Route exact path={`/${userData.firstName}`}>
            <UserProfile
              inputEvent={inputEvent}
              handleSubmit={handleSubmit}
              guest={guest}
              userData={userData}
            />
          </Route>
        )}
        {guest ? (
          <Route exact path="/" component={Home} />
        ) : (
          <Route exact path={`/${userData.firstName}/edit`}>
            <EditProfile
              inputEvent={inputEvent}
              handleUpdate={handleUpdate}
              guest={guest}
              userData={userData}
            />
          </Route>
        )}
        <Route exact path="/shop/cart/checkout">
          <Checkout />
        </Route>
      </Switch>
    </>
  );
};

export default withRouter(App);
