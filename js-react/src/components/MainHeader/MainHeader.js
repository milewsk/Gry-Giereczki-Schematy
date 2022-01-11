import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

const MainHeader = (props) => {
  return (
    <header className={classes["main-header"]}>
      <h1>Logo</h1>
      <Navigation></Navigation>
    </header>
  );
};

export default MainHeader;
