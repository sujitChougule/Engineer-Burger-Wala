import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { creatOrder } from "../../redux/actions/order";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const ConfirmOrder = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("");
  const [disabltBtn, setDisableBtn] = useState(false);

  const {
    cartItems,
    subTotal,
    tax,
    total,
    shippingCharges,
    shippingInfo,
  } = useSelector((state) => state.cart);
  const { message, error } = useSelector((state) => state.order);

  const submitHandler = (e) => {
    e.preventDefault();
    setDisableBtn(true);
    if (paymentMethod === "COD") {
      dispatch(
        creatOrder(
          shippingInfo,
          cartItems,
          paymentMethod,
          subTotal,
          tax,
          shippingCharges,
          total
        )
      );
    } else {
    }
  };

  useEffect(() => {
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
      dispatch({ type: "emptyState" });
      navigate("/paymentsuccessfull");
    }
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
      setDisableBtn(false);
    }
  }, [dispatch, message, error, navigate]);

  return (
    <section className="confirmOrder">
      <main>
        <h1>Confirm Order</h1>
        <form onSubmit={submitHandler}>
          <div>
            <label>Cash On Delivery</label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("COD")}
              required
            />
          </div>
          <div>
            <label>Online</label>
            <input
              type="radio"
              name="payment"
              onChange={() => setPaymentMethod("Online")}
            />
          </div>
          <button disabled={disabltBtn} type="submit">
            Place Order
          </button>
        </form>
      </main>
    </section>
  );
};

export default ConfirmOrder;
