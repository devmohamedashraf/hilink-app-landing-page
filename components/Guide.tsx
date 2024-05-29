"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Guide() {
  return (
    <section className="flexCenter flex-col padding-container max-container">
      <div className=" w-full pb-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: -30 },
          }}
        >
          <Image src="/camp.svg" alt="camp" width={50} height={50} />
        </motion.div>
        <span className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          We are here for you
        </span>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>
      <div className="relative flexCenter w-full">
        <Image
          src="/boat.png"
          alt="boat"
          width={1400}
          height={100}
          className="sm:rounded-xl xl:rounded-5xl object-cover object-center w-full"
        />
        <div className="absolute flex px-7 gap-3 py-8 rounded-3xl shadow-md bg-white md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter"
            width={16}
            height={160}
            className="h-full w-auto"
          />
          <div className="flexBetween flex-col">
            <div className="flex w-full flex-col">
              <div className="flexBetween w-full">
                <span className="regular-16 text-gray-20 ">Destination</span>
                <span className="text-green-300 bold-16">48 min</span>
              </div>
              <span className="bold-20 mt-2">Aguas Collection</span>
            </div>
            <div className="flex w-full flex-col">
              <span className="regular-16 text-gray-20 ">Start Track</span>
              <span className="bold-20 mt-2">Wonorejo Pasuruan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
