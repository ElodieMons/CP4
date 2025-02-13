import { Link } from "react-router-dom";
import type { Product } from "../../types/product";
import ProductImage from "./ProductImage";
import ProductPrice from "./ProductPrice";

interface ProductCardProps {
  product: Product;
  isBuy?: boolean;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl mx-auto">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ProductImage img={product.img} name={product.name} />

        <section className="space-y-4">
          <h1 className="text-2xl font-bold text-gray-900 mt-2">
            {product.name}
          </h1>
        </section>

        <ProductPrice price={product.price} />

        <p className="text-gray-600 leading-relaxed">{product.description}</p>
      </section>
      <section>
        <Link
          to={`/product/${product.id}`}
          className="w-full bg-pink-200 text-black py-3 px-6 rounded-lg hover:bg-pink-200 transition-colors flex items-center justify-center gap-2 mt-8"
          type="button"
        >
          Voir le produit
        </Link>
      </section>
    </section>
  );
}

export default ProductCard;
