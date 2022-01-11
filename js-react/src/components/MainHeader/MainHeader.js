import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes["main-Header"]}>
      <h1>Logo</h1>
      <Navigation></Navigation>
    </header>
  );
};

export default MainHeader;
