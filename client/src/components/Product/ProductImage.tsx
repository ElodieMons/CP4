interface ProductImg {
  img: string;
  name: string;
}

function ProductImage({ img, name }: ProductImg) {
  return (
    <section className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
      <img
        src={`${import.meta.env.VITE_API_URL}/assets/images/${img}`}
        alt={name}
      />
    </section>
  );
}

export default ProductImage;
