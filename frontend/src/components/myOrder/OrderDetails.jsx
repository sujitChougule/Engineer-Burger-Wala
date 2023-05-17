import React, { useEffect } from "react";
import { getOrdersDetails } from "../../redux/actions/order";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const params = useParams();
  const { order, loading } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrdersDetails(params.id));
  }, [params.id, dispatch]);

  return (
    <section className="orderDetails">
      <main>
        <h1>Order Details</h1>

        <div>
          <h1>Shipping</h1>
          <p>
            <b>Address</b>
            {}
          </p>
        </div>

        <div>
          <h1>Constact</h1>
          <p>
            <b>Name</b>
            {"Sujit"}
          </p>
          <p>
            <b>Phone</b>
            {"9987676720"}
          </p>
        </div>

        <div>
          <h1>Status</h1>
          <p>
            <b>Order Status</b>
            {"Processing"}
          </p>
          <p>
            <b>Placed At</b>
            {"01-2-2023"}
          </p>
          <p>
            <b>Delivered At</b>
            {"05-2-2023"}
          </p>
        </div>

        <div>
          <h1>Payment</h1>
          <p>
            <b>Payment Method</b>
            {"Online"}
          </p>
          <p>
            <b>Payment Reference</b>#{"598752095945"}
          </p>
          <p>
            <b>Paid At</b>
            {"01-2-2023"}
          </p>
        </div>

        <div>
          <h1>Amount</h1>
          <p>
            <b>Items Total</b>₹{32323}
          </p>
          <p>
            <b>Shipping charges</b>₹{200}
          </p>
          <p>
            <b>Tax</b>₹{2322}
          </p>
          <p>
            <b>Total Amount</b>₹{34343}
          </p>
        </div>

        <article>
          <h1>Ordered Items</h1>
          <div>
            <h4>Cheese Burger</h4>
            <div>
              <span>{12}</span> x <span>{232}</span>
            </div>
          </div>

          <div>
            <h4>Veg Cheese Burger</h4>
            <div>
              <span>{10}</span> x <span>{299}</span>
            </div>
          </div>

          <div>
            <h4>Cheese Burger with french fries</h4>
            <div>
              <span>{7}</span> x <span>{799}</span>
            </div>
          </div>

          <h4 style={{ fontWeight: 800 }}>Sub Total</h4>
          <div style={{ fontWeight: 800 }}>₹{2133}</div>
        </article>
      </main>
    </section>
  );
};

export default OrderDetails;
