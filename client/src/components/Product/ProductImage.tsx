interface ProductImageProps {
  img: string;
  name: string;
}
function ProductImage({ img, name }: ProductImageProps) {
  return (
    <section className="relative aspect-square overflow-hidden rounded-xl bg-gray-100">
      <img
        src={img}
        alt={name}
        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
      />
    </section>
  );
}

export default ProductImage;
