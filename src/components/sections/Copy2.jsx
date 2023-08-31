import clsx from "clsx";
import Section from "../commons/Section";
import { GoChecklist } from "react-icons/go";

const Copy2 = () => {
  return (
    <Section
      className={clsx(
        "w-full h-fit pt-6 pb-16 flex flex-col justify-center items-center gap-8",
        "bg-[url('/assets/background/bg-blue-mobile.png')] bg-cover bg-top bg-no-repeat"
      )}
    >
      <h2 className="font-bold uppercase text-white text-center whitespace-pre-line">
        {"Penawaran spesial\nkhusus buat kamu!!"}
      </h2>
      <button className="button-yellow text-sm w-fit uppercase inline-flex items-center gap-2">
        klaim bonus sekarang
        <GoChecklist className="text-2xl" />
      </button>
    </Section>
  );
};

export default Copy2;
