import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Contact from "./components/home/Contact.jsx";
import Cart from "./components/cart/Cart.jsx";
import Shipping from "./components/cart/Shipping.jsx";
import ConfirmOrder from "./components/cart/ConfirmOrder.jsx";
import PaymentSuccessfull from "./components/cart/PaymentSuccessfull.jsx";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./components/login/Login.jsx";
import Profile from "./components/profile/Profile";
import MyOrders from "./components/myOrder/MyOrders.jsx";
import OrderDetails from "./components/myOrder/OrderDetails.jsx";
import Dashboard from "./components/admin/Dashboard";
import Users from "./components/admin/Users";
import Orders from "./components/admin/Orders";
import About from "./components/about/About";
import NotFound from "./components/layout/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./styles/app.scss";
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confirmOrder.scss";
import "./styles/paymentSuccessfull.scss";
import "./styles/login.scss";
import "./styles/profile.scss";
import "./styles/table.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/users.scss";
import "./styles/about.scss";
import { loadUser } from "./redux/actions/user";

function App() {
  const dispatch = useDispatch();
  const { error, message, isAuthenticated } = useSelector(
    (state) => state.auth
  );
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({
        type: "clearError",
      });
    }
    if (message) {
      toast.success(message);
      dispatch({
        type: "clearMessage",
      });
    }
  }, [dispatch, error]);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shipping" element={<Shipping />} />
        <Route path="/confirmorder" element={<ConfirmOrder />} />
        <Route path="/paymentsuccessfull" element={<PaymentSuccessfull />} />
        <Route path="/login" element={<Login />} />
        <Route path="/me" element={<Profile />} />
        <Route path="/myorders" element={<MyOrders />} />
        <Route path="/order/:id" element={<OrderDetails />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/about" element={<About />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
