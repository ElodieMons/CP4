import { useCard } from "../../contexts/CardContext";
import ShoppingCard from "../ShoppingCard";

function Card() {
  const { cards, totalPrice } = useCard();
  return (
    <section>
      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
          <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
            Ton panier
          </h2>

          {cards.map((product) => (
            <ShoppingCard key={product.id} product={product} />
          ))}
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
            <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4">
              Total
            </h5>

            <div className="flex items-center justify-between gap-5 ">
              <h6 className="font-manrope font-bold text-3xl lead-10 text-pink-300">
                {totalPrice}€
              </h6>
            </div>
          </div>
          <div className="max-lg:max-w-lg max-lg:mx-auto">
            <p className="font-normal text-base leading-7 text-gray-500 text-center mb-5 mt-6">
              * Retrait dans la journée
            </p>
            <button
              className="rounded-full py-4 px-6 bg-pink-200 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-pink-300"
              type="button"
            >
              Acheter
            </button>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Card;
