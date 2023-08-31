import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/types/types";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  return (
    <AnchorLink
      className={
        isAboveMediumScreens ? "bg-white text-black rounded-full py-2 px-6" : ""
      }
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
