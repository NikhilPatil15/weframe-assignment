import SingleProduct from "./SingleProduct";

export default function ProductList() {
  return (
    <div className="flex items-center justify-center mt-[80px] px-4 ">
      <div className="flex flex-col w-full max-w-[1470px] gap-[16px]">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter font-[500] text-[24px] sm:text-[35px] leading-[32px] sm:leading-[43px] text-[#393939] mb-4 sm:mb-0">
            Ces produits pourraient vous intéresser
          </p>
          <p className="font-inter text-[14px] sm:text-[16px] leading-[18px] sm:leading-[20px] text-[#393939] border-b border-[#393939] cursor-pointer">
            Voir toute la collection
          </p>
        </div>

        {/* Product List Section */}
        <div className="relative flex flex-col gap-8 md:flex-row overflow-x-auto md:gap-[10px] flex-nowrap ">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex-shrink-0"
            >
              {/* Dynamically passing width prop */}
              <SingleProduct
                bigSize={true}
                width=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
