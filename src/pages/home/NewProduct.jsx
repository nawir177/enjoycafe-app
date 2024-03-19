import CardProduct from "../../components/card/cardProduct";

export default function NewProduct() {
   return (
      <main>
         <h1 className="text-lg font-semibold text-primary mb-4">MENU BARU</h1>
         <div className="flex max-w-sm overflow-x-scroll gap-2 items-center p-1">
            <div className="col">
               <CardProduct/>
            </div>
            <div className="col">
               <CardProduct/>
            </div>
            <div className="col">
               <CardProduct/>
            </div>
            <div className="col">
               <CardProduct/>
            </div>
            <div className="col">
               <CardProduct/>
            </div>
         </div>
      </main>
   );
}