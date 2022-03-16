import classes from "./Navbar.module.css";
import Navigation from "./Navigation";


const Navbar = (props) => {
  return (
    <header>
      <h1 className="me-5">Logo</h1>
      <div className="d-none d-md-block w-100">
      <Navigation></Navigation>
      </div>
      <div className="d-md-none">
        <button 
          className="btn" 
          type="button" data-bs-toggle="offcanvas" 
          data-bs-target="#offcanvasWithBothOptions" 
          aria-controls="offcanvasWithBothOptions">
            Menu</button>
        <div class="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
          <div class="offcanvas-header">
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <Navigation></Navigation>
          </div>
        </div>        
      </div>
        
    </header>
  );
};

export default Navbar;
