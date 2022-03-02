import React from "react";

const ClientData = () => {
  return (
    <div className=" flex flex-wrap items-center justify-around p-4 w-full h-64 bg-gray-200 ">
      <div className="flex flex-col items-start  justify-center flex-wrap ">
        <h1 className="font-mono text-cyan-600 text-3xl ">123+</h1>
        <h1 className="font-mono text-1xl ">Total Projects</h1>
      </div>
      <div className="flex flex-col items-start justify-center flex-wrap ">
        <h1 className="font-mono text-cyan-600 text-3xl ">80+</h1>
        <h1 className="font-mono text-1xl ">Completed</h1>
      </div>
      <div className="flex flex-col items-start justify-center flex-wrap ">
        <h1 className="font-mono text-cyan-600 text-3xl ">50+</h1>
        <h1 className="font-mono text-1xl ">Clients</h1>
      </div>
      <div className="flex flex-col items-start justify-center flex-wrap ">
        <h1 className="font-mono text-cyan-600 text-3xl ">87%</h1>
        <h1 className="font-mono text-1xl ">5 Star Rating</h1>
      </div>
    </div>
  );
};

export default ClientData;
