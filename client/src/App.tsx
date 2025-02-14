import { useEffect, useState } from "react";
import ProductCard from "./components/Product/ProductCard";
import api from "./services/api";
import type { Product } from "./types/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await api.get("/api/product");
        const data = res.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };

    getProducts();
  }, []);

  return (
    <>
      <section className="flex flex-col items-center">
        <h1 className="text-4xl font-semibold text-pink-500  m-15 flex text-center">
          Click And Collect
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
          Retrait possible sous 24h dans notre boutique
        </h2>
        <p className="text-l text-gray-900 text-center mt-5">
          Place Las lagunas, 90015, Florence
        </p>
      </section>

      <section className="grid grid-cols-2 gap-20 mt-15">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} isBuy={false} />
        ))}
      </section>
    </>
  );
}

export default App;
