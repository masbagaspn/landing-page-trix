import clsx from "clsx";
import partners from "../../contents/partner";
import Section from "../commons/Section";

const Partners = () => {
  return (
    <Section
      className={clsx(
        "flex flex-col py-9 pb-14 gap-4 lg:pt-10 lg:pb-48",
        "bg-[url('/assets/background/bg-white.png')] bg-cover bg-center bg-no-repeat"
      )}
    >
      <h2 className="section-title mb-4 lg:mb-48">{partners.title}</h2>
      <div className="w-full grid grid-cols-6 gap-5 mb-5 lg:mb-10">
        {partners.partners.map((p) => (
          <div
            key={p.name}
            className="w-full h-full flex justify-center items-center"
          >
            <img
              src={`/assets/logos/${p.images}.png`}
              alt={p.name}
              className="w-9 lg:w-32 h-auto aspect-square object-contain object-center"
            />
          </div>
        ))}
      </div>
      {/* <span className="text-xs font-semibold text-center lg:text-xl">
        And many more...
      </span> */}
    </Section>
  );
};

export default Partners;
