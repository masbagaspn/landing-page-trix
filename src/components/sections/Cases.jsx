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
      <m.div className="relative w-full h-[753px] lg:h-[972px] flex overflow-hidden z-0">
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
              "w-full h-full absolute left-0 pt-7 px-7 flex flex-col z-0 lg:py-8 lg:px-36 2xl:py-20 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center",
              "bg-cover bg-top bg-no-repeat",
              {
                "bg-[url('/assets/background/bg-yellow-mobile.png')] lg:bg-[url('/assets/background/bg-yellow-desktop.png')] ":
                  index === 0,
                "bg-[url('/assets/background/bg-white-mobile.png')] lg:bg-[url('/assets/background/bg-white.png')]":
                  index === 1,
                "bg-[url('/assets/background/bg-brown-mobile.png')] lg:bg-[url('/assets/background/bg-brown-desktop.png')]":
                  index === 2,
              }
            )}
          >
            <h3 className="font-bold text-3xl uppercase text-center mb-7 lg:text-5xl lg:mb-8 2xl:text-7xl 2xl:mb-20">
              Study Cases
            </h3>
            <div className="flex flex-col lg:flex-row-reverse lg:justify-between 2xl:items-center">
              <img
                src={`/assets/images/cases/${cases[index].image}.png`}
                alt="golkar-study-case"
                className="w-full h-auto drop-shadow-case lg:w-1/2"
              />
              <div className="flex flex-col lg:w-1/2">
                <img
                  src={`/assets/logos/${cases[index].image}.png`}
                  alt="logo-golkar"
                  className="w-12 h-12 mt-3 mb-5 lg:w-36 lg:h-36 object-contain"
                />
                <h3 className="w-full text-2xl font-bold text-left uppercase mb-3 lg:text-4xl 2xl:text-6xl">
                  {cases[index].title}
                </h3>
                <p className="text-sm font-medium leading-4 lg:text-lg lg:leading-6 2xl:text-2xl 2xl:leading-8">
                  {cases[index].desc}
                </p>
              </div>
            </div>
          </m.article>
        </AnimatePresence>
        <div className="absolute top-1/2 left-0 w-full flex justify-between text-lg px-4 z-20 lg:px-8 2xl:px-10">
          <button
            onClick={() => handlePrev()}
            className="p-1 bg-white/50 rounded-full"
          >
            <HiChevronLeft className="text-base lg:text-xl 2xl:text-3xl" />
          </button>
          <button
            onClick={() => handleNext()}
            className="p-1 bg-white/50 rounded-full"
          >
            <HiChevronRight className="text-base lg:text-xl 2xl:text-3xl" />
          </button>
        </div>
        <div className="absolute bottom-4 left-0 w-full flex justify-center items-center gap-1 lg:gap-2 2xl:gap-3 2xl:bottom-8">
          {dots.map((d) => (
            <div
              key={`dots-${d}`}
              className={clsx(
                "w-2 h-auto aspect-square border border-blue-primary rounded-full lg:w-3 2xl:w-5",
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
