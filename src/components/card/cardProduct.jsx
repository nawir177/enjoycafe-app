import { Link } from "react-router-dom";

export default function CardProduct() {
   return (
      <Link to={'/product/detail'}>
         <div className="p-1 rounded shadow-sm w-40 h-52 bg-white" >
            <div className="w-full h-28 rounded bg-cover" style={{ backgroundImage: `url(/image/product/1.png)` }}></div>
            <div className="px-1">
               <p className="font-semibold text-sm mt-2">Nama Produk ...</p>
               <p className="text-xs text-gray-500">Rp. xxxxx</p>
            </div>
         </div>

      </Link>
   );
}