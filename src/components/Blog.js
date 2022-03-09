import React from "react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1  gap-2 h-full w-full p-2  ">
      <h1 className="text-3xl text-center text-cyan-50 font-bold">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10  p-8 ">
        <div data-aos="fade-up">
          <img
            src="https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className=""
          />
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col justify-center align-middle text-cyan-50 md:p-8 p-3"
        >
          <h1 className="text-2xl hover:underline">HR Solution</h1>
          <p className="text-lg mt-4">
            Learn HTML in Hindi Free SUDO POWER YouTube Channel. Keep Learning,
            Keep Working hard!!!
          </p>
          <div className="mt-2">
            <button className="text-1xl text-cyan-50 px-3 hover:opacity-75 p-2 rounded-md bg-blue-500">
              Explore
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10  p-8 ">
        <div
          data-aos="fade-down"
          className="flex flex-col justify-center align-middle text-cyan-50 md:p-8 p-3"
        >
          <h1 className="text-2xl hover:underline">HR Solution</h1>
          <p className="text-lg mt-4">
            Learn HTML in Hindi Free SUDO POWER YouTube Channel. Keep Learning,
            Keep Working hard!!!
          </p>
          <div className="mt-2">
            <button className="text-1xl text-cyan-50 px-3 hover:opacity-75 p-2 rounded-md bg-blue-500">
              Explore
            </button>
          </div>
        </div>
        <div data-aos="fade-up">
          <img
            src="https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className=""
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10  p-8 ">
        <div data-aos="fade-up">
          <img
            src="https://images.unsplash.com/photo-1640622308238-70e5f22fe0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            className=""
          />
        </div>

        <div
          data-aos="fade-down"
          className="flex flex-col justify-center align-middle text-cyan-50 md:p-8 p-3"
        >
          <h1 className="text-2xl hover:underline">HR Solution</h1>
          <p className="text-lg mt-4">
            Learn HTML in Hindi Free SUDO POWER YouTube Channel. Keep Learning,
            Keep Working hard!!!
          </p>
          <div className="mt-2">
            <button className="text-1xl text-cyan-50 px-3 hover:opacity-75 p-2 rounded-md bg-blue-500">
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
