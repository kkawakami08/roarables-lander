import {
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import { useDetectClickOutside } from "react-detect-click-outside";

export default function NavBarPopOut({ visibility, handleClick, closePopUp }) {
  const hiddenClass =
    "hidden bg-brand-red text-white fixed top-0 right-0 z-20 w-3/4 h-screen  pb-8 pt-4 pr-10 rounded-l-full flex-col items-end gap-20";
  const visibleClass =
    " bg-brand-red text-white fixed right-0 top-0 z-20 w-3/4 h-screen  pb-10 pr-8 rounded-l-full flex flex-col items-end gap-20 pt-4";
  const navbarPopOutClass = visibility ? visibleClass : hiddenClass;
  const ref = useDetectClickOutside({ onTriggered: closePopUp });
  return (
    <div className={`${navbarPopOutClass}`} ref={ref}>
      <div
        className="bg-brand-red-dark rounded-full w-11 h-11 flex items-center justify-center drop-shadow-md"
        onClick={handleClick}
      >
        <IoClose size="1.5rem" color="white" className="" />
      </div>
      <div className="text-2xl flex flex-col gap-3 items-end">
        <p>BUY NOW</p>
        <p>PRODUCTS</p>
        <p>FIND A STORE</p>
        <p>WHOLESALE</p>
        <p>ABOUT US</p>
        <p>RECIPES</p>
      </div>
      <div className="flex gap-3 ">
        <AiOutlineTwitter color="white" size="30" />
        <AiFillFacebook color="white" size="30" />
        <AiFillInstagram color="white" size="30" />
      </div>
    </div>
  );
}
