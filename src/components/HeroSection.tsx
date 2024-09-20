import heroImage from "../assets/images/hero-img-original.png";
const HeroSection = () => {
  return (
    <>
      <div className="h-[50vh] md:h-[100vh] bg-white w-full relative ">
        <div className=" bg-[#335CF4] z-30 w-full h-full md:h-full absolute border-rounded-bottom-radius">
          <img
            src={heroImage}
            alt="hero-image"
            className="block w-full h-full md:w-auto object-cover mx-auto absolute bottom-0 right-[50%] translate-x-1/2 border-rounded-bottom-radius"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
