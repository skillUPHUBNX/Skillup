import { Link } from "react-router-dom";

interface IProp {
  id: number;
  name: string;
  about: string;
  plan: string;
  link: string;
  feature: string[];
  tag?: string;
}

const PricingCard = ({ about, feature, id, link, name, plan, tag }: IProp) => {
  return (
    <div
      className={`w-[374px] ${
        id === 2 ? "h-[684px] bg-green-secondary text-white" : "h-[644px]"
      } rounded-lg overflow-hidden shadow-xl relative flex flex-col p-3 items-center  justify-around`}>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl lg:text-3xl font-semibold">{name}</h1>
        <p className="my-1 text-sm  text-center leading-6 w-3/4">{about}</p>
      </div>
      <h2 className="text-center text-2xl lg:text-3xl my-2 font-semibold z-40">
        {plan}
      </h2>
      {tag && (
        <button className="mx-auto bg-white/20 px-3 py-2 my-2 rounded-lg z-30">
          {tag}
        </button>
      )}
      {id === 2 && (
        <span className="w-[500px] absolute h-[500px] scale-150 rounded-[100%] bg-green-quaternary/50 top-[35%] "></span>
      )}
      <div
        className={`w-full min-h-[380px] flex flex-col justify-around items-center z-40 ${
          id === 2 ? "bg-white text-black" : "bg-green-light"
        } rounded-lg p-3`}>
        <div className="w-full px-4">
          {feature.map((feature, i) => (
            <div className="flex items-center justify-start gap-3 my-5" key={i}>
              <img src="/icons/success.svg" alt="successImage" />
              <p>{feature}</p>
            </div>
          ))}
        </div>
        <Link
          to={link}
          className={`w-[90%]  bottom-5 mx-auto ${
            id == 2 ? "bg-green-secondary" : "bg-white"
          } shadow-lg rounded-md`}>
          <button
            className={`w-full p-3 rounded-lg  ${
              id !== 2 ? "text-green-primary" : "text-white"
            } font-semibold`}>
            Subscribe
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PricingCard;
