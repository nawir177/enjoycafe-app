import useSWR from "swr";
import Banner from "../../components/banner";
import Category from "./category";
import NewProduct from "./NewProduct";
import Favorite from "./favorite";
import App from "../App";
const fetcher = (...args) => fetch(...args).then(res => res.json())
const apiUrl = process.env.REACT_APP_API_URL;
export default function Home() {
   // const url = apiUrl + '/home'
   // const { data, error, isLoading } = useSWR(url, fetcher)
   // if (error) return <div>failed to load</div>
   // if (isLoading) return <div>loading...</div>
   return (
      <main>
         <App title={'home'}>
            <div className="mb-6">
               {/* <Banner carosel={data.data.sliders} /> */}
            </div>
            <div className="mb-6">
               <Category />
            </div>
            <div className="mb-6">
               <NewProduct/>
            </div>
            <div className="mb-6">
               <Favorite/>
            </div>
            <div className="mb-6">
               <img src="/image/banner.png" alt="banner" />
            </div>
         </App>
      </main>
   );
}