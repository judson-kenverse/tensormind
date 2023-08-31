import useMediaQuery from "@/hooks/useMediaQuery";
import { styles } from "@/style";

type props = {
  title: string;
  desc?: string;
  showLeftIcon?: boolean;
  showTopIcon?: boolean;
  img?: string;
};

export const SectionHeader = ({
  title,
  desc,
  showLeftIcon,
  showTopIcon,
  img,
}: props) => {
  const isBelowMediumScreen = useMediaQuery("(max-width:900px)");
  return (
    <>
      {showTopIcon && (
        <div className="flex">
          <div className="red circle"></div>
          <div className="green circle"></div>
          <div className="yellow circle"></div>
        </div>
      )}
      <div className="  mb-12 relative">
        {showLeftIcon &&
          (!isBelowMediumScreen ? (
            <div className="absolute left-[-68px] top-[27px]">
              <img className="angle-shadow" src={img} alt="icons" />
            </div>
          ) : (
            ""
          ))}
        <div className={styles.mainTitle}>{title}</div>
        <p className={styles.mainDescription}>{desc}</p>
      </div>
    </>
  );
};

// this component is used for adding the heading , description and icon we can add the data by passing through props we can use this component for all the sections
