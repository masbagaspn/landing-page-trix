import Section from "../commons/Section";
import clsx from "clsx";
import services from "../../contents/services";

const Services = () => {
  return (
    <Section
      className={clsx(
        "flex flex-col gap-10 py-14 lg:pt-16 lg:pb-52 lg:gap-16",
        "bg-[url('/assets/background/bg-blue-mobile.png')] bg-cover bg-center bg-no-repeat",
        "lg:bg-[url('/assets/background/bg-blue-desktop.png')]"
      )}
    >
      <div className="flex flex-col gap-6">
        <h2 className="section-title text-white whitespace-pre-line">
          {services.title}
        </h2>
        <p className="text-white text-2xs font-semibold text-center whitespace-pre-line lg:text-lg">
          {services.desc}
        </p>
      </div>
      <div className="w-full grid grid-cols-2 gap-5 lg:grid-cols-3">
        {services.services.map((s) => (
          <div key={s.service}>
            <h3 className="sr-only">{s.service}</h3>
            <img
              src={`/assets/images/services/${s.image}.png`}
              alt={s.service}
              className="w-full h-auto object-contain drop-shadow-service"
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;
