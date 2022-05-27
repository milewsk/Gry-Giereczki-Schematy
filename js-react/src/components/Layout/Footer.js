import classes from "./Footer.module.css";

const Footer = (props) => {
  return (
  <footer className={`container-fluid ${classes.footer}`}>
    <div className={classes.contact}>
      <h5 className="row mb-3">Contact us</h5>
      <div className="row">
        <a className="col-12 col-md-6 p-0 mb-2 text-start">
          <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M0 128C0 92.65 28.65 64 64 64H448C483.3 64 512 92.65 512 128V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V128zM48 128V150.1L220.5 291.7C241.1 308.7 270.9 308.7 291.5 291.7L464 150.1V127.1C464 119.2 456.8 111.1 448 111.1H64C55.16 111.1 48 119.2 48 127.1L48 128zM48 212.2V384C48 392.8 55.16 400 64 400H448C456.8 400 464 392.8 464 384V212.2L322 328.8C283.6 360.3 228.4 360.3 189.1 328.8L48 212.2z"/>
          </svg>
          <span className="ms-3">gryGiereczki@gmail.com</span>
        </a>
        <div className={`col-12 col-md-6 p-0 text-start text-md-end ${classes.copyright}`}>
          <span>© 2022 gryGiereczki, Inc.</span>
        </div>
      </div>
    </div>
  </footer>);
};

export default Footer;
