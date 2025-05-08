import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const Home = lazy(() => import("./pages/home"))
  const ProductDetail = lazy(()=>import("./pages/product/detail"))
  const ShowProductCategory = lazy(()=>import("./pages/product/ShowProductCategory"))
  const CartList = lazy(()=>import("./pages/cart/CartList"))
  return (

        <BrowserRouter>
          <Suspense fallback={'loading...'}>
            <Routes>
              <Route index path='/' element={<Home />} />
              <Route path='/product/detail/' element={<ProductDetail/>} />
              <Route path='/product/category/:category' element={<ShowProductCategory/>} />
              <Route path='/cart' element={<CartList/>} />
            </Routes>
          </Suspense>
        </BrowserRouter>
  )
}

export default App;
