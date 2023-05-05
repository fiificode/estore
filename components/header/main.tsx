"use client"
import * as React from "react";
import Wrapper from "../wrapper/Wrapper";
import Image from "next/image";
import Logo from "../../public/logo.svg"
import Link from "next/link";
import Menu from "../menu/Menu";


import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";

const Header = () => {
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [showCategoryMenu, setShowCategoryMenu] = React.useState(false);
  const [show, setShow] = React.useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = React.useState(0);

  return (
    <div
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href={"/"}>
          <Image src={Logo} width={40} height={40} className="w-[40px] md:w-[60px]" alt="logo" />
        </Link>
        <Menu
          showCategoryMenu={showCategoryMenu}
          setShowCategoryMenu={setShowCategoryMenu}
        />

        <div className="flex items-center gap-2 text-black">
          {/* Icon  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <IoMdHeartEmpty className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">5</div>
          </div>
          {/* Icon ends */}
          {/* Icon  */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <BsCart className="text-[15px] md:text-[20px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">5</div>
          </div>
          {/* Icon ends */}

          <div className="w-8 md:w-12 h-12 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            {mobileMenu ? (
              <VscChromeClose className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
