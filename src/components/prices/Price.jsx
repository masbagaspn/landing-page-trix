import PropTypes from "prop-types";
import PriceMainFeatures from "./PriceMainFeatures";

const Price = ({ data }) => {
  return (
    <article className="relative w-full px-3 pb-6 pt-24 bg-blue-primary rounded-lg flex flex-col items-center justify-center text-white font-geologica">
      <img
        src={`/assets/prices/${data.name}.png`}
        alt={`${data.name}-package`}
        className="absolute -top-28"
      />
      <span className="relative font-medium inline-flex flex-col mb-10">
        <strong className="realtive font-medium drop-shadow-price-start z-10">
          Start from
        </strong>
        <strong className="relative text-3xl drop-shadow-price-price z-10">
          {data.price}
        </strong>
        <div className="absolute -left-[10%] w-[120%] h-auto aspect-[19/5] bg-yellow-primary filter-none rounded-[50%] rotate-[15deg] z-0" />
      </span>
      <div className="grid grid-cols-2">
        <PriceMainFeatures data={data.feeds} name="Feeds" />
        <PriceMainFeatures data={data.stories} name="Stories" />
      </div>
      <div className="w-full h-1 bg-yellow-primary my-4"></div>
      <ul className="w-full pl-6 list-disc mb-5">
        {data.features.map((f) => (
          <li className="text-sm whitespace-pre-line mb-3" key={f}>
            {f}
          </li>
        ))}
      </ul>
      <button className="w-full button-yellow text-sm uppercase">
        Diskusikan budgetmu sekarang
      </button>
    </article>
  );
};

Price.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Price;
