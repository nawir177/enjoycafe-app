import App from "../App";
import { useState } from "react";
export default function ProductDetail() {
   const [preview, setPreview] = useState('')
   const [qty, setQty]= useState(1);

   const plusQty =()=>{
      setQty(qty+1)
   }
   const minQty = ()=>{
      qty <= 1 ? setQty(1) : setQty(qty - 1)
   }
   return (
      <App title={'detail product'}>
         <div className="container">
            {/* proview image */}
            {preview === '' ?
               <div className="transition-all duration-150 w-full h-56 rounded bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(/image/product/1.png)` }}></div>
               :
               <div className="transition-all duration-150  w-full h-56 rounded bg-contain bg-no-repeat bg-center" style={{ backgroundImage: `url(${preview})` }}></div>
            }

            {/* list iamge */}
            <div className="flex gap-1 item-center max-w-sm overflow-x-scroll">
               <div className="col">
                  <button onClick={() => { setPreview('/image/product/2.jpg') }} className={`w-20 h-20 bg-cover bg-center mt-4 ${preview === '/image/product/2.jpg' ? 'ring' : null} ring-orange-400`} style={{ backgroundImage: `url(/image/product/2.jpg)` }} ></button>
               </div>
               <div className="col">
                  <button onClick={() => { setPreview('/image/product/3.jpg') }} className={`w-20 h-20 bg-cover bg-center mt-4 ${preview === '/image/product/3.jpg' ? 'ring' : null} ring-orange-400`} style={{ backgroundImage: `url(/image/product/3.jpg)` }} ></button>
               </div>
               <div className="col">
                  <button onClick={() => { setPreview('/image/product/4.jpeg') }} className={`w-20 h-20 bg-cover bg-center mt-4 ${preview === '/image/product/4.jpeg' ? 'ring' : null} ring-orange-400`} style={{ backgroundImage: `url(/image/product/4.jpeg)` }} ></button>
               </div>
               <div className="col">
                  <button onClick={() => { setPreview('/image/product/5.jpeg') }} className={`w-20 h-20 bg-cover bg-center mt-4 ${preview === '/image/product/5.jpeg' ? 'ring' : null} ring-orange-400`} style={{ backgroundImage: `url(/image/product/5.jpeg)` }} ></button>
               </div>
            </div>
            <h1 className="mt-6 text-2xl font-semibold">Nama Produk</h1>
            <div className="flex mt-6">
               <div className="col">
                  <div className="bg-red-600 px-4 py-2 rounded-xl text-center text-white font-bold">
                     Rp. 10.000
                  </div>
               </div>
            </div>
            <div className="mt-4 p-3 rounded-xl bg-orange-950 text-sm text-gray-100">
               <h3 className="text-xl font-bold mb-4">Deskripsi Produk</h3>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus magnam eius aperiam facilis eligendi ipsa iste unde laborum porro vero, doloremque doloribus nesciunt nemo inventore alias deleniti minus officia.</p>

            </div>

            <div className="p-6 ring-2 ring-orange-400 rounded-xl mt-4">
               <p className="font-semibold  text-orange-500">Pilih Variant</p>
               <div className="mt-4 flex items-center gap-4">
                  <div className="col">
                     <button onClick={minQty} className="py-2 px-4 rounded bg-primary text-white text-xl">
                        -
                     </button>
                 
                  </div>
                  <div className="col">
                     <div className="py-2 px-6 bg-white text-2xl flex items-center">
                        {qty}
                     </div>
                  </div>
                  <div className="col">
                     <button onClick={plusQty} className="py-2 px-4 rounded bg-primary text-white text-xl">
                        +
                     </button>
                  </div>
               </div>
               <div className="mt-4 flex gap-1 items-center">
                  <div className="col">
                     <button className="flex gap-2 items-center py-1 px-4 border border-primary rounded ">
                        <div className="col">Dingin</div>
                     </button>
                  </div>
                  <div className="col">
                     <button className="flex gap-2 items-center py-1 px-4 border rounded border-primary">
                        <div className="col">Panas</div>

                     </button>
                  </div>
               </div>

               <div className="flex gap-2 mt-6">
                  <div className="col">
                     <button className="px-4 py-2 rounded text-sm text-white bg-primary font-semibold">
                        Tambah Kekeranjang
                     </button>
                  </div>
                  <div className="col">
                     <button className="px-4 py-2 rounded text-sm text-primary ring-2 ring-primary font-semibold">
                        Beli langsung
                     </button>
                  </div>
               </div>
            </div>

         </div>
      </App>
   );
}