import React from "react";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const CartItem = ({ value, title, img, increment, decrement }) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>
    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {
  const {
    cartItems: {
      cheeseBurger: { quantity: cheeseBurger }, //const cheeseBurger = cartItems.cheeseBurger.quantity
      vegCheeseBurger: { quantity: vegCheeseBurger },
      burgerWithFries: { quantity: burgerWithFries },
    },
    subTotal,
    tax,
    shippingCharges,
    total,
  } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const increment = (item) => {
    switch (item) {
      case 1:
        dispatch({
          type: "cheeseBurgerIncrement",
        });
        dispatch({
          type: "calculatePrice",
        });
        break;
      case 2:
        dispatch({
          type: "vegCheeseBurgerIncrement",
        });
        dispatch({
          type: "calculatePrice",
        });
        break;
      case 3:
        dispatch({
          type: "burgerWithFriesIncrement",
        });
        dispatch({
          type: "calculatePrice",
        });
        break;

      default:
        dispatch({
          type: "cheeseBurgerIncrement",
        });
        dispatch({
          type: "calculatePrice",
        });
        break;
    }
  };

  const decrement = (item) => {
    switch (item) {
      case 1:
        if (cheeseBurger === 0) break;
        dispatch({
          type: "cheeseBurgerDecrement",
        });
        dispatch({
          type: "calculatePrice",
        });
        break;
      case 2:
        if (vegCheeseBurger === 0) break;

        dispatch({
          type: "vegCheeseBurgerDecrement",
        });
        dispatch({
          type: "calculatePrice",
        });
        break;
      case 3:
        if (burgerWithFries === 0) break;

        dispatch({
          type: "burgerWithFriesDecrement",
        });
        dispatch({
          type: "calculatePrice",
        });
        break;

      default:
        dispatch({
          type: "cheeseBurgerDecrement",
        });
        break;
    }
  };

  return (
    <section className="cart">
      <main>
        <CartItem
          value={cheeseBurger}
          title={"cheezz burger"}
          img={burger1}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
        />

        <CartItem
          value={vegCheeseBurger}
          title={"veg Cheese Burger"}
          img={burger3}
          increment={() => increment(2)}
          decrement={() => decrement(2)}
        />
        <CartItem
          value={burgerWithFries}
          title={"burger With Fries"}
          img={burger2}
          increment={() => increment(3)}
          decrement={() => decrement(3)}
        />

        <article>
          <div>
            <h4>Sub Total</h4>
            <p>₹{subTotal}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{tax}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{shippingCharges}</p>
          </div>
          <div>
            <h4>Net Total</h4>
            <p>₹{total}</p>
          </div>

          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
