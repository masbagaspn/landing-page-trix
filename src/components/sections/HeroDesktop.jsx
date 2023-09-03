import hero from "../../contents/hero";
import Section from "../commons/Section";
import clsx from "clsx";

const HeroDesktop = () => {
  return (
    <Section
      className={clsx(
        "relative w-full min-h-screen py-7",
        "bg-[url('/assets/background/bg-blue-desktop.png')] bg-cover bg-center bg-no-repeat",
        "hidden lg:flex flex-col gap-4"
      )}
    >
      <div className="absolute right-24 top-0">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-28 h-auto aspect-square 2xl:w-44"
        />
      </div>
      <div className="w-full grow grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="relative font-bold text-5xl uppercase mb-8 2xl:text-7xl">
            <span className="relative z-20 text-yellow-primary">
              MAU OMZET NAIK TANPA{" "}
              <strong className="text-[#FF4F37] font-bold">{` PUSING `}</strong>
              MIKIRIN DIGITAL MARKETING?
            </span>
            {/* <img
              src="/assets/tape.png"
              alt="trixadon"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0"
            /> */}
          </h2>
          <p className="text-lg text-white mb-12 2xl:text-2xl">
            <span className="mr-2 font-bold">Efek samping:</span>
            {hero.desc}
          </p>
          <button className="button-yellow w-fit">Mau banget!</button>
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/images/trixadon.png"
            alt="trixadon"
            className="w-3/4 h-auto object-center object-contain drop-shadow-trixadon mb-4"
          />
        </div>
      </div>
    </Section>
  );
};

export default HeroDesktop;
