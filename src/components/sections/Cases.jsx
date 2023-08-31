import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion as m } from "framer-motion";

import cases from "../../contents/case";
import { AnimatePresence } from "framer-motion";
import clsx from "clsx";

const Cases = () => {
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
      x: direction === "increasing" ? "100%" : "-100%",
    }),
    center: { x: 0 },
    exit: (direction) => ({ x: direction === "increasing" ? "-100%" : "100%" }),
  };

  return (
    <section className="w-full h-fit">
      <div className="relative w-full h-[753px] flex">
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
              "w-screen h-full absolute left-0 pt-7 px-7 flex flex-col z-0",
              "bg-cover bg-top bg-no-repeat",
              {
                "bg-[url('/assets/background/bg-yellow-mobile.png')] ":
                  index === 0,
                "bg-[url('/assets/background/bg-white-mobile.png')]":
                  index === 1,
                "bg-[url('/assets/background/bg-brown-mobile.png')]":
                  index === 2,
              }
            )}
          >
            <h3 className="font-bold text-3xl uppercase text-center mb-7">
              Study Cases
            </h3>
            <img
              src={`/assets/images/cases/${cases[index].image}.png`}
              alt="golkar-study-case"
              className="w-full h-auto drop-shadow-case"
            />
            <img
              src={`/assets/logos/${cases[index].image}.png`}
              alt="logo-golkar"
              className="w-12 h-12 mt-3 mb-5"
            />
            <h3 className="w-full text-2xl font-bold text-left uppercase mb-3">
              {cases[index].title}
            </h3>
            <p className="text-sm font-medium">{cases[index].desc}</p>
          </m.article>
        </AnimatePresence>
        <div className="absolute top-1/2 left-0 w-screen flex justify-between text-lg px-4 z-20">
          <button
            onClick={() => handlePrev()}
            className="p-1 bg-white/50 rounded-full"
          >
            <HiChevronLeft />
          </button>
          <button
            onClick={() => handleNext()}
            className="p-1 bg-white/50 rounded-full"
          >
            <HiChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cases;
