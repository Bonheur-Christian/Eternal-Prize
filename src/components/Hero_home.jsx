import React from "react";
import { IoMdCompass } from "react-icons/io";

function Hero() {
  return (
    <div className="flex justify-evenly w-[90%] mx-auto gap-12 py-24">
      <div className="w-[35%] space-y-24">
        <h1 className="font-Quicksand text-5xl font-semibold">
          Revolutionizing Shared{" "}
          <span className="block py-4">
            <img
              src="./icons/face.svg"
              alt="Face like emoji"
              className="inline me-4"
            />
            Property Ownership.
          </span>
        </h1>
        <p className="text-lg pe-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, qui sed
          nam consectetur nobis, deserunt autem illo minima ex corporis vero
          eveniet, quisquam soluta accusamus. Est veritatis iusto vero in.
        </p>
        <img
          src="./images/mountains.png"
          alt="Mountains"
          width={500}
          height={500}
        />
      </div>

      <div className="w-[20%] space-y-20">
        <img src="./images/users.png" alt="Users" width={100} height={100} />
        <h2 className="text-5xl font-Quicksand font-semibold ms-[-10rem]">
          Experience
        </h2>
        <div className="shadow-xl shadow-gray-[#222222] px-6 py-4 space-y-4 rounded-xl">
          <div className="flex justify-between">
            <p className="text-xl w-[60%] font-Quicksand font-semibold">
              Start my virtual tour now
            </p>
            <IoMdCompass size={40} className="compass hover:scale-110" />
          </div>
          <img src="./images/space.png" alt="" />
        </div>
        <div className="space-y-6 px-4 py-4  border-2 border-gray-200 rounded-xl">
          <img src="./images/users.png" alt="" width={100} height={100} />
          <h3 className="text-5xl font-Quicksand font-semibold">7850+</h3>
          <p className="text-md w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, ducimus.
          </p>
        </div>
      </div>
      <div className="w-[25%] space-y-20">
        <img src="./images/building.png" alt="" />
        <div className="flex gap-6 ite border-4 border-gray-200/60 rounded-xl shadow-lg shadow-gray-[#222222] w-[100%] h-[16%] py-2 px-4">
          <img
            src="./images/building.png"
            alt=""
            className=" w-1/4 rounded-xl"
          />
          <div className="py-4 space-y-2">
            <h4 className="text-xl font-Quicksand font-semibold">Play Video</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Doloremque nihil.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
