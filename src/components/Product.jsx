import React from "react";
import login from "../assets/login.png";
import Tesla from "../assets/tesla.png";

const Product = () => {
  return (
    <div id="product">
      <div>
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
          <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex-shrink-0">
              <img src={login} alt="" className="h-96 w-96" />
            </div>
            <div className="md:w-3/5 mx-auto">
              <h2 className="text-4xl text-neutralDGray font-semibold mb-4 md:w-4/5">
                The Unseen of Spending 3 Years
              </h2>
              <p className="md:w-3/4 text-sm text-neutralDGray mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laborum, ut voluptate? Inventore aliquid neque ipsam aliquam
                quasi, autem impedit a? Quidem obcaecati veniam excepturi
                officiis facere adipisci velit sunt eos!
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
          </div>
        </div>
        <div className="w-full bg-neutralSilver py-16">
          <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2 px-4 lg:px-14">
              <img src={Tesla} alt="" className="h-96 w-96" />
            </div>
            <div className="md:w-2/3 mx-auto">
              <div>
                <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum non ad quisquam animi neque necessitatibus. Dolorem
                  cupiditate id, soluta laboriosam, vel, placeat quod
                  dignissimos autem reprehenderit numquam minus distinctio
                  sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laborum non ad quisquam animi neque necessitatibus. Dolorem
                  cupiditate id, soluta laboriosam, vel, placeat quod
                  dignissimos autem reprehenderit numquam minus distinctio
                  sequi.
                </p>
                <h5 className="text-brandPrimary text-xl font-semibold mb-2">
                  Tim Rada
                </h5>
                <p className="text-base text-neutralGrey">
                  Lorem ipsum dolor sit amet consectetur.
                </p>
                <div>
                  <div className="flex items-center gap-8 flex-wrap">
                    <img
                      src="/src/assets/logo4.png"
                      alt=""
                      className="h-12 w-12 justify-self-center"
                    />
                    <img
                      src="/src/assets/logo5.png"
                      alt=""
                      className="h-12 w-12 justify-self-center"
                    />
                    <img
                      src="/src/assets/logo6.png"
                      alt=""
                      className="h-12 w-12 justify-self-center"
                    />
                    <img
                      src="/src/assets/logo7.png"
                      alt=""
                      className="h-12 w-12 justify-self-center"
                    />
                    <img
                      src="/src/assets/logo8.png"
                      alt=""
                      className="h-12 w-12 justify-self-center"
                    />
                    <img
                      src="/src/assets/logo9.png"
                      alt=""
                      className="h-12 w-12 justify-self-center"
                    />
                    <img
                      src="/src/assets/logo10.png"
                      alt=""
                      className="h-12 w-12 justify-self-center"
                    />
                    <img
                      src="/src/assets/logo11.png"
                      alt=""
                      className="h-12 w-12 justify-self-center"
                    />
                    <div className="flex items-center gap-8">
                      <a
                        href=""
                        className="text-brandPrimary font-bold hover:text-neutral-700"
                      >
                        Message Customer
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
