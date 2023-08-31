import { SelectedPage } from "@/types/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { NavLink, Link } from "react-router-dom";
import { logo } from "@/assets";

// type Props = {
//   selectedPage: SelectedPage;
//   setSelectedPage: (value: SelectedPage) => void;
// };

const index = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);

  const flexBetween = "flex items-center justify-between";

  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");

  return (
    <>
      {/* border-b border-[#1C1C1C]  - this for header bottom  border  */}
      <header
        className={` ${flexBetween}  fixed top-0 z-30 w-full py-6  bg-[#030408]`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* logo */}
            <NavLink to="/">
              <img src={logo} width={"200px"} alt="logo" />
            </NavLink>
          </div>
          {/* navlinks */}
          {isAboveMediumScreens ? (
            <div className={`${flexBetween} w-full`}>
              <div className={`${flexBetween} gap-8 text-sm ml-auto`}>
                <Link
                  className="bg-white text-black rounded-full py-[.75rem] px-[1.5rem] font-medium"
                  to="/"
                >
                  Coming Soon
                </Link>
              </div>
            </div>
          ) : (
            <button
              className="rounded-full bg-white p-2"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <Bars3Icon className="h-6 w-6 text-black" />
            </button>
          )}
        </div>
        {/* MOBILE MENU MODAL */}
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 top-0 z-40 h-fit w-[300px] bg-gray-800 drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-6 text-black" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-12 flex flex-col gap-10 mb-10 text-2xl justify-start">
              <Link className="  text-white  font-medium" to="/">
                Coming Soon
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default index;
