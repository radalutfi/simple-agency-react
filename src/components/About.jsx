import React from "react";
import about from "../assets/logo12.png";
import { FaUsers } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { MdGroupWork, MdCreditCard } from "react-icons/md";

const About = () => {
  return (
    <div id="about">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 mt-64">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0">
            <img src={about} alt="" className="h-96 w-96" />
          </div>
          <div className="md:w-3/5 mx-auto">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
              The Unseen of Spending 3 Years
            </h2>
            <p className="md:w-3/4 text-sm text-neutralDGray mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
              ut voluptate? Inventore aliquid neque ipsam aliquam quasi, autem
              impedit a? Quidem obcaecati veniam excepturi officiis facere
              adipisci velit sunt eos!
            </p>
            <button className="btn-primary">Learn More</button>
          </div>
        </div>
      </div>
      <div className="w-full bg-neutralSilver py-16 mt-28">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-2/3">
              The Unseen of Spending <br />
              <span className="text-brandPrimary"> 3 Years</span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum,
              ut voluptate?
            </p>
          </div>
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="flex items-center gap-4">
              <FaUsers className="h-12 w-12 text-brandPrimary" />
              <div>
                <h4 className="text-2xl text-neutralDGray font-semibold">
                  1.234.567
                </h4>
                <p>Members</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <IoCalendarNumberOutline className="h-12 w-12 text-brandPrimary" />
              <div>
                <h4 className="text-2xl text-neutralDGray font-semibold">
                  1.234.567
                </h4>
                <p>Event</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdGroupWork className="w-12 h-12 text-brandPrimary" />
              <div>
                <h4 className="text-2xl text-neutralDGray font-semibold">
                  1.234.567
                </h4>
                <p>Club</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <MdCreditCard className="w-12 h-12 text-brandPrimary" />
              <div>
                <h4 className="text-2xl text-neutralDGray font-semibold">
                  1.234.567
                </h4>
                <p>Payment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
