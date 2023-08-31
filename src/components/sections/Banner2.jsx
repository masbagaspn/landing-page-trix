import { motion as m, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Banner2 = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 95%", "end start"],
  });

  const objectPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["50% 20%", "50% 100%"]
  );
  return (
    <section
      ref={ref}
      className="relative w-full h-[20vh] lg:h-[60vh] flex items-center justify-center overflow-hidden"
    >
      <h2 className="relative text-lg font-bold uppercase text-yellow-primary drop-shadow-jargon z-10 lg:text-7xl">
        Semua ada trixnya
      </h2>
      <m.img
        style={{ objectPosition }}
        src="/assets/images/banner-2.png"
        alt="trix-members"
        className="absolute w-full h-full object-cover"
      />
    </section>
  );
};

export default Banner2;
