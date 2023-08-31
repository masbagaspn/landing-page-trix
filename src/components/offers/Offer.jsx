import PropTypes from "prop-types";
import { motion as m } from "framer-motion";
import clsx from "clsx";

const Offer = ({ children, className }) => {
  return (
    <m.article
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={clsx("offer-card rounded-lg", className)}
    >
      {children}
    </m.article>
  );
};

Offer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Offer;
