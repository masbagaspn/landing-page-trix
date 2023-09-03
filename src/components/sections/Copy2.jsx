import clsx from "clsx";
import Section from "../commons/Section";
import { GoChecklist } from "react-icons/go";

const Copy2 = () => {
  return (
    <Section
      className={clsx(
        "w-full h-fit pt-6 pb-16 flex flex-col justify-center items-center gap-8 lg:py-14 lg:gap-7",
        "bg-[url('/assets/background/bg-blue-mobile.png')] bg-cover bg-top bg-no-repeat"
      )}
    >
      <h2 className="font-bold uppercase text-white text-center whitespace-pre-line lg:text-3xl lg:whitespace-normal">
        {"Penawaran spesial\nkhusus buat kamu!!"}
      </h2>
      <button className="button-yellow text-sm w-fit uppercase inline-flex items-center gap-2 lg:text-lg lg:gap-3">
        klaim bonus sekarang
        <GoChecklist className="text-2xl" />
      </button>
    </Section>
  );
};

export default Copy2;
