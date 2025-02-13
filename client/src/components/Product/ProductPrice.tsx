interface ProductPriceProps {
  price: number;
}

function ProductPrice({ price }: ProductPriceProps) {
  return (
    <section className="flex items-center justify-center">
      <div className="text-xl font-bold text-gray-900 pr-1">{price} €</div>
    </section>
  );
}

export default ProductPrice;
