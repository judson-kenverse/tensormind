import { about } from "@/assets";
import { SectionHeader } from "@/components/SectionHeader";
import useMediaQuery from "@/hooks/useMediaQuery";
import { styles } from "@/style";
import { Link } from "react-router-dom";

const About = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 900px)");
  return (
    <div className="mx-auto w-5/6 md:py-32 py-10">
      {isAboveMediumScreens ? (
        <>
          {" "}
          <div className="text-center">
            <SectionHeader
              title={"About"}
              // desc={
              //   "Lorem ipsum dolor sit amet consectetur adipisicing elit."
              // }
              // showLeftIcon={true}
            />
          </div>
          <div className="md:flex">
            <div className="flex md:basis-1/2 justify-center ">
              <div className="w-full">
                <img src={about} width={"100%"} alt="earth image" />
              </div>
            </div>{" "}
            <div className="md:basis-1/2 ">
              <div
                className="md:mr-14 md:pl-14 "
                style={{ whiteSpace: "pre-line" }}
              >
                <div className=" ">
                  <p className={`${styles.mainDescription}  mb-8`}>
                    Innovation meets education! Our groundbreaking startup is
                    dedicated to transforming the learning landscape through
                    three foundational pillars: content generation, content
                    delivery, and content engagement.
                  </p>
                  <p className={`${styles.mainDescription}  mb-8`}>
                    Harnessing the power of cutting-edge AI technology, we
                    empower educators and learners alike by seamlessly
                    generating tailored educational materials that cater to
                    individual learning styles. Our intuitive content delivery
                    system ensures that knowledge reaches students anytime,
                    anywhere, making learning a flexible and accessible
                    experience.
                  </p>

                  <p
                    className={`${styles.mainDescription}  mt-8 lg:pr-16 mb-10`}
                  >
                    But we don't stop there. Gen AI Education redefines
                    engagement, fostering an interactive learning environment
                    where students actively participate, collaborate, and
                    immerse themselves in their studies. Join us in
                    revolutionizing education, as we pave the way for a future
                    where learning is personalized, comprehensive, and truly
                    captivating.
                  </p>
                </div>
                {/* <div className="flex justify-center md:justify-start">
                  <Link className={"btn-white-rounded"} to="/network">
                    Read More
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full mb-12">
            <div
              className="md:mr-14 md:pl-14 "
              style={{ whiteSpace: "pre-line" }}
            >
              <div className="md:pr-24">
                <SectionHeader
                  title={"About"}
                  // desc={
                  //   "Lorem ipsum dolor sit amet consectetur adipisicing elit."
                  // }
                  // showLeftIcon={true}
                />
              </div>
              <div className=" ">
                <p className={`${styles.mainDescription}  mb-8`}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Numquam quis totam soluta at, beatae quisquam veritatis
                  repellat veniam sint ipsum quo ducimus laborum aliquid
                  cupiditate quasi, explicabo eveniet voluptas similique!
                </p>

                <p className={`${styles.mainDescription}  mt-8 lg:pr-16 mb-10`}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut,
                  saepe? Rem laboriosam voluptates odio totam, libero neque
                  natus est nulla perspiciatis temporibus harum quisquam ut
                  optio ipsa aspernatur vitae eveniet aut accusamus repudiandae
                  fuga ad cum incidunt? Ad, saepe illum!
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <Link className={"btn-white-rounded"} to="/network">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center mb-24">
            <div className="w-full">
              <img src={about} width={"100%"} alt="earth image" />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
