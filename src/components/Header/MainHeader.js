import classes from "./MainHeader.module.css";


const MainHeader = () => {
  return (
    <div>
      <h2 className={classes.heading}>“Maontoe”</h2>
      <h2 className={classes.heading_line2}> Market On Toes</h2>
      <p className={classes.description}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div>
        <img className={classes.img1} src=" " ></img>
        <img className={classes.img2} src=""></img>
        <img className={classes.img3} src=""></img>
        <img className={classes.img4} src=""></img>
      </div>
    </div>
  );
};
export default MainHeader;
