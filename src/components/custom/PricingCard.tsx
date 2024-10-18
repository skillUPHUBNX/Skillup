import { useState, useEffect } from "react";
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
  const [countdown, setCountdown] = useState<string>("");

  useEffect(() => {
    // Set deadline to 3 days from now
    const deadline = new Date(1729228714370);
    deadline.setDate(deadline.getDate() + 3);

    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = deadline.getTime() - now.getTime();

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        setCountdown(
          `${days}d ${hours}h ${minutes}m ${seconds}s`
        );
      } else {
        setCountdown("Expired");
      }
    };

    // Call the function initially to set the correct countdown
    updateCountdown();

    // Update the countdown every second
    const intervalId = setInterval(updateCountdown, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className={`w-[374px] transition-all hover:scale-[1.02] ${
        id === 2 ? "h-[684px] bg-green-secondary text-white" : "h-[644px]"
      } rounded-lg overflow-hidden shadow-xl relative flex flex-col p-3 items-center  justify-around`}>
      <div className="flex flex-col items-center justify-center ">
        <h1 className="text-2xl lg:text-3xl font-semibold">{name}</h1>
        <p className="my-1 text-sm md:text-base text-center leading-6 px-2">
          {about}
        </p>
      </div>
      <h2 className="text-center text-2xl lg:text-3xl my-2 font-semibold z-40">
        {`${plan.split("-")[0]} `}
        <s
          className={`lowercase text-base text-black-100 font-normal ${
            id === 2 && "text-white"
          }`}>
          {plan.split("-")[1]}
        </s>
      </h2>
      {tag && (
        <button className="mx-auto bg-white/20 px-3 py-2 my-2 rounded-lg z-30">
          {tag}
        </button>
      )}
      {id === 2 && (
        <span className="w-[500px] absolute h-[500px] scale-150 rounded-[100%] bg-green-quaternary/50 top-[35%]"></span>
      )}
      <div
        className={`w-full min-h-[374px] flex flex-col justify-around items-center z-40 ${
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

        {/* Countdown Timer */}
        <div className="text-center mb-2">
          <p className="text-lg font-semibold">
            {countdown === "Expired" ? "Offer Expired" : `Expires in: ${countdown}`}
          </p>
        </div>

        <Link
          to={link}
          className={`w-[90%] cursor-pointer bottom-5 mx-auto ${
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
