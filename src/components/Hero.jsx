import React from "react";
import heropng from "../assets/hero.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-primary text-white">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:gap-32">
        {/* brand info */}
        <div className="flex flex-col justify-end py-14 md:py-20">
          <div className="text-center md:text-left space-y-4 lg-max-w-[400px]">
            <h1 className="text-4xl uppercase font-semibold">Jordan 1 red</h1>
            <p>
              release date
              <br />
              10/8/2024
              <br />
              color way
              <br />
              red
            </p>
            {/* select size section */}
            <div className="max-w-[250px] space-y-3 mx-auto md:mx-0">
              <p>select size (IN)</p>
              <div className="flex gap-3 flex-wrap justify-center md:justify-start relative z-10">
                <p className="size-box">sm</p>
                <p className="size-box">md</p>
                <p className="size-box">lg</p>
                <p className="size-box">xl</p>
                <p className="size-box">8</p>
                <p className="size-box">9</p>
                <p className="size-box">10</p>
                <p className="size-box">11</p>
                <p className="size-box">12</p>
                <p className="size-box">13</p>
              </div>
            </div>
          </div>
        </div>
        {/* hero image section */}
        <div className="flex justify-center flex-col items-center relative gap-16">
          <img
            src={heropng}
            alt=""
            className="max-w-[400px] md:max-w-[500px] relative z-10 brightness-110 "
          />
          <div className="flex gap-4 items-center">
            <button className="h-8 w-8 bg-red-500 flex justify-center items-center p-3 rounded-full hover:scale-105 duration-200">
              <i class="bx bx-play"></i>
            </button>
            <p>PLAY VIDEO</p>
          </div>
        </div>
        {/* right side section */}
        <div className="flex flex-col justify-end items-center lg:px-8 py-16 ">
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            eveniet vitae possimus non fuga provident doloremque animi, atque,
            id numquam labore. Quia nihil doloribus voluptas hic expedita eaque
            blanditiis alias!
          </p>
          <div className="flex gap-8 pt-6 relative z-10">
            <div className=" text-2xl rounded-full border-white border p-2 hover:bg-white hover:text-primary duration-300 cursor-pointer">
              <FaArrowLeft />
            </div>
            <div className=" text-2xl rounded-full border-white border p-2 hover:bg-white hover:text-primary duration-300 cursor-pointer">
              <FaArrowRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
