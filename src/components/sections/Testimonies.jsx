import clsx from "clsx";
import Section from "../commons/Section";
import testimonies from "../../contents/testimonies";

const Testimonies = () => {
  return (
    <Section
      className={clsx(
        "flex flex-col items-center pt-16 pb-20",
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
            className="flex flex-col p-4 bg-yellow-primary rounded-lg gap-5 lg:gap-7 lg:px-4 lg:pt-5 lg:pb-14 2xl:px-8 2xl:pt-8"
          >
            <div className="flex flex-col gap-2.5 lg:flex-row-reverse lg:justify-between">
              <img
                src={t.image}
                alt={`foto-${t.name}`}
                className="w-14 h-14 object-cover object-center bg-gray-300 rounded-full flex items-center justify-center"
              />
              <div className="flex flex-col lg:gap-2">
                <h3 className="text-2xl font-bold lg:text-4xl 2xl:text-6xl">
                  {t.name}
                </h3>
                <span className="text-xs font-extrabold 2xl:text-base">
                  {t.title}
                </span>
              </div>
            </div>
            <p className="text-sm font-medium lg:text-lg 2xl:text-2xl">{`"${t.testimony}"`}</p>
          </article>
        ))}
      </div>
      {/* <div className="w-3/4 p-1 bg-yellow-primary rounded-2xl mt-14 lg:p-4">
        <iframe
          className="w-full h-auto aspect-video rounded-xl border-4 border-black"
          src="https://www.youtube.com/embed/D4G0cxNVE3Q?si=-NSQ4wY37ZoIuNY0"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div> */}
    </Section>
  );
};

export default Testimonies;
