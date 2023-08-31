import clsx from "clsx";
import Section from "../commons/Section";
import offer from "../../contents/offer";
import { motion as m } from "framer-motion";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

const Offers = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % 3);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Section
      className={clsx(
        "w-full h-fit pb-20 py-8 flex flex-col items-center gap-10",
        "bg-[url('/assets/background/bg-yellow-mobile.png')] bg-center bg-cover bg-no-repeat"
      )}
    >
      <h2 className="section-title">{offer.title}</h2>
      <div className="w-full h-[297px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <m.article
            key={index}
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className={clsx("offer-card rounded-lg flex flex-col gap-4", {
              "bg-brown text-white": index === 0,
              "bg-grey text-black": index === 1,
              "bg-yellow-secondary text-black": index === 2,
            })}
          >
            <img
              src={offer.offers[index].image}
              alt="offer-ticket"
              className="w-full h-auto drop-shadow-offer"
            />
            <p className="w-full text-[10px] font-medium whitespace-pre-line">
              {offer.offers[index].text}
            </p>
          </m.article>
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Offers;
