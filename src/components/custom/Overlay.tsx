import { useEffect, useState } from "react";
import { badges, personImages } from "../../constants/index";
import NumberTicker from "../magicui/number-ticker";
import ShinyButton from "../magicui/shiny-button";
import Batch from "./Batch";
import Button from "./Button";

const Overlay = ({ handleClose }: { handleClose: any }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  return (
    <>
      {
        <div className="fixed inset-0 flex items-center  justify-center z-50 ">
          <div
            className={`lg:w-[80vw] h-[90vh] lg:h-[80vh] bg-[#F0F6F0] relative overflow-hidden w-[90vw]
              ${isVisible ? "animate-fade" : "opacity-0 scale-0"}`}>
            <div className="relative w-full h-full lg:px-12 flex flex-col lg:flex-row items-center">
              <button className="absolute right-5 top-5" onClick={handleClose}>
                <img src="/icons/cross.svg" alt="crossIcons" />
              </button>
              <div className="w-full lg:w-1/2 flex flex-col items-start justify-start">
                <Batch classname="bg-red-primary m-4 p-2 mx-auto lg:mx-0 px-4 rounded-full flex items-center justify-around gap-2 w-max">
                  <span className="w-[9px] h-[9px] border-2 border-white rounded-full"></span>
                  <p className="text-white">Limited Batch Size</p>
                </Batch>
                <h1 className="font-bold text-2xl lg:text-[40px] leading-10 text-center lg:text-left">
                  Padh lo chaahe kahi se, Placement milegi yahi se!
                </h1>
                <p className="text-sm lg:text-lg text-black-100 p-2 my-1 lg:my-4 text-center lg:text-left">
                  Earn industry-recognized certificates with each workshop you
                  complete, showcasing your expertise and commitment to
                  professional excellence.
                </p>
                <div className="flex gap-2 items-center flex-row lg:items-start justify-start">
                  <div className="relative w-28 ml-3 lg:w-36 h-11 lg:h-auto">
                    {personImages.map((person) => (
                      <img
                        src={person.src}
                        className={person.className}
                        key={person.alt}
                        alt={person.alt}
                      />
                    ))}
                  </div>
                  <div className="flex flex-col  items-start justify-center">
                    <h1 className="font-semibold text-black-100 text-[14px] *:">
                      <NumberTicker value={4532} className="text-black-100" />+
                      Learners
                    </h1>
                    <p className="text-black-100 text-[14px]">
                      took their first step to succeed in their career{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between mx-auto my-4 gap-1 ">
                  <Button
                    text="Enroll Now"
                    classname="py-3 lg:px-14 lg:py-3 m-0"
                  />
                  <ShinyButton className="border rounded-md">
                    <p className="text-[9px] text-nowrap text-black font-semibold py-1">
                      Get Free Career Evaluation
                    </p>
                  </ShinyButton>
                </div>
                <div className="mx-auto flex items-center justify-between flex-wrap gap-1 w-[90%] lg:my-3">
                  {badges.map((badge) => (
                    <div key={badge.label} className="flex gap-1">
                      <img src={badge.icon} alt={badge.icon} />{" "}
                      <p className="text-green-three font-semibold text-xs ">
                        {badge.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2 h-full relative flex overflow-hidden">
                <img
                  src="/social/person1.svg"
                  alt="person1"
                  className="absolute bottom-0 object-cover h-[70%]  lg:h-[442px]"
                />
                <img
                  src="/social/person3.svg"
                  alt="person1"
                  className="absolute left-1/2 z-10 bottom-0 -translate-x-1/2 object-cover  h-[80%]  lg:h-[485px]"
                />
                <img
                  src="/social/person2.svg"
                  alt="person1"
                  className="absolute right-0 bottom-0 object-cover  h-[70%]  lg:h-[442px]"
                />
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default Overlay;
