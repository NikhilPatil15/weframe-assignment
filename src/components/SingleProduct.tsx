import { CiHeart } from "react-icons/ci";
import Image from "next/image";
import Product from "../../public/productside.jpeg";

interface SingleProductProps {
  width: string;
  bigSize:boolean
}

export default function SingleProduct({width="330px",bigSize=false}:SingleProductProps) {

  return (
    <div className={` h-[438px] flex flex-col gap-[10px]`} style={{width:width}}>
      <div className="h-[362px] pt-[20px] px-[10px] pb-[8px] w-full flex flex-col items-center  bg-[#F9F7F5]">
        <div className="w-full flex items-center justify-between">
          <CiHeart className="text-[32px]" />
          <p className=" uppercase text-[#111928] font-geist text-[10px] leading-[15px] align-center bg-[#FFFFFF] py-[0.5px] px-[2.5px] rounded-[4px]">
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
      <div className="flex flex-col  px-[10px]">
        <div className="flex justify-between  text-[24px] font-playfair">
          <span>Title</span>

          <span className="font-geist">0<sup>€</sup></span> 
        </div>

        <div className={`flex justify-between items-center h-[26px] ${bigSize ? `w-[463px]` : ` w-[310px]`}`}>
          <div className="flex gap-[5px] items-baseline font-geist text-[#9c9c9c]">
            <span className="text-[14px] leadding-[17.5px]">0,35€/Pièce</span>
            <span className="text-[10px] leading-[12.5px]">· RÉF : VABGN5</span>
          </div>
          <div className="">
            <span className="text-[11px] leading-[13.75px] font-[500] rounded-[20px] text-[#546a7d] font-geist bg-[#f1f4f6] py-[6px] px-[8px] text-center ">20 pièces</span>
          </div>
        </div>
      </div>
    </div>
  );
}
