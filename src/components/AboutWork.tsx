import aboutOurImage from "../assets/images/about-our-image.png";
const AboutWork = () => {
  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto">
          <div className="w-[95%] mx-auto">
            <img
              className="w-full h-full object-cover block rounded-3xl"
              src={aboutOurImage}
              alt="about-our-image"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutWork;
