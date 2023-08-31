import PropTypes from "prop-types";
import clsx from "clsx";
import { motion as m } from "framer-motion";

const Case = ({ data }) => {
  return (
    <m.article
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={clsx(
        "w-screen h-full absolute left-0 pt-7 px-7 flex flex-col z-0",
        "bg-[url('/assets/background/bg-yellow-mobile.png')]"
      )}
    >
      <h3 className="font-bold text-3xl uppercase text-center mb-7">
        Study Cases
      </h3>
      <img
        src={`/assets/images/cases/${data.image}.png`}
        alt="golkar-study-case"
        className="w-full h-auto drop-shadow-case"
      />
      <img
        src={`/assets/logos/${data.image}.png`}
        alt="logo-golkar"
        className="w-12 h-12 mt-3 mb-5"
      />
      <h3 className="w-full text-2xl font-bold text-left uppercase mb-3">
        {data.title}
      </h3>
      <p className="text-sm font-medium">{data.desc}</p>
    </m.article>
  );
};

Case.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Case;
