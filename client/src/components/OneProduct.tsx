import { useLoaderData } from "react-router-dom";
import type { Product } from "../types/product";
import ProductCard from "./Product/ProductCard";

function OneProduct() {
  const product = useLoaderData() as Product;

  if (!product) {
    return <p>Chargement du produit...</p>;
  }
  return (
    <section>
      <h1>{product.name}</h1>
      <ProductCard product={product} isBuy />
    </section>
  );
}

export default OneProduct;
