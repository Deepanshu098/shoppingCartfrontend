import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
// import Home from './pages/Home';
// import Cart from './components/Cart';
import { ToastContainer } from 'react-toastify';
// import CartPage from './pages/CartPage';
// import Cart from './components/Cart';
import CartPage from './pages/CartPage';
import Product from './components/Product';
import PaymentSuccess from './PaymentSuccess';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/paymentsuccess' element={<PaymentSuccess/>}/>
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </Router>
    </>
  );
}

export default App;
