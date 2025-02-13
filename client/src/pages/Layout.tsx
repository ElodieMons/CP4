import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

function Layout() {
  return (
    <main>
      <Navbar />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
        <section className="mx-auto max-w-3xl">
          <Outlet />
        </section>
      </section>
      <Footer />
    </main>
  );
}

export default Layout;
