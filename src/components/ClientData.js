import React from "react";

const ClientData = () => {
  return (
    <div className=" flex flex-wrap items-center justify-around p-4 w-full h-64 bg-transparent ">
      <div className="flex shadow-lg shadow-slate-400/50 rounded-3xl p-4  flex-col items-start  justify-center flex-wrap ">
        <h1 className="font-mono text-gray-50 text-2xl md:text-4xl ">123+</h1>
        <h1 className="font-mono text-1xl md:text-2xl text-slate-200 ">
          Total Projects
        </h1>
      </div>
      <div className="flex shadow-lg shadow-slate-400/50 rounded-3xl p-4  flex-col items-start justify-center flex-wrap ">
        <h1 className="font-mono text-gray-50 text-2xl md:text-4xl ">80+</h1>
        <h1 className="font-mono text-1xl md:text-2xl text-slate-200 ">
          Completed
        </h1>
      </div>
      <div className="flex shadow-lg shadow-slate-400/50 rounded-3xl p-4  flex-col items-start justify-center flex-wrap ">
        <h1 className="font-mono text-gray-50 text-2xl md:text-4xl ">50+</h1>
        <h1 className="font-mono text-1xl md:text-2xl text-slate-200 ">
          Clients
        </h1>
      </div>
      <div className="flex shadow-lg shadow-slate-400/50 rounded-3xl p-4 flex-col items-start justify-center flex-wrap ">
        <h1 className="font-mono text-gray-50 text-2xl md:text-4xl ">87%</h1>
        <h1 className="font-mono text-1xl md:text-2xl text-slate-200 ">
          5 Star Rating
        </h1>
      </div>
    </div>
  );
};

export default ClientData;
