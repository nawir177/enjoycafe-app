import React from "react";
import { Link } from "react-router-dom";
export default function Category() {
   return (
      <main>
         <div className="p-4 bg-white shadow-sm rounded-xl">
            <h1 className="text-md font-semibold text-primary mb-4">Pilih Kategori menu</h1>
            <div className="flex justify-evenly">
               <div className="col">
                  <Link to={'/product/category/food'}>
                  <button className="p-2 rounded-xl w-14 h-14 bg-white shadow-sm shadow-orange-100 flex items-center justify-center border border-orange-200">
                     <img src="/icon/food.png" alt="" />
                  </button>
                  </Link>
               </div>
               <div className="col">
                  <Link to={'/product/category/drink'}>
                  <button className="p-2 rounded-xl w-14 h-14 bg-white shadow-sm shadow-orange-100 flex items-center justify-center border border-orange-200">
                     <img src="/icon/drink.png" alt="" />
                  </button>
                  </Link>
               </div>
               <div className="col">
                  <Link to={'/product/category/snack'}>
                  <button className="p-2 rounded-xl w-14 h-14 bg-white shadow-sm shadow-orange-100 flex items-center justify-center border border-orange-200">
                     <img src="/icon/snack.png" alt="" />
                  </button>
                  </Link>
               </div>
               <div className="col">
                  <Link to={'/product/category/mie'}>
                  <button className="p-2 rounded-xl w-14 h-14 bg-white shadow-sm shadow-orange-100 flex items-center justify-center border border-orange-200">
                     <img src="/icon/mie.png" alt="" />
                  </button>
                  </Link>
               </div>
            </div>
         </div>
      </main>
   );
}