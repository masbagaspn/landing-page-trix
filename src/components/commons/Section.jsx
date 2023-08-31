import clsx from "clsx";
import PropTypes from "prop-types";

const Section = ({ children, className }) => {
  return (
    <section className={clsx("w-full px-5", className)}>{children}</section>
  );
};

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

export default Section;
