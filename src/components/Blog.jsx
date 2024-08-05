import React from "react";
import { MdOutlineArrowRightAlt } from "react-icons/md";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
      image: "/src/assets/women.jpg",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
      image: "/src/assets/laptop1.jpg",
    },
    {
      id: 2,
      title:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae",
      image: "/src/assets/laptop2.jpg",
    },
  ];
  return (
    <div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12"
      id="testimonial"
    >
      <div className="text-center md:w-1/2 mx-auto">
        <h2 className="text-4xl text-neutralDGray font-semibold mb-4">
          This Is Marketing
        </h2>
        <p className="text-sm text-neutralGrey mb-8 md:w-3/4 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          nam voluptates ducimus ab ipsa, sint incidunt. Amet sed alias ipsum!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 items-center justify-between">
        {blogs.map((blog) => (
          <div key={blog.id} className="mx-auto relative mb-12 cursor-pointer">
            <img
              src={blog.image}
              alt=""
              className="h-96 w-96 object-cover rounded-tl-lg my-8 hover:scale-110 transition-all duration-700 ease-in-out"
            />
            <div className="absolute bottom-0 left-1/2 transform translate-y-1/2 -translate-x-1/2 w-11/12 mb-8">
              <div className="text-center px-4 py-8 bg-white shadow-lg rounded-md w-3/4 mx-auto">
                <h3 className="font-semibold mb-2 text-neutralGrey">
                  {blog.title}
                </h3>
                <div className="flex items-center gap-8 justify-center mt-4">
                  <a
                    href=""
                    className="text-brandPrimary font-bold hover:text-neutral-700 flex items-center"
                  >
                    Message Customer
                    <MdOutlineArrowRightAlt className="ml-2 mt-1.5 size-7" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
