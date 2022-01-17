import MainHeader from "../MainHeader/MainHeader";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <MainHeader></MainHeader>
    </nav>
  );
};

export default Navbar;
