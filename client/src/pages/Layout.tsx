import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <main>
      <section className="bg-red-500">
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
