import { Link } from "react-router-dom";
import ShinyButton from "../magicui/shiny-button";
import { useDispatch } from "react-redux";
import { showPopup } from "@/feature/popupSlice";

const Button = ({
  text,
  classname,
  link = "",
}: {
  text: string;
  classname?: string;
  link?: string;
}) => {
  const dispatch = useDispatch();

  const handleFormShow = function () {
    dispatch(showPopup());
  };
  return (
    <Link to={link}>
      <ShinyButton
        onClick={handleFormShow}
        className={`bg-green-secondary rounded-md flex items-center justify-center  ${classname}`}>
        <p className="flex text-nowrap text-white font-base lg:font-semibold items-center justify-center gap-2 ">
          {text} <img src="/icons/arrright.svg" alt="" />
        </p>
      </ShinyButton>
    </Link>
  );
};

export default Button;
