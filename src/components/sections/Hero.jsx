import clsx from "clsx";
import Section from "../commons/Section";
import hero from "../../contents/hero";

const Hero = () => {
  return (
    <Section
      className={clsx(
        "w-full min-h-screen flex flex-col justify-center items-center pt-6 pb-16 lg:hidden",
        "bg-[url('/assets/background/bg-blue-mobile.png')] bg-cover bg-center bg-no-repeat"
      )}
    >
      <img
        src="/assets/logo.png"
        alt="logo"
        className="w-32 h-auto aspect-square"
      />
      <h2 className="relative font-bold text-2xl text-center drop-shadow-grey uppercase">
        <span className="relative z-20">{hero.title}</span>
        <img
          src="/assets/tape.png"
          alt="trixadon"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
        />
      </h2>
      <img
        src="/assets/images/trixadon.png"
        alt="trixadon"
        className="drop-shadow-trixadon mb-4"
      />
      <p className="text-sm text-white text-center mb-16">
        <span className="mr-1 font-bold">Efek samping:</span>
        {hero.desc}
      </p>
      <button className="button-yellow">Mau banget!</button>
    </Section>
  );
};

export default Hero;
