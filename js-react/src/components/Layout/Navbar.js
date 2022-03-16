import classes from "./Navbar.module.css";
import Navigation from "./Navigation";


const Navbar = (props) => {
  return (
    <header>
      <h1 className="me-5">Logo</h1>
      <Navigation></Navigation>
    </header>
  );
};

export default Navbar;
