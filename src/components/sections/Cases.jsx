import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion as m } from "framer-motion";

import cases from "../../contents/case";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Cases = () => {
  const dots = [0, 1, 2];
  const [index, setIndex] = useState(0);
  const [tuple, setTuple] = useState([null, index]);

  const handleNext = () => {
    setIndex((index + 1) % cases.length);
    setTuple([index, index + 1]);
  };

  const handlePrev = () => {
    if (index === 0) {
      setIndex(cases.length - 1);
    } else {
      setIndex((index - 1) % cases.length);
    }
    setTuple([index, index - 1]);
  };

  const direction = tuple[0] > tuple[1] ? "increasing" : "decreasing";

  const variants = {
    enter: (direction) => ({
      x: direction === "increasing" ? "-100%" : "100%",
    }),
    center: { x: 0 },
    exit: (direction) => ({ x: direction === "increasing" ? "100%" : "-100%" }),
  };

  return (
    <section className="w-full h-fit">
      <m.div className="relative w-full h-[753px] md:min-h-screen flex overflow-hidden z-0">
        <AnimatePresence custom={direction}>
          <m.article
            key={`case-${index}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={clsx(
              "w-full h-full absolute left-0 py-7 px-7 flex flex-col gap-7 md:gap-8 2xl:gap-20 z-0 md:py-12 md:px-36 2xl:py-20 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center",
              "bg-cover bg-top bg-no-repeat",
              {
                "bg-[url('/assets/background/bg-yellow-mobile.png')] md:bg-[url('/assets/background/bg-yellow-desktop.png')] ":
                  index === 0,
                "bg-[url('/assets/background/bg-white-mobile.png')] md:bg-[url('/assets/background/bg-white.png')]":
                  index === 1,
                "bg-[url('/assets/background/bg-brown-mobile.png')] md:bg-[url('/assets/background/bg-brown-desktop.png')]":
                  index === 2,
              }
            )}
          >
            <h3 className="font-bold text-3xl uppercase text-center md:text-5xl 2xl:text-7xl">
              Study Cases
            </h3>
            <div className="w-full grow flex flex-col gap-3 md:flex-row-reverse md:justify-between 2xl:items-center">
              <img
                src={`/assets/images/cases/${cases[index].image}.png`}
                alt="study-case"
                className="w-[min(100%,320px)] h-auto drop-shadow-case md:w-2/5 object-contain self-center"
              />
              <div className="w-[min(100%,320px)] flex flex-col md:w-1/2 self-center">
                <img
                  src={`/assets/logos/${cases[index].image}.png`}
                  alt="logo-golkar"
                  className="w-12 h-12 mb-5 md:w-36 md:h-36 object-contain"
                />
                <h3 className="w-full text-2xl font-bold text-left uppercase mb-3 md:text-4xl 2xl:text-6xl">
                  {cases[index].title}
                </h3>
                <p className="text-sm font-medium leading-5 md:text-lg md:leading-6 2xl:text-2xl 2xl:leading-8">
                  {cases[index].desc}
                </p>
              </div>
            </div>
          </m.article>
        </AnimatePresence>
        <div className="absolute top-1/2 left-0 w-full flex justify-between text-lg px-4 z-20 md:px-8 2xl:px-10">
          <button
            onClick={() => handlePrev()}
            className="p-1 bg-white/50 rounded-full hover:bg-white"
          >
            <HiChevronLeft className="text-base md:text-xl 2xl:text-3xl" />
          </button>
          <button
            onClick={() => handleNext()}
            className="p-1 bg-white/50 rounded-full hover:bg-white"
          >
            <HiChevronRight className="text-base md:text-xl 2xl:text-3xl" />
          </button>
        </div>
        <div className="absolute bottom-2 left-0 w-full flex justify-center items-center gap-1 md:bottom-6 md:gap-2 2xl:gap-3 2xl:bottom-8">
          {dots.map((d) => (
            <div
              key={`dots-${d}`}
              className={clsx(
                "w-2 h-auto aspect-square border border-blue-primary rounded-full md:w-3 2xl:w-5",
                { "bg-blue-primary": index === d }
              )}
            />
          ))}
        </div>
      </m.div>
    </section>
  );
};

export default Cases;
