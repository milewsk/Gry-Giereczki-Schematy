import classes from "./Navbar.module.css";

const Navbar = (props) => {
  return (
    <nav className={classes.navbar}>
      <p> bla bla bla</p>
      <p> bla bla bla</p>
      <p> bla bla bla</p>
      <p>{props.imie}</p>
    </nav>
  );
};

export default Navbar;
