const Footer = () => {
  return (
    <div className="bg-[#191B1E] ">
      <div className="md:flex text-center justify-center mx-auto w-5/6 py-6 items-center">
        <div>© 2023 Tensormind. All rights reserved</div>
        {/* <div className="md:flex  gap-4 md:gap-10 md:mx-10">
          {socialLinks.map((item, i) => (
            <div key={i}>
              <Link to={item.path} className="flex items-center">
                <img src={item.icon} alt={item.social} />
              </Link>
            </div>
          ))}
        </div> */}
      </div>
    </div>
    // <div className="bg-[#191B1E] ">
    //   <div className="mx-auto w-5/6 md:flex pt-24 border-b border-[#48628429] pb-10 ">
    //     <div className="basis-1/3 md:pr-16 pl-10  pt-4">
    //       <div className="mb-8">
    //         {" "}
    //         <img src={logo} alt="" />{" "}
    //       </div>
    //       <p className="font-lg font-normal leading-6 mb-4 pr-10">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing aebit elit.
    //       </p>

    //       <form>
    //         <label
    //           htmlFor="Subscribe"
    //           className="text-white text-2xl, font-bold leading-10 "
    //         >
    //           Subscribe
    //         </label>
    //         <div className="w-full flex mt-4 pr-12">
    //           <input
    //             type="email"
    //             className="bg-[#191B1E] border border-white py-1 w-full"
    //           />
    //           <button className="bg-white text-black py-1.5 px-4">
    //             Subscribe
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //     <div className="basis-2/3 md:flex">
    //       <div className="basis-1/3 pl-10 pt-4">
    //         <div className="text-2xl font-bold leading-10 mb-8 ">About</div>
    //         {aboutLinks.map((item, i) => (
    //           <div
    //             key={i}
    //             className="mb-6 text-white text-lg font-normal leading-6"
    //           >
    //             <Link to={item.path} className="">
    //               {item.link}
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //       <div className="basis-1/3 pl-10 pt-4">
    //         <div className="text-2xl font-bold leading-10 mb-8 ">Community</div>
    //         {communityLinks.map((item, i) => (
    //           <div
    //             key={i}
    //             className="mb-6 text-white text-lg font-normal leading-6"
    //           >
    //             <Link to={item.path} className="">
    //               {item.link}
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //       <div className="basis-1/3 pl-10 pt-4">
    //         <div className="text-2xl font-bold leading-10 mb-8 ">Social</div>
    //         {socialLinks.map((item, i) => (
    //           <div
    //             key={i}
    //             className="mb-6 text-white text-lg font-normal leading-6"
    //           >
    //             <Link to={item.path} className="flex items-center">
    //               <img src={item.icon} className="mr-2" alt={item.social} />
    //               {item.social}
    //             </Link>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    //   <div className="md:flex text-center justify-between mx-auto w-5/6 py-6">
    //     <div>© 2023 TurboStart. All rights reserved</div>
    //     <div className="md:flex  gap-4 md:gap-10 md:mx-10">
    //       <p>Privacy & Policy</p>
    //       <p>Terms & Condition</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Footer;
