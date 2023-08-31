import clsx from "clsx";
import Section from "../commons/Section";
import prices from "../../contents/prices";
import Price from "../prices/Price";

const Prices = () => {
  return (
    <Section
      className={clsx(
        "w-full flex flex-col gap-32",
        "bg-[url('/assets/background/bg-white-mobile.png')] bg-top bg-repeat pt-10 pb-16"
      )}
    >
      <div className="w-full flex flex-col gap-10 text-center">
        <h2 className="section-title">{prices.title}</h2>
        <p className="text-xs font-medium">{prices.desc}</p>
      </div>
      <div className="flex flex-col gap-32">
        {prices.prices.map((p) => (
          <Price key={p.name} data={p} />
        ))}
      </div>
    </Section>
  );
};

export default Prices;
