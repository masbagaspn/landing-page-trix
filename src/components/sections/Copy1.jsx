import Section from "../commons/Section";
import copy1 from "../../contents/copy1";
import clsx from "clsx";
import { FaWhatsapp } from "react-icons/fa";

const Copy1 = () => {
  return (
    <Section
      className={clsx(
        "w-full py-8 flex flex-col items-center justify-center gap-5",
        "bg-[url('/assets/background/bg-yellow-mobile.png')] bg-top bg-cover bg-no-repeat"
      )}
    >
      <h2 className="section-title">{copy1.title}</h2>
      <button className="button-blue inline-flex items-center gap-2">
        {copy1.cta}
        <FaWhatsapp className="text-2xl" />
      </button>
    </Section>
  );
};

export default Copy1;
