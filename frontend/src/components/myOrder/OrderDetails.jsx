import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order Details</h1>

            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"dsd ssfad fwew"}
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
                    <b>Payment Reference</b>
                    #{"598752095945"}
                </p>
                <p>
                    <b>Paid At</b>
                    {"01-2-2023"}
                </p>
            </div>

            <div>
                <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    ₹{32323}
                </p>
                <p>
                    <b>Shipping charges</b>
                    ₹{200}
                </p>
                <p>
                    <b>Tax</b>
                    ₹{2322}
                </p>
                <p>
                    <b>Total Amount</b>
                    ₹{34343}
                </p>
            </div>
        </main>
    </section>
  )
}

export default OrderDetails