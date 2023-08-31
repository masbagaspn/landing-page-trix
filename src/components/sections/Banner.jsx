import { motion as m, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const Banner = () => {
  const [index, setIndex] = useState(0);
  const [ref, { width }] = useMeasure();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => (index + 1) % 4);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <div
        ref={ref}
        className="relative flex items-center justify-center overflow-hidden w-full h-auto aspect-[360/119]"
      >
        <AnimatePresence mode="popLayout">
          <m.img
            key={index}
            initial={{ x: width }}
            animate={{ x: 0 }}
            exit={{ x: -width }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={`/assets/images/slides/slide-${index}.png`}
            alt={`slide-${index}`}
            className="w-full h-auto object-cover object-center"
          />
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Banner;
