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
    <section>
      <h1 className="text-3xl font-semibold text-gray-900 flex item center">
        Nos compositions
      </h1>
      <div className="grid grid-cols-2 gap-8 mt-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} isBuy />
        ))}
      </div>
    </section>
  );
}

export default App;
