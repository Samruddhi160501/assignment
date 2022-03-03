import classes from "./MobileApp.module.css";

const MobileApp = () => {
  return (
    <div >
      <img  className={classes.image_mobile1} src=" "></img>
      <img className={classes.image_mobile2} src=" " ></img>
      <div>
        <p className={classes.text}>
          All this from the convenience of your phone.Download the Maontoe
          mobile app.
        </p>
        <div>
          <img className={classes.image_android} src=" " alt='Play Store'></img>
          <img className={classes.image_ios} src=" " alt='App Store'></img>
        </div>
      </div>
    </div>
  );
};
export default MobileApp;
