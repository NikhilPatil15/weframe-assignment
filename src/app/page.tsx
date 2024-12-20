import Navbar from "../components/Navbar";
import ProductDetails from "@/components/ProductDetails";
import ProductCarousel from "@/components/ProductCarousel";
import ProductList from "@/components/ProductList";
import Service from "@/components/Service";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <ProductDetails />
      <ProductCarousel />
      <ProductList />
      <Service />
      <Footer />
    </div>
  );
}
