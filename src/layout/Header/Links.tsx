// import ActionButton from "@/components/ActionButton";
import { SelectedPage } from "@/types/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isContactButton: boolean;
};

const Links = ({
  page,
  selectedPage,
  setSelectedPage,
  isContactButton,
}: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  return (
    <>
      {!isContactButton ? (
        <AnchorLink
          className={`${
            selectedPage === lowerCasePage ? "text-red-500" : ""
          } transition duration-500 hover:text-red-500 `}
          href={`#${lowerCasePage}`}
          onClick={() => setSelectedPage(lowerCasePage)}
        >
          {page}
        </AnchorLink>
      ) : (
        <div className="bg-white text-black rounded-full py-[.75rem] px-[1.5rem]">
          <Link to="#">Coming Soon</Link>
        </div>
      )}
    </>
  );
};

export default Links;
