import { NavLink } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <header className="flex flex-column justify-between bg-orange-600 px-12 py-2 text-5xl fixed w-full z-10">
        <div className="">SHOP IT</div>
        <div className="flex gap-6 items-center">
          <NavLink to="/favorite">
            <span className="material-icons-outlined hover:cursor 3xl">
              favorite
            </span>
          </NavLink>
          <NavLink to="/cart">
            <span className="material-icons-outlined hover:cursor">
              shopping_cart
            </span>
          </NavLink>
          <NavLink to="/account">
            <span className="material-icons-outlined hover:cursor">
              account_circle
            </span>
          </NavLink>
        </div>
      </header>
    </div>
  );
};
