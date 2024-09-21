import imgOne from "../assets/images/about-us-img-1.jpg";
import imgTwo from "../assets/images/about-us-img-2.jpg";
import imgThree from "../assets/images/aboutimg-3.jpg";
import imgFour from "../assets/images/about-us-img-4.jpg";
import imgFive from "../assets/images/about-us-img-5.jpg";
import imgSix from "../assets/images/about-us-img-6.jpg";
import imgSeven from "../assets/images/aboutus-img-7.jpg";
import imgEight from "../assets/images/about-us-img-8.jpg";
import imgNine from "../assets/images/about-us-img-9.png";
import imgTen from "../assets/images/about-us-img10.png";
import imgEleven from "../assets/images/aboutus-img-11.jpg";
import imgTwelve from "../assets/images/about-us-img-12.jpg";

const GamesSection = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-x-0 gap-y-8 md:gap-y-10 ">
          <div className="flex justify-center items-center">
            <div className="game-box transition-all   w-full  border-none border-r-radius">
              <img
                src={imgOne}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="game-box transition-all  bg-red w-full md:w-full  border-none border-r-radius ">
              <img
                src={imgTwo}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="game-box transition-all bg-red w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgThree}
                className="w-full object-cover block h-auto  transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="game-box transition-all   w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgFour}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="game-box transition-all   w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgFive}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="game-box transition-all  w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgSix}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="game-box transition-all  w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgSeven}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="game-box transition-all  w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgEight}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="game-box transition-all  w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgNine}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="game-box transition-all  w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgTen}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="game-box transition-all  w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgEleven}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="game-box   w-full border-none border-r-radius md:max-w-xl">
              <img
                src={imgTwelve}
                className="w-full object-cover block h-auto transition-all hover:scale-75"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamesSection;
