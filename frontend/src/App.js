import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './components/home/Home';
import Contact from './components/home/Contact.jsx';
import Cart from './components/cart/Cart.jsx'
import Shipping from './components/cart/Shipping.jsx'
import ConfirmOrder from './components/cart/ConfirmOrder.jsx'
import PaymentSuccessfull from './components/cart/PaymentSuccessfull.jsx'
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Login from './components/login/Login.jsx';
import Profile from './components/profile/Profile'
import MyOrders from './components/myOrder/MyOrders.jsx'
import OrderDetails from './components/myOrder/OrderDetails.jsx'
import Dashboard from './components/admin/Dashboard';

import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/confirmOrder.scss';
import './styles/paymentSuccessfull.scss';
import './styles/login.scss';
import './styles/profile.scss';
import './styles/table.scss'
import './styles/orderDetails.scss'
import './styles/dashboard.scss'

function App() {
  return (
    <Router>
      <Header isAuthenticated={true}/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/shipping" element={<Shipping/>}/>
        <Route path="/confirmorder" element={<ConfirmOrder/>}/>
        <Route path="/paymentsuccessfull" element={<PaymentSuccessfull/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/me" element={<Profile/>}/>
        <Route path="/myorders" element={<MyOrders/>}/>
        <Route path='/order/:id' element={<OrderDetails/>}/>
        <Route path='/admin/dashboard' element={<Dashboard/>}/>
      </Routes>
      <Footer/>
    </Router> 
  );
}

export default App;
