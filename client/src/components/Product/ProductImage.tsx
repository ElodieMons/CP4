interface ProductImg {
  img: string;
  name: string;
}

function ProductImage({ img, name }: ProductImg) {
  return (
    <section className="">
      <img
        src={`${import.meta.env.VITE_API_URL}/assets/images/${img}`}
        alt={name}
        className=" overflow-hidden rounded-xl w-xs max-h-xl mt-1"
      />
    </section>
  );
}

export default ProductImage;
