import { useCard } from "../../contexts/CardContext";
import ShoppingCard from "../ShoppingCard";

function Card() {
  const { cards, totalPrice } = useCard();
  return (
    <section className="py-40 relative mb-30">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-20 text-center text-black">
          Ton panier
        </h2>
        <section>
          {cards.map((product) => (
            <ShoppingCard key={product.id} product={product} />
          ))}
        </section>

        <div className="flex flex-col md:flex-row items-center md:items-center justify-between lg:px-6 pb-6 border-b border-gray-200 max-lg:max-w-lg max-lg:mx-auto">
          <h5 className="text-gray-900 font-manrope font-semibold text-2xl leading-9 w-full max-md:text-center max-md:mb-4 mt-15">
            Total
          </h5>

          <div className="flex items-center justify-between gap-5 mt-15 ">
            <h6 className="font-manrope font-bold text-3xl lead-10 text-pink-400">
              {totalPrice}€
            </h6>
          </div>
        </div>
        <div className="max-lg:max-w-lg max-lg:mx-auto">
          <p className="font-normal text-base leading-7 text-gray-500 text-right mb-5 mt-6">
            * Retrait dans la journée
          </p>
          <section className="flex flex-col items-center">
            <button
              className="rounded-full py-4 px-2 bg-pink-200 text-gray-900 font-semibold text-lg w-65 text-center transition-all duration-500 hover:bg-pink-300 mt-10"
              type="button"
            >
              Acheter
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Card;
