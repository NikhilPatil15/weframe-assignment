import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import Product from "../../public/productside.jpeg"

interface SingleProductProps{
    width:string
}



export default function SingleProduct({width = "330px"}:SingleProductProps) {
  return (
    <div className={`w-[${width}] h-[438px]  `}>
      <div className="h-[362px] pt-[20px] px-[10px] pb-[8px] w-full flex flex-col items-center  bg-[#F9F7F5]">
        <div className="w-full flex items-center justify-between">
          <CiHeart className="text-[32px]" />
          <p className=" uppercase text-[#111928] font-[Geist] text-[10px] leading-[15px] align-center bg-[#FFFFFF] py-[0.5px] px-[2.5px] rounded-[4px]">
            Art de la table
          </p>
        </div>
        {/* <Image src={Product} className='w-[224px] h-[224px] bg-transparent' alt="SingleProduct"/> */}
        <div className="flex items-center justify-center flex-1">
          <Image
            src={Product}
            alt="SingleProduct"
            className="w-[224px] h-[224px] bg-transparent  mix-blend-darken"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <span>Title</span>

        <span>0€</span>
      </div>
    </div>
  );
}
