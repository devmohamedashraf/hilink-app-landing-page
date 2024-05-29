"use client";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"></div>

      {/* Left Side */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <motion.div
          initial={{
            y: -15,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
        >
          <Image
            src="camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
          />
        </motion.div>
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, i) => (
                <Image
                  key={i}
                  src="star.svg"
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            190k
            <span className="regular-16 lg:regular-20 ml-2 underline cursor-pointer">
              Excellent Reviews
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 sm:flex-row">
          <Button title="Download App" variant="btn_green" />
          <Button
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      {/* Right Side */}
      <div className="relative flex flex-1 items-start">
        <div className="relative bg-green-90 w-[268px] flex flex-col gap-8 rounded-3xl px-7 py-8">
          <div className="flex flex-col ">
            <div className="flexBetween !items-start">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src="location.svg"
                    alt="location"
                    width={20}
                    height={20}
                  />
                  <span className="regular-16 text-gray-20">Location</span>
                </div>
                <span className="bold-20 text-white">Aguas Callentes</span>
              </div>
              <div className="cursor-pointer flexCenter hover:bg-gray-90 rounded-full w-8 h-8 transition-all">
                <Image src="close.svg" alt="share" width={20} height={20} />
              </div>
            </div>
          </div>
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Distance</p>
              <p className="bold-20 text-white">175.25 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.04 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
