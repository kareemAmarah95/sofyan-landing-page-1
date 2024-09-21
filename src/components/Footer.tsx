const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-[#389AF5]  to-[#3973EE]">
      <div className="container mx-auto">
        <footer className="footer relative z-10 text-white p-10 flex  justify-center items-center  w-full">
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-y-10  place-items-center w-full ">
            <ul className=" flex justify-center items-center w-full md:justify-end md:items-start  h-full ">
              <li className="text-center md:text-right me-10">
                <div className="w-10 h-10 flex flex-col items-center justify-center bg-[#93BBEF] rounded-md hover:text-blue-400">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="lucide lucide-tablet-smartphone"
                    viewBox="0 0 24 24"
                  >
                    <rect width="10" height="14" x="3" y="8" rx="2"></rect>
                    <path d="M5 4a2 2 0 012-2h12a2 2 0 012 2v16a2 2 0 01-2 2h-2.4M8 18h.01"></path>
                  </svg>
                </div>
              </li>
              <li className="text-center md:text-right me-10">
                <div className="w-10 h-10 flex flex-col items-center justify-center bg-[#93BBEF] rounded-md hover:text-blue-400">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="lucide lucide-mail"
                    viewBox="0 0 24 24"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="M22 7l-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"></path>
                  </svg>
                </div>
              </li>
              <li className="text-center md:text-right me-10">
                <div className="w-10 h-10 flex flex-col items-center justify-center bg-[#93BBEF] rounded-md hover:text-blue-400">
                  {/* icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-phone"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
              </li>
            </ul>
            <ul className=" flex flex-col justify-center items-center md:items-end w-full gap-y-2">
              <li className="text-right">
                <a href="#">روابط تهمك</a>
              </li>
              <li className="ms-0">سياسة الخصوصية</li>
              <li className="ms-0">الاسترجاع والاستبدال</li>
              <li className="ms-0">الشروط والأحكام</li>
              <li className="ms-0">الدعم الفني</li>
              <li className="ms-0">نظام الولاء</li>
            </ul>
            <ul className="  flex flex-col justify-center items-center md:items-end w-full gap-y-2">
              <li className="text-right">
                <a href="#">روابط تهمك</a>
              </li>
              <li className="ms-0">سياسة الخصوصية</li>
              <li className="ms-0">الاسترجاع والاستبدال</li>
              <li className="ms-0">الشروط والأحكام</li>
              <li className="ms-0">الدعم الفني</li>
              <li className="ms-0">نظام الولاء</li>
            </ul>
            <ul className=" flex flex-col justify-center items-center md:items-end w-full gap-y-2">
              <li className="text-right">
                <a href="#">روابط تهمك</a>
              </li>
              <li className="ms-0">سياسة الخصوصية</li>
              <li className="ms-0">الاسترجاع والاستبدال</li>
              <li className="ms-0">الشروط والأحكام</li>
              <li className="ms-0">الدعم الفني</li>
              <li className="ms-0">نظام الولاء</li>
            </ul>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
