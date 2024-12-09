
import Image from "next/image";
import trolley from "../../public/trolley.png";
import truck from "../../public/truck.png";
import cart from "../../public/cart.png";
import dishes from "../../public/dishes.png";
import sofa from "../../public/image.png";

const list = [
  {
    title: "Livraison & Reprise",
    description: "Selon vos besoins",
    image: trolley,
  },
  {
    title: "Nettoyage",
    description: "Selon vos besoins",
    image: dishes,
  },
  {
    title: "Commande Illimitée",
    description: "Tout est possible",
    image: cart,
  },
  {
    title: "Transport & Enlèvement",
    description: "On s'occupe de tout.",
    image: truck,
  },
];

export default function Service() {
  return (
    <div className="w-full bg-gradient-to-b from-[#fff3f9] to-[#ffffff] py-[50px] mt-[50px] mb-[50px]">
      {/* Title Section */}
      <div className="text-center mb-[30px] px-4">
        <h2 className="text-[22px] md:text-[28px] font-geist text-[#393939]">
          On s'occupe de <span className="text-[#00d6d6]">tout</span>
        </h2>
        <p className="text-[#9c9c9c] text-[14px] md:text-[16px] leading-[20px] mt-[10px]">
          Office ipsum you must be muted. It meeting commitment busy pain.
        </p>
      </div>

      {/* Icons Section */}
      <div className="flex  flex-col md:flex-row flex-wrap justify-center w-full gap-[30px] md:gap-[70px] py-[10px] items-center mb-[50px] px-4">
        {list.map((value, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center relative max-w-[200px]"
          >
            {index !== list.length - 1 && (
              <div className="hidden md:block absolute left-[85%] top-[50%] translate-y-[-50%] w-[105px] h-[1px] bg-[#9c9c9c]"></div>
            )}
            <Image
              src={value.image}
              alt={value.title}
              className="mix-blend-darken w-[80px] md:w-[100px]"
            />
            <h3 className="text-[14px] md:text-[16px] font-geist mt-[10px]">
              {value.title}
            </h3>
            <p className="text-[#9c9c9c] text-[12px] md:text-[14px]">
              {value.description}
            </p>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-[20px] px-6">
        {/* Image Section */}
        <div className="w-full md:w-[50%] h-[250px] md:h-[300px]">
          <Image
            src={sofa}
            alt="sofa"
            className="rounded-[20px] w-full h-full object-cover"
          />
        </div>

        {/* Text and Input Section */}
        <div className="flex flex-col  items-start bg-[#fff1f5] rounded-[20px] w-full md:w-[50%] p-[10px]  md:p-[30px] h-auto md:h-[300px]">
          <h3 className="text-[24px] md:text-[30px] leading-[1.5] font-poppins font-[500] mb-[10px]">
            S’inscrire & économiser{" "}
            <span className="text-[#00d6d6]">10%</span>
          </h3>
          <p className="text-[#bda2b0] text-[12px] md:text-[14px] leading-[1.6] font-geist mb-[20px]">
            Office ipsum you must be muted. Synergize helicopter prioritize
            anyway job due harvest most opportunity didn’t. Yet busy any meeting
            shark light marginalised 4-blocker message. Productize corporate nail
            caught synergy highlights lunch. Company another pushback items dear
            or any.
          </p>
          <div className="flex flex-wrap items-center w-full gap-[10px]">
            <input
              type="email"
              placeholder="john@doe.com"
              className="flex-1 px-[16px] py-[14px] text-[14px] border border-[#d3d3d3] rounded-[5px] outline-none focus:border-[#00d6d6]"
            />
            <button className="bg-[#00d6d6] text-white text-[14px] px-[16px] py-[14px] rounded-md hover:bg-[#00c4c4]">
              S&apos;INSCRIRE →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
