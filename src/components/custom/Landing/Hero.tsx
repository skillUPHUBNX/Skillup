import ShinyButton from "../../magicui/shiny-button";
import HeroIllustration from "../../ui/HeroIllustration";
import Button from "../Button";

const Hero = () => {
  return (
    <>
      <div className="w-full min-h-screen relative overflow-hidden p-5">
        <span className="heroBg"></span>
        <div className="full flex flex-col  justify-center gap-5 items-end min-h-72  relative">
          <div className="w-full lg:w-[65%] mx-auto self-start">
            <h1 className="text-5xl mx-auto text-left lg:text-center font-semibold lg:font-extrabold mt-9 lg:tracking-wide lg:leading-15">
              The Ultimate Launchpad for Your Career-Guaranteed Success!
            </h1>
            <p className="text-left lg:text-center mt-4 lg:mt-3 text-xl">
              Where Your Future Begins: Unlock Guaranteed Career Success!
            </p>
          </div>
          <HeroIllustration />
          <div className="w-[70%] mx-auto  my-20 hidden lg:flex items-center justify-around gap-5">
            <div className="flex flex-col items-center text-center w-44 relative ml-5">
              <div className="mb-4">
                <img
                  src="/icons/illustration2.svg"
                  alt="Step 1 Illustration"
                  className="h-36"
                />
              </div>
              <p className="w-full text-left text-sm">
              Get real-world, practical skills by working on live projects, making you job-ready from the
very first day.
              </p>
            </div>
            <img
              src="/icons/illusArrowThree.svg"
              alt="arrowfive"
              className="w-14"
            />
            <div className="flex flex-col items-center text-center w-44 relative">
              <div className="mb-4 ">
                <img
                  src="/icons/illustration5.svg"
                  alt="Step 1 Illustration"
                  className="h-36"
                />
              </div>
              <p className="text-sm w-full text-left">
              Learn directly from industry experts who provide personalized feedback and mentorship
              to sharpen your skills
              </p>
            </div>
            <img
              src="/icons/illusArrowThree.svg"
              alt="arrowfive"
              className="w-14"
            />
            <div className="flex flex-col items-center text-center w-44 relative mr-16">
              <div className="mb-4 ">
                <img
                  src="/icons/illustration1.svg"
                  alt="Step 1 Illustration"
                  className="h-36 -z-10"
                />
              </div>
              <div className="text-sm w-full text-left">
                <p>
                Stand out with exclusive job referrals and guaranteed interview opportunities with top
                companies
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-2">
          <div className="flex items-center justify-between gap-2 my-4 lg:my-0">
            <Button text="Enroll Now" classname="py-3 px-8 lg:py-3 " />
            <ShinyButton className="border rounded-md">
              <span className="text-sm lg:text-base text-nowrap text-black font-semibold py-1">
                Get Free Career Evaluation
              </span>
            </ShinyButton>
          </div>
          <div className="flex gap-2 mx-auto mb-8">
            <img src="/icons/success.svg" alt="success" className="w-4" />
            <p className="text-[10px]  text-nowrap">
              100% Money Back Guarantee if you're not satisfied with the
              Evaluation
            </p>
          </div>
        </div>
        <img
          src="/icons/illusBg.svg"
          alt="background"
          className=" w-full object-contain lg:hidden"
        />
      </div>
    </>
  );
};

export default Hero;
