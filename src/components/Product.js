import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import products from '../ProductsData';
// import {  useCart } from '../context/CartContext';

function Product() {

    const { cart, addToCart } = useContext(CartContext);

  const handleAddToCart = (product) => {
    const isInCart = cart.some((item) => item.id === product.id);
    if (isInCart) {
      toast.info('Item updated in cart');
    } else {
      toast.success('Item added to cart');
    }
    addToCart(product);
  };

    
  return (
    <div className="product-page">
    <header>
      <h1>Products</h1>
      <Link to="/cart" className="cart-icon">
        🛒 <span>{cart.length}</span>
      </Link>
    </header>
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h2>{product.name}</h2>
          <p>${product.price}</p>
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  </div>
  )
}

export default Product;