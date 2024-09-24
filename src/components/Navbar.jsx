export const Navbar = () => {
  return (
    <div>
      <header className="flex flex-column justify-between px-6 py-2">
        <div>SHOP IT</div>
        <div>
          <span className="material-icons-outlined hover:cursor">favorite</span>
          <span className="material-icons-outlined hover:cursor">shopping_cart</span>
          <span className="material-icons-outlined hover:cursor">account_circle</span>
        </div>
      </header>
    </div>
  );
};
