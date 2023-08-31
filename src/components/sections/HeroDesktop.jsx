import hero from "../../contents/hero";
import Section from "../commons/Section";
import clsx from "clsx";

const HeroDesktop = () => {
  return (
    <Section
      className={clsx(
        "w-full min-h-screen py-7",
        "bg-[url('/assets/background/bg-blue-desktop.png')] bg-cover bg-center bg-no-repeat",
        "hidden lg:flex flex-col gap-4"
      )}
    >
      <div className="w-full flex justify-end">
        <img
          src="/assets/logo.png"
          alt="logo"
          className="w-28 h-auto aspect-square 2xl:w-44"
        />
      </div>
      <div className="w-full grow grid grid-cols-2">
        <div className="flex flex-col justify-center">
          <h2 className="relative font-bold text-4xl drop-shadow-grey uppercase mb-14 2xl:text-6xl">
            <span className="relative z-20">{hero.title}</span>
            <img
              src="/assets/tape.png"
              alt="trixadon"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0"
            />
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
