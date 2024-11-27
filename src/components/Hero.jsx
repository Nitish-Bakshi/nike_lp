import React from "react";
import heropng from "../assets/hero.png";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "motion/react";

const slideup = (delay) => ({
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: delay,
    },
  },
});

const Hero = () => {
  return (
    <section className="bg-primary text-white relative">
      <div className="container grid grid-cols-1 md:grid-cols-3 min-h-[700px] md:gap-32">
        {/* brand info */}
        <div className="flex flex-col justify-end py-14 md:py-20">
          <div className="text-center md:text-left space-y-4 lg-max-w-[400px]">
            <motion.h1
              variants={slideup(0.2)}
              initial="hidden"
              animate="show"
              className="text-4xl uppercase font-semibold"
            >
              Jordan 1 red
            </motion.h1>
            <motion.p variants={slideup(0.4)} initial="hidden" animate="show">
              release date
              <br />
              10/8/2024
              <br />
              color way
              <br />
              red
            </motion.p>
            {/* select size section */}
            <div className="max-w-[250px] space-y-3 mx-auto md:mx-0">
              <motion.p variants={slideup(0.6)} initial="hidden" animate="show">
                select size (IN)
              </motion.p>
              <motion.div
                variants={slideup(0.8)}
                initial="hidden"
                animate="show"
                className="flex gap-3 flex-wrap justify-center md:justify-start relative z-10"
              >
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
              </motion.div>
            </div>
          </div>
        </div>
        {/* hero image section */}
        <div className="flex justify-center flex-col items-center relative gap-16">
          <motion.img
            initial={{ opacity: 0, x: 100, rotate: 20 }}
            whileInView={{
              opacity: 1,
              x: 0,
              rotate: 0,
            }}
            transition={{ duration: 0.6, delay: 0.4 }}
            src={heropng}
            alt=""
            className="max-w-[400px] md:max-w-[500px] relative z-10 brightness-110 "
          />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex gap-4 items-center"
          >
            <button className="h-8 w-8 bg-red-500 flex justify-center items-center p-3 rounded-full hover:scale-105 duration-200">
              <i class="bx bx-play"></i>
            </button>
            <p>PLAY VIDEO</p>
          </motion.div>
        </div>
        {/* right side section */}
        <div className="flex flex-col justify-end items-center lg:px-8 py-16 ">
          <motion.p
            variants={slideup(0.8)}
            initial="hidden"
            animate="show"
            className="text-sm"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            eveniet vitae possimus non fuga provident doloremque animi, atque,
            id numquam labore. Quia nihil doloribus voluptas hic expedita eaque
            blanditiis alias!
          </motion.p>
          <div className="flex gap-8 pt-6 relative z-10">
            <motion.div
              variants={slideup(1)}
              initial="hidden"
              animate="show"
              className=" text-2xl rounded-full border-white border p-2 hover:bg-white hover:text-primary duration-300 cursor-pointer"
            >
              <FaArrowLeft />
            </motion.div>
            <motion.div
              variants={slideup(1)}
              initial="hidden"
              animate="show"
              className=" text-2xl rounded-full border-white border p-2 hover:bg-white hover:text-primary duration-300 cursor-pointer"
            >
              <FaArrowRight />
            </motion.div>
          </div>
        </div>
      </div>
      {/* bg text with lightining */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0 }}
        className="text-center text-[240px] md:text-[220] lg:text-[250px] xl:text-[350px] font-bold font-anton absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-[2]"
      >
        NIKE
      </motion.p>
      <div className="h-[500px] w-[500px] bg-white/45 blur-3xl absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]"></div>
    </section>
  );
};

export default Hero;
