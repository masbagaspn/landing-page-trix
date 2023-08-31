import offer from "../../contents/offer";
import Offer from "./Offer";

const OfferTicket = () => {
  return (
    <Offer className="bg-brown flex flex-col gap-4">
      <img src="/assets/images/offers/ticketing.png" alt="offer-ticket" />
      <p className="w-full text-[10px] text-white font-medium whitespace-pre-line">
        {offer.offers[0].text}
      </p>
    </Offer>
  );
};

export default OfferTicket;
