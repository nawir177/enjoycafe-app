import { Link } from "react-router-dom";

export default function CardProduct() {
   return (
      <Link to={'/product/detail'}>
         <div className="p-2 rounded-xl shadow-sm w-32 h-48" >
            <div className="w-full bg-gray-200 h-28 rounded-md bg-cover" style={{ backgroundImage: `url(/image/product/1.png)` }}></div>
            <p className="font-semibold text-sm mt-2">Nama Produk ...</p>
            <p className="text-xs text-gray-500">Rp. xxxxx</p>
         </div>

      </Link>
   );
}