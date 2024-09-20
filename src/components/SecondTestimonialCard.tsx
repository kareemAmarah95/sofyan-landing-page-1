import testimonialImage from "../assets/images/testimonial-avatar_male.png";
import testimonialImageTwo from "../assets/images/avatar_female.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import Stars from "./Stars";
const SecondTestimonialCard = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination]}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            992: {
              slidesPerView: 3,
              spaceBetween: 35,
            },
            1200: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="mySwiperTwo"
        >
          <SwiperSlide className="py-10">
            <div className="relative w-[400px] h-fit rounded-2xl bg-[#E3E9FE] p-2">
              <div className="w-20 h-20 absolute bottom-full translate-y-1/2 left-[40%]">
                <img
                  className="absolute w-full h-full rounded-full  block object-cover "
                  src={testimonialImage}
                  alt="alternative-image"
                />
              </div>
              <div className="pt-8">
                <h2 className="pt-5 text-center">person name</h2>
                <p className="py-5 text-center w-3/4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  perferendis reiciendis eum quidem laudantium harum
                  exercitationem a doloremque ...
                </p>
                {/* stars-icons */}
                <div className=" flex justify-center gap-x-2 items-center">
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <div className="relative w-[400px] h-fit rounded-2xl bg-[#E3E9FE] p-2">
              <div className="w-20 h-20 absolute bottom-full translate-y-1/2 left-[40%]">
                <img
                  className="absolute w-full h-full rounded-full  block object-cover "
                  src={testimonialImageTwo}
                  alt="alternative-image"
                />
              </div>
              <div className="pt-8">
                <h2 className="pt-5 text-center">person name</h2>
                <p className="py-5 text-center w-3/4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  perferendis reiciendis eum quidem laudantium harum
                  exercitationem a doloremque ...
                </p>
                <div className=" flex justify-center gap-x-2 items-center">
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <div className="relative w-[400px] h-fit rounded-2xl bg-[#E3E9FE] p-2">
              <div className="w-20 h-20 absolute bottom-full translate-y-1/2 left-[40%]">
                <img
                  className="absolute w-full h-full rounded-full  block object-cover "
                  src={testimonialImage}
                  alt="alternative-image"
                />
              </div>
              <div className="pt-8">
                <h2 className="pt-5 text-center">person name</h2>
                <p className="py-5 text-center w-3/4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  perferendis reiciendis eum quidem laudantium harum
                  exercitationem a doloremque ...
                </p>
                <div className=" flex justify-center gap-x-2 items-center">
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <div className="relative w-[400px] h-fit rounded-2xl bg-[#E3E9FE] p-2">
              <div className="w-20 h-20 absolute bottom-full translate-y-1/2 left-[40%]">
                <img
                  className="absolute w-full h-full rounded-full  block object-cover "
                  src={testimonialImage}
                  alt="alternative-image"
                />
              </div>
              <div className="pt-8">
                <h2 className="pt-5 text-center">person name</h2>
                <p className="py-5 text-center w-3/4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  perferendis reiciendis eum quidem laudantium harum
                  exercitationem a doloremque ...
                </p>
                <div className=" flex justify-center gap-x-2 items-center">
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <div className="relative w-[400px] h-fit rounded-2xl bg-[#E3E9FE] p-2">
              <div className="w-20 h-20 absolute bottom-full translate-y-1/2 left-[40%]">
                <img
                  className="absolute w-full h-full rounded-full  block object-cover "
                  src={testimonialImage}
                  alt="alternative-image"
                />
              </div>
              <div className="pt-8">
                <h2 className="pt-5 text-center">person name</h2>
                <p className="py-5 text-center w-3/4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  perferendis reiciendis eum quidem laudantium harum
                  exercitationem a doloremque ...
                </p>
                <div className=" flex justify-center gap-x-2 items-center">
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <div className="relative w-[400px] h-fit rounded-2xl bg-[#E3E9FE] p-2">
              <div className="w-20 h-20 absolute bottom-full translate-y-1/2 left-[40%]">
                <img
                  className="absolute w-full h-full rounded-full  block object-cover "
                  src={testimonialImage}
                  alt="alternative-image"
                />
              </div>
              <div className="pt-8">
                <h2 className="pt-5 text-center">person name</h2>
                <p className="py-5 text-center w-3/4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  perferendis reiciendis eum quidem laudantium harum
                  exercitationem a doloremque ...
                </p>
                <div className=" flex justify-center gap-x-2 items-center">
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <div className="relative w-[400px] h-fit rounded-2xl bg-[#E3E9FE] p-2">
              <div className="w-20 h-20 absolute bottom-full translate-y-1/2 left-[40%]">
                <img
                  className="absolute w-full h-full rounded-full  block object-cover "
                  src={testimonialImage}
                  alt="alternative-image"
                />
              </div>
              <div className="pt-8">
                <h2 className="pt-5 text-center">person name</h2>
                <p className="py-5 text-center w-3/4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  perferendis reiciendis eum quidem laudantium harum
                  exercitationem a doloremque ...
                </p>
                <div className=" flex justify-center gap-x-2 items-center">
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="py-10">
            <div className="relative w-[400px] h-fit rounded-2xl bg-[#E3E9FE] p-2">
              <div className="w-20 h-20 absolute bottom-full translate-y-1/2 left-[40%]">
                <img
                  className="absolute w-full h-full rounded-full  block object-cover "
                  src={testimonialImage}
                  alt="alternative-image"
                />
              </div>
              <div className="pt-8">
                <h2 className="pt-5 text-center">person name</h2>
                <p className="py-5 text-center w-3/4 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                  perferendis reiciendis eum quidem laudantium harum
                  exercitationem a doloremque ...
                </p>
                <div className=" flex justify-center gap-x-2 items-center">
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                  <Stars />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SecondTestimonialCard;
