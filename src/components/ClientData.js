import React from "react";

const ClientData = () => {
  return (
    <div className=" flex flex-wrap items-center justify-around p-4 w-full h-64 bg-transparent">
      <div
        data-aos="fade-right"
        className="flex shadow-lg bg-secondry text-sky-100 cursor-pointer hover:text-gray-900 hover:bg-slate-200 animate-bounce shadow-slate-500/30 rounded-3xl p-4  flex-col items-start  justify-center flex-wrap "
      >
        <h1 className="font-mono  text-2xl  md:text-4xl ">123+</h1>
        <h1 className="font-mono text-1xl md:text-2xl  ">Total Projects</h1>
      </div>
      <div
        data-aos="fade-up"
        className="flex shadow-lg bg-secondry text-gray-100 cursor-pointer hover:text-gray-900 hover:bg-slate-200 animate-bounce shadow-slate-500/30 rounded-3xl p-4  flex-col items-start justify-center flex-wrap "
      >
        <h1 className="font-mono  text-2xl md:text-4xl ">80+</h1>
        <h1 className="font-mono text-1xl md:text-2xl  ">Completed</h1>
      </div>
      <div
        data-aos="fade-down"
        className="flex shadow-lg bg-secondry text-sky-100 cursor-pointer hover:text-gray-900 hover:bg-slate-200 animate-bounce shadow-slate-500/30 rounded-3xl p-4  flex-col items-start justify-center flex-wrap "
      >
        <h1 className="font-mono  text-2xl md:text-4xl ">50+</h1>
        <h1 className="font-mono text-1xl md:text-2xl  ">Clients</h1>
      </div>
      <div
        data-aos="fade-left"
        className="flex shadow-lg bg-secondry text-sky-100 cursor-pointer hover:text-gray-900 hover:bg-slate-200 animate-bounce shadow-slate-500/30 rounded-3xl p-4 flex-col items-start justify-center flex-wrap "
      >
        <h1 className="font-mono  text-2xl md:text-4xl ">87%</h1>
        <h1 className="font-mono text-1xl md:text-2xl  ">5 Star Rating</h1>
      </div>
    </div>
  );
};

export default ClientData;
