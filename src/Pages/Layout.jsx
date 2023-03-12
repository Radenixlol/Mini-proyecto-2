// import { Navbar } from "../Components/Navbar";
import { Outlet } from "react-router-dom";
import { UserContextProvider } from "../Contexts/UserContext";

export function Layout() {
  return (
    <UserContextProvider>
      <main>
        {/* <Navbar /> */}

        <section className="body">
          <Outlet />
        </section>
      </main>
    </UserContextProvider>
  );
}

export default Layout;
