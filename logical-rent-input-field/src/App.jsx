import { useState } from "react";
import { CirclePlus, Trash2 } from "lucide-react";

export default function App() {
  return (
    <div className="flex max-w bg-purple-100 justify-center items-center h-screen mx-auto">
      <div className="flex max-w-7xl bg-red-100 max-h-[50rem] flex-col items-start p-10">
        <div>
          <h1 className="text-4xl font-medium text-[#16CABF]">Rent</h1>
        </div>
        <div className="flex gap-12 items-center mt-4">
          <div className="flex gap-4 items-center ">
            <div>
              <h3 className="mb-2 text-xl font-medium text-[#16CABF]">
                Single Room Rent
              </h3>
              <input
                type="number"
                className="border-2 border-gray-300 rounded-lg p-2 w-80"
              />
            </div>
            <div className="flex items-center mt-[2.4rem]">
              <button className=" bg-[#16CABF] rounded-lg p-2 ml-2">
                <CirclePlus color="#fff" size={24} />
              </button>
              <button className=" bg-[#E76F51] rounded-lg p-2 ml-2">
                <Trash2 color="#fff" size={24} />
              </button>
            </div>
          </div>
          <div className="flex gap-4 items-center ">
            <div>
              <h3 className="mb-2 text-xl font-medium text-[#16CABF]">
                Double Room Rent
              </h3>
              <input
                type="number"
                className="border-2 border-gray-300 rounded-lg p-2 w-80"
              />
            </div>
            <div className="flex items-center mt-[2.4rem]">
              <button className=" bg-[#16CABF] rounded-lg p-2 ml-2">
                <CirclePlus color="#fff" size={24} />
              </button>
              <button className=" bg-[#E76F51] rounded-lg p-2 ml-2">
                <Trash2 color="#fff" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
