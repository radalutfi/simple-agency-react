// Services.js
import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates?",
      image: "/src/assets/icon/icon1.png",
    },
    {
      id: 2,
      title: "Membership Organisation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates?",
      image: "/src/assets/icon/icon2.png",
    },
    {
      id: 3,
      title: "Membership Organisation",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, voluptates?",
      image: "/src/assets/icon/icon3.png",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="service">
      <div className="text-center my-8">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">
          Our Clients
        </h2>
        <p className="text-neutralGrey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          voluptates?
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 mx-auto justify-center">
          <img
            src="/src/assets/logo4.png"
            alt=""
            className="h-32 w-32 justify-self-center"
          />
          <img
            src="/src/assets/logo5.png"
            alt=""
            className="h-32 w-32 justify-self-center"
          />
          <img
            src="/src/assets/logo6.png"
            alt=""
            className="h-32 w-32 justify-self-center"
          />
          <img
            src="/src/assets/logo7.png"
            alt=""
            className="h-32 w-32 justify-self-center"
          />
          <img
            src="/src/assets/logo8.png"
            alt=""
            className="h-32 w-32 justify-self-center"
          />
          <img
            src="/src/assets/logo9.png"
            alt=""
            className="h-32 w-32 justify-self-center"
          />
          <img
            src="/src/assets/logo10.png"
            alt=""
            className="h-32 w-32 justify-self-center"
          />
          <img
            src="/src/assets/logo11.png"
            alt=""
            className="h-32 w-32 justify-self-center"
          />
        </div>
      </div>

      <div className="mt-20 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-2">
          Our Clients is Our Jobdesk
        </h2>
        <p className="text-neutralGrey">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
          voluptates?
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer
                            hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center h-full"
          >
            <div>
              <div className="bg-[#E8F5E9] mb-4 h-14 mx-auto rounded-tl-3xl rounded-br-3xl flex items-center justify-center">
                <img
                  src={service.image}
                  alt={service.title}
                  className="-ml-5 h-16 w-16"
                />
              </div>
              <h4 className="text-2xl font-bold text-neutralDGray mb-2 px-2">
                {service.title}
              </h4>
              <p className="text-sm text-neutralGrey">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
