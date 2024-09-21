// Import Swiper React components
import { Swiper as SwiperComponent, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../index.css";

// import required modules
// Pagination
import { Pagination } from "swiper/modules";
import imageSwiperOne from "../assets/images/swiper-1-img-1.jpg";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import SwiperCore from "swiper"; // Import the SwiperCore type for instance typing
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import Lucide icons
import { useState } from "react";

const FirstSectionSwiper = () => {
  // Use SwiperCore for swiperInstance type
  const [swiperInstance, setSwiperInstance] = useState<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => {
    if (swiperInstance) swiperInstance.slidePrev();
  };

  const handleNext = () => {
    if (swiperInstance) swiperInstance.slideNext();
  };

  return (
    <div className="bg-white py-10">
      <div className="container mx-auto ">
        {/* Custom Navigation Buttons */}
        <div className="flex justify-end gap-x-5 mt-4 mr-5">
          <button
            onClick={handlePrev}
            disabled={isBeginning}
            className={`${
              isBeginning ? "bg-gray-300" : "bg-[#335CF4]"
            } p-3 rounded-full text-white`}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={handleNext}
            disabled={isEnd}
            className={`${
              isEnd ? "bg-gray-300" : "bg-[#335CF4]"
            } p-3 rounded-full text-white`}
          >
            <ChevronRight />
          </button>
        </div>
        <SwiperComponent
          onSwiper={(swiper: SwiperCore) => setSwiperInstance(swiper)} // Type swiper parameter
          onSlideChange={(swiper: SwiperCore) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          slidesPerView={1}
          spaceBetween={10}
          // navigation={true}
          // Navigation
          modules={[Pagination]}
          //
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // 992: {
            //   slidesPerView: 4,
            //   spaceBetween: 40,
            // },
            // 1200: {
            //   slidesPerView: 3,
            //   spaceBetween: 40,
            // },
            1400: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className="mySwiper p-[30px]"
        >
          <SwiperSlide>
            <div className="card bg-transparent w-96 h-96 shadow-xl ">
              <figure>
                <img
                  src={imageSwiperOne}
                  alt="Shoes"
                  className="block object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end w-full">
                  <button className="bg-[#335CF4] py-2 w-full rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-transparent w-96 h-96 shadow-xl ">
              <figure>
                <img
                  src={imageSwiperOne}
                  alt="Shoes"
                  className="block object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end w-full">
                  <button className="bg-[#335CF4] py-2 w-full rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-transparent w-96 h-96 shadow-xl ">
              <figure>
                <img
                  src={imageSwiperOne}
                  alt="Shoes"
                  className="block object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end w-full">
                  <button className="bg-[#335CF4] py-2 w-full rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-transparent w-96 h-96 shadow-xl ">
              <figure>
                <img
                  src={imageSwiperOne}
                  alt="Shoes"
                  className="block object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end w-full">
                  <button className="bg-[#335CF4] py-2 w-full rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-transparent w-96 h-96 shadow-xl ">
              <figure>
                <img
                  src={imageSwiperOne}
                  alt="Shoes"
                  className="block object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end w-full">
                  <button className="bg-[#335CF4] py-2 w-full rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-transparent w-96 h-96 shadow-xl ">
              <figure>
                <img
                  src={imageSwiperOne}
                  alt="Shoes"
                  className="block object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end w-full">
                  <button className="bg-[#335CF4] py-2 w-full rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-transparent w-96 h-96 shadow-xl ">
              <figure>
                <img
                  src={imageSwiperOne}
                  alt="Shoes"
                  className="block object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end w-full">
                  <button className="bg-[#335CF4] py-2 w-full rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card bg-transparent w-96 h-96 shadow-xl ">
              <figure>
                <img
                  src={imageSwiperOne}
                  alt="Shoes"
                  className="block object-cover w-full h-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-white">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end w-full">
                  <button className="bg-[#335CF4] py-2 w-full rounded-full text-white">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </SwiperComponent>
      </div>
    </div>
  );
};

export default FirstSectionSwiper;
