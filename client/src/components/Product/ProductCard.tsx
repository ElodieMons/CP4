import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useCard } from "../../contexts/CardContext";
import type { Product } from "../../types/product";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

interface ProductCardProps {
  product: Product;
  isBuy?: boolean;
}

function ProductCard({ product, isBuy }: ProductCardProps) {
  const { addShoppingCards } = useCard();

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage img={product.img} name={product.name} />

        <section className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900 text-center mt-15 ">
            {product.name}
          </h1>
          <p className="text-gray-600 leading-relaxed text-center mt-12">
            {product.description}
          </p>
        </section>

        <ProductPrice price={product.price} />
      </section>
      <section>
        {!isBuy ? (
          <button
            className={
              "w-full bg-pink-200 text-black py-3 px-6 rounded-lg hover:bg-pink-300 transition-colors flex items-center justify-center gap-2 mt-10"
            }
            type="button"
            onClick={() => addShoppingCards(product)}
          >
            <ShoppingBag className="w-5 h-5" />
            Acheter
          </button>
        ) : (
          <Link
            to={`/product/${product.id}`}
            className="w-full bg-pink-200 text-black py-3 px-6 rounded-lg hover:bg-pink-300 transition-colors flex items-center justify-center gap-2 mt-8"
            type="button"
          >
            Voir le produit
          </Link>
        )}
      </section>
    </section>
  );
}

export default ProductCard;
