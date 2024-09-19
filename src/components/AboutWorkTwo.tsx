import aboutOurImageTwo from "../assets/images/aboutOurImageTwo.png";
const AboutWork = () => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="w-[95%] mx-auto">
            <img
              className="w-full h-full object-cover block rounded-3xl"
              src={aboutOurImageTwo}
              alt="about-our-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWork;
