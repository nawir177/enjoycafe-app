import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from './components/Loading';

function App() {
  const Home = lazy(() => import("./pages/home"))
  const ProductDetail = lazy(()=>import("./pages/product/detail"))
  const ShowProductCategory = lazy(()=>import("./pages/product/ShowProductCategory"))
  const CartList = lazy(()=>import("./pages/cart/CartList"))
  const Payment =  lazy(()=>import("./pages/payment/PaymentList"))
  
  return (

        <BrowserRouter>
          <Suspense fallback={<Loading/>}>
            <Routes>
              <Route index path='/' element={<Home/>} />
              <Route path='/product/detail/' element={<ProductDetail/>} />
              <Route path='/product/category/:category' element={<ShowProductCategory/>} />
              <Route path='/cart' element={<CartList/>} />
              <Route path='/payment' element={<Payment/>}/>
            </Routes>
          </Suspense>
        </BrowserRouter>
  )
}

export default App;
