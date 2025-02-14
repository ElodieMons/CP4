import logo from "../assets/images/planet-earth_5699945.png";

function Footer() {
  return (
    <footer className="text-gray-600 body-font mt-17 bg-pink-200">
      <section className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <section className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img src={logo} alt="logo" className="w-14 h-14" />
          <span className="ml-3 text-xl">
            &copy;{new Date().getFullYear()} Florica
          </span>
        </section>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          Mentions légales
        </span>
      </section>
    </footer>
  );
}

export default Footer;
