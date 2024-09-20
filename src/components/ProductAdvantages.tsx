import productAdvOne from "../assets/images/productAdv.gif";
import productAdvTwo from "../assets/images/productAdv2.gif";
import productAdvThree from "../assets/images/productAdv3.gif";
const ProductAdvantages = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto bg-white">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10">
          <div className="box flex flex-col items-center justify-center ">
            <div className="w-[150px] h-[150px]">
              <img
                src={productAdvThree}
                className="w-full object-cover block h-full"
                alt=""
              />
            </div>
            <h2 className="font-bold text-black">خيارات واسعة</h2>
            <p>جميع رغباتك متوفرة</p>
          </div>

          <div className="box flex flex-col items-center justify-center">
            <div className="w-[150px] h-[150px]">
              <img
                src={productAdvTwo}
                className="w-full object-cover block h-full"
                alt=""
              />
            </div>
            <h2 className="font-bold text-black">وصول فوري</h2>
            <p>تفعيل خلال ثواني</p>
          </div>
          <div className="box flex flex-col items-center justify-center">
            <div className="w-[150px] h-[150px]">
              <img
                src={productAdvOne}
                className="w-full object-cover block h-full"
                alt=""
              />
            </div>
            <h2 className="font-bold text-black">كفاءة عالية</h2>
            <p>برامج أصلية و مضمونة</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductAdvantages;
