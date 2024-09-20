// import codeFooter from "../assets/images/cod-footer.png";
import spaceTwoFooter from "../assets/images/sbc2-footer.png";
import footerLogo from "../assets/images/main-nav-logo.png";
const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#389AF5]  to-[#3973EE]">
      {/* <div className="container mx-auto"> */}
      <footer className="footer text-white p-10  justify-start items-start md:justify-between ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3  ">
          <ul className="flex flex-col justify-between items-end">
            <li className="text-right me-10">
              <a href="#">من نحن</a>
            </li>
            <li className="w-[54%] me-0">
              وجهتك لمختلف المنتجات الرقمية والاشتراكات بضمان موثوق وسرعة عالية
              | مؤسسة رمز المميزة للتجارة : مُسجلة رسميًّا في المملكة العربية
              السعودية - حائل. تحمل رقم تسجيل - 3350152961
            </li>
          </ul>
          <ul className="flex flex-col justify-end items-end w-full gap-y-2">
            <li className="text-right">
              <a href="#">روابط تهمك</a>
            </li>
            <li className="ms-0">سياسة الخصوصية</li>
            <li className="ms-0">الاسترجاع والاستبدال</li>
            <li className="ms-0">الشروط والأحكام</li>
            <li className="ms-0">الدعم الفني</li>
            <li className="ms-0">نظام الولاء</li>
          </ul>

          <div className="">
            <ul className="flex flex-col justify-between items-end gap-y-5">
              <div className="absolute right-0">
                <div>
                  <img
                    className="block object-cover w-full h-full"
                    src={footerLogo}
                  />
                </div>
              </div>
              <div className="">
                <li className="text-right">
                  <a href="#">من نحن</a>
                </li>
                <li className=" text-right ">
                  وجهتك لمختلف المنتجات الرقمية والاشتراكات بضمان موثوق وسرعة
                  عالية | مؤسسة رمز المميزة للتجارة : مُسجلة رسميًّا في المملكة
                  العربية السعودية - حائل. تحمل رقم تسجيل - 3350152961
                </li>
              </div>
              <div className="flex items-center justify-center gap-x-5">
                <div>موثق في منصة الأعمال</div>
                <div className="w-14 h-14 bg-white rounded-lg">
                  <img
                    className="w-full h-full object-cover block"
                    src={spaceTwoFooter}
                    alt=""
                  />
                </div>
              </div>
            </ul>
          </div>
        </div>
      </footer>
      {/* </div> */}
    </div>
  );
};

export default Footer;
