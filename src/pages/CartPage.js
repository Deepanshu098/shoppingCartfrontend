import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { CartContext } from './CartContext';
// import './CartPage.css';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const checkout=async(price)=>{

    const {data : {key}} = await axios.get('http://localhost:9001/api/getkey');

    const {data: {order}} = await axios.post('http://localhost:9001/api/checkout',{price})

    const options = {
       key, // Enter the Key ID generated from the Dashboard
      amount: order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: "INR",
      name: "Shopping Cart",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      callback_url: "http://localhost:9001/api/paymentverify",
      prefill: {
          "name": "Deepanshu",
          "email": "deepanshu@example.com",
          "contact": "9000090000"
      },
      notes: {
          "address": "Razorpay Corporate Office"
      },
      theme: {
          "color": "#121212"
      }
  };
  const razor = new window.Razorpay(options);
  razor.open();
  }
  

  return (
    <div className="cart-page">
      <header>
        <h1>Cart</h1>
        <Link to="/" className="back-to-products">
          🡠 Back to Products
        </Link>
      </header>
      <div className="cart-list">
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h2>{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={()=>checkout(item.price)}>Buy Now</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartPage;
