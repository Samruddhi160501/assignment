import classes from './MainBody.module.css';
const MainBodyItem = (props) => {
    return (
        <div className={classes.card} >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img className={classes.image} src={props.image}></img>
            <div >
              <h5 className={classes.card__title}>{props.heading}</h5>
              <p className={classes.card__description}>{props.description}</p>
            </div>
          </div>
        </div>
      );
};
export default MainBodyItem;

