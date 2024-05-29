"use client";
import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

export default function Features() {
  return (
    <section className="flexCenter max-container padding-container flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24 lg:mb-10">
      <div className="relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              variants={{
                visible: { opacity: 1, y: -5 },
                hidden: { opacity: 0, y: -35 },
              }}
            >
              {" "}
              <Image
                src="/camp.svg"
                alt="camp"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
              />
            </motion.div>
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 sm:grid-cols-2 lg:mt-20 lg:gap-20">
            {FEATURES.map((feature, index) => (
              <li
                className="flex w-full flex-1 flex-col items-start"
                key={feature.title}
              >
                <div className="rounded-full p-4 lg:p-5 bg-green-50">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={30}
                    height={30}
                  />
                </div>
                <h2 className="bold-20 lg:bold-32 mt-5 capitalize">
                  Real maps can be offline
                </h2>
                <p className="mt-5 regular-16 bg-white/80 text-gray-30 lg:mt-[30px] lg:bg-none">
                  We provide a solution for you to be able to use our
                  application when climbing, yes offline maps you can use at any
                  time there is no signal at the location
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
