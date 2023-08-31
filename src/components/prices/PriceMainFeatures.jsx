import PropTypes from "prop-types";

const PriceMainFeatures = ({ data, name }) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <strong className="text-3xl font-medium inline-flex gap-2 lg:text-2xl">
        <span className="relative">
          <span className="relative z-10">{data.total}</span>
          <div className="absolute left-0 top-0 bg-yellow-primary w-8 h-8 rounded-full z-0" />
        </span>
        <span className="relative">
          <span className="relative z-10">{name}</span>
          <div className="absolute bottom-1.5 left-0 bg-yellow-primary w-[105%] h-2 z-0" />
        </span>
      </strong>
      <ul className="list-disc pl-6">
        {data.features.map((f) => (
          <li className="text-2xs lg:text-lg" key={f}>
            {f}
          </li>
        ))}
      </ul>
    </div>
  );
};

PriceMainFeatures.propTypes = {
  data: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
};

export default PriceMainFeatures;
