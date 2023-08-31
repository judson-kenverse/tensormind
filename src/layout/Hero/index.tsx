import { ai } from "@/assets";

// type Props = {
//   setSelectedPage: (value: SelectedPage) => void;
// };

const Hero = () => {
  return (
    <>
      <section className=" w-5/6 mx-auto ">
        <div
          style={{
            // backgroundImage: `url(${wave})`,

            width: "100%",
          }}
          className="h-screen items-center  bg-no-repeat bg-contain bg-bottom  md:border-b md:border-[#1C1C1C]"
        >
          <div className="pt-32 md:pt-36">
            <div className="md:flex flex-row items-center ">
              <div className="md:basis-1/2 basis-full">
                <div className="flex">
                  <p className="text-white bg-[#ffffff1f] md:text-base text-xs px-4 py-2 flex start rounded-2xl mb-4 ">
                    true Generative AI
                  </p>
                </div>
                <div className=" sx:text-[36px] text-[36px] leading-[48px]  md:text-[90px] font-semibold md:leading-[7rem] mb-4 md:pl-4">
                  <span className=" hero-gradient-text">GenAI Stack</span>{" "}
                  <br />
                  <span className=" hero-gradient-text"> for Education</span>
                </div>
                <p className="text-gray-500 text-lg font-normal leading-7 md:pl-4 md:pr-14 max-w-xl">
                  The newest and most sophisticated platform from AI that can
                  educate people from all walks of life
                </p>
              </div>
              <div className="md:basis-1/2 basis-full flex">
                <div className="md:justify-end justify-center flex w-full md:mt-4 mt-32">
                  <img src={ai} width={"100%"} alt="hero image" />
                </div>
              </div>
            </div>
            {/* <div className="w-5/6 mx-auto items-end  border-b border-[#1C1C1C] bg-[#03040800] mt-[100px]">
              <div className="flex justify-between ">
                <div className="text-lg font-medium mb-2">© 2023</div>
                <div className="text-lg font-medium mb-2">scroll</div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
