import clsx from "clsx";
import Section from "../commons/Section";
import testimonies from "../../contents/testimonies";

const Testimonies = () => {
  return (
    <Section
      className={clsx(
        "pt-16 pb-20",
        "bg-[url('/assets/background/bg-blue-mobile.png')]"
      )}
    >
      <h2 className="text-3xl font-bold uppercase text-white text-center mb-14">
        apa kata mereka
      </h2>
      <div className="flex flex-col gap-10 lg:grid lg:grid-cols-3 lg:gap-5">
        {testimonies.map((t) => (
          <article
            key={t.name}
            className="flex flex-col p-4 bg-yellow-primary rounded-lg lg:px-4 lg:pt-5 lg:pb-14"
          >
            <h3 className="text-2xl font-bold lg:text-4xl lg:mb-2">{t.name}</h3>
            <span className="text-xs font-medium mb-5 lg:text-sm lg:mb-7">
              {t.title}
            </span>
            <p className="text-sm font-medium lg:text-lg">{`"${t.testimony}"`}</p>
          </article>
        ))}
      </div>
    </Section>
  );
};

export default Testimonies;
