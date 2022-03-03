import classes from "./MainBody.module.css";

const details = [
  {
    imgage : "",
    heading: "Order at Ease ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imgage : "",
    heading: "Gat and compare multiple qoutes items you want to buy",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    imgage :"",
    heading: "Save on your every purches by getting best price ",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];
const MainBody = () => {
  
  return (
  //   <div>
  //   <div className={classes.card}>{details.map((item)=>(
  //     <div>
  //       <img className={classes.img} src={item.imgage} alt="img"></img>
  //       <h4 className={classes.heading}>{item.heading}</h4>
  //       <p className={classes.description}>{item.description}</p>
  //     </div>
  //   ))}</div>
  // </div>
    <div>
      <div>
        <img className={classes.img1} src=" " ></img>
        <h3 className={classes.head1}>Order at Ease</h3>
        <p className={classes.desc1}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div>
        <img className={classes.img2} src=" " ></img>
        <h3 className={classes.head2}>
          Gat and compare multiple qoutes items you want to buy
        </h3>
        <p className={classes.desc2}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div>
        <img className={classes.img3} src=" " ></img>
        <h3 className={classes.head3}>
          Save on your every purches by getting best price
        </h3>
        <p className={classes.desc3}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
  );
};
export default MainBody;
