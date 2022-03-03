import classes from "./Header.module.css";
import search_icon from "../../assets/search.png";
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}></div>
      <p className={classes.text}>Register Business with us</p>
      <img className={classes.icon} src={search_icon}></img>
    </header>
  );
};
export default Header;
