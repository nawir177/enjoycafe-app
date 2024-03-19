
import { Navbar } from "../components/navbar";
import { Children } from "react";
import NavbarButtom from "../components/navbarButtom";
export default function App({ title, children }) {
   document.title = title ? `${title}` : 'enjoy-cafe'
   return (
      <>
         <div className="max-w-sm mx-auto w-full bg-[#fff4f2] overflow-hidden min-h-screen">
            <Navbar />
            <div className="mt-16 px-2 mb-28">
               {children}
            </div>
            <NavbarButtom/>
         </div>
      </>
   );
}