import Image from "next/image";
import Navbar from "../components/Navbar";
import ProductDetails from "@/components/ProductDetails";
import SingleProduct from "@/components/SingleProduct";

export default function Home() {
  return (
    <div className="">
     <Navbar/>
     <ProductDetails/>
     <SingleProduct width=""/>
    </div>
  );
}
