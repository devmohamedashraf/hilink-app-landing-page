"use client";
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

type CampSiteProps = {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  pepoleJoined?: string;
};

function CampSite({
  backgroundImage,
  title,
  subtitle,
  pepoleJoined,
}: CampSiteProps) {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-5xl 2xl:rounded-5xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <span className="regular-14 text-white">{subtitle}</span>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <motion.span
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 30 },
            }}
            className="flex -space-x-4 overflow-hidden"
          >
            {PEOPLE_URL.map((url, index) => (
              <Image
                key={url}
                src={url}
                alt="people"
                width={40}
                height={40}
                className="rounded-full inline-block"
              />
            ))}
          </motion.span>
          <span className="bold-16 md:bold-20 text-white">{pepoleJoined}</span>
        </div>
      </div>
    </div>
  );
}

export default function Camp() {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20 ">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-9 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite
          backgroundImage="bg-bg-img-1"
          title="Putuk Truno Camp"
          subtitle="Prigen arsuan"
          pepoleJoined="50+ Joined"
        />
        <CampSite
          backgroundImage="bg-bg-img-2"
          title="Mountain View Camp"
          subtitle="Somehwre in the wilderness"
          pepoleJoined="50+ Joined"
        />
      </div>
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl p-8 md:py-4 md:px-6 lg:p-8 xl:px-12 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 lg:regular-32 2xl:text-[46px] 2xl:leading-[120%] capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 lg:regular-20 mt-5 text-white">
            Between vacations, many daydream about what adventures the next trip
            holds. You can spend your days switching back and forth from looking
            at your favorite travel photos to trying to go about your day to day
            life. But a few friendly reminders that the next adventure is closer
            than you think can help you put your wanderlust to rest. And one of
            the best distractions comes with this list of travel quotes. Pick
            your favorite from the collection below and use it to inspire your
            next trip!
          </p>
          <Image
            src="/quote.svg"
            alt="camp-2"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
}
