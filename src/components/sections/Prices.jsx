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
        <h2 className="section-title whitespace-normal lg:whitespace-pre-line">
          {prices.title}
        </h2>
        <p className="text-xs font-medium lg:text-3xl">{prices.desc}</p>
      </div>
      <div className="flex flex-col gap-32 lg:flex-row lg:gap-5">
        {prices.prices.map((p) => (
          <Price key={p.name} data={p} />
        ))}
      </div>
      <button className="button-blue w-fit self-center uppercase hidden lg:block">
        Diskusikan budgetmu sekarang!
      </button>
    </Section>
  );
};

export default Prices;
