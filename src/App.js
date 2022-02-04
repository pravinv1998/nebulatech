import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      {/* <h1 className=" capitalize border-2 rounded-md text-blue-900 text-5xl font-medium tracking-widest text-center">
        this is tailwind css
      </h1>
      <h2 className="capitalize text-emerald-300 text-4xl text-center hover:underline ">
        pravin vargad
      </h2>
      <div className="">
        <a
          className=" capitalize text-3xl border-2 p-2 rounded-lg text-sky-500 hover:underline hover:text-red-400 "
          href="https://pravinvargad.web.app"
        >
          mysite
        </a>
      </div> */}
      <div className=" p-9">
        <h1 className="text-green-100 text-3xl mb-2 "> Hi this is code </h1>
        <p className="text-green-100 text-2xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
          dignissimos vero tempora fugiat, asperiores culpa ex reprehenderit
          sint? Velit a quis ad aliquid perspiciatis inventore magni laudantium
          facilis cumque recusandae.
        </p>
      </div>

      <div className="flex  ">
        {isOpen ? <div className="left">sidebar</div> : null}
        <div className="right">
          right
          <svg
            onClick={() => setIsOpen(!isOpen)}
            className="w-10 h-10 fixed border-2 rounded p-1"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default App;
