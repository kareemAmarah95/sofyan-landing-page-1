// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../index.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import imageSwiperOne from "../assets/images/swiper-1-img-1.jpg";
import "swiper/css/navigation";
import "swiper/css/pagination";
// {
/*  //   <div className="card bg-base-100 w-96 h-96 shadow-xl border border-2">

  <figure>
<img
  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
  alt="Shoes"
  className="block object-cover w-full h-full"
/>
</figure>
<div className="card-body">
<h2 className="card-title text-white">Shoes!</h2>
<p>If a dog chews shoes whose shoes does he choose?</p>
<div className="card-actions justify-end w-full">
  <button className="btn btn-primary w-full rounded-lg">
    Buy Now
  </button>
</div>
</div>
</div> */
// }
const FirstSectionSwiper = () => {
  return (
    <div className="py-5 bg-white">
      <div className="container mx-auto ">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation, Pagination]}
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
            992: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1200: {},
            1400: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
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
        </Swiper>
      </div>
    </div>
  );
};

export default FirstSectionSwiper;
