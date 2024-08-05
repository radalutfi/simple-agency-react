import React from "react";
import { Carousel } from "flowbite-react";
import welcome from "../assets/welcome.png";
import Logo2 from "../assets/logo2.png";
import Logo3 from "../assets/logo3.png";

const Home = () => {
  return (
    <div className="" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
        <Carousel className="w-full mx-auto rounded-lg overflow-hidden">
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img
                src={welcome}
                alt="Welcome"
                className="max-w-full h-auto md:max-w-md lg:max-w-lg rounded-tl-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Lesson Another
                <br />
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  From 1 Years
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum?
              </p>
              <button className="btn-primary"> Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img
                src={Logo2}
                alt="Welcome"
                className="max-w-full h-auto md:max-w-md lg:max-w-lg rounded-tl-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Learn More
                <br />
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  From 5 Month
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum?
              </p>
              <button className="btn-primary"> Register</button>
            </div>
          </div>
          <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img
                src={Logo3}
                alt="Welcome"
                className="max-w-full h-auto md:max-w-md lg:max-w-lg rounded-tl-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h1 className="text-5xl font-semibold mb-4 text-neutralDGray md:w-3/4 leading-snug">
                Lesson Another
                <br />
                <span className="text-brandPrimary leading-snug">
                  {" "}
                  Update Lesson
                </span>
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum?
              </p>
              <button className="btn-primary"> Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
