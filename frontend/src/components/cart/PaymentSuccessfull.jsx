import React from "react";
import { Link } from "react-router-dom";
const PaymentSuccessfull = () => {
  return (
    <section className="paymentsuccessfull">
      <main>
        <h1>Order Confirmed</h1>
        <p>Order Placed Successfully, You can check status below</p>
        <Link to="/myorders">Check Status</Link>
      </main>
    </section>
  );
};

export default PaymentSuccessfull;
