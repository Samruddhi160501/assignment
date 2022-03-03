import classes from "./Category.module.css";

const category = [
  { name: "Fashion", image: "" },
  { name: "Grocery", image: "" },
  { name: "Medicines", image: "" },
  {
    name: "Fruits & Vegetables",
    image: "",
  },
  {
    name: "Dairy Products",
    image: "",
  },
  {
    name: "Bakery Products",
    image: "",
  },
  { name: "Electronics", image: "" },
  { name: "Furniture", image: "" },
  { name: "Home Decor", image: "" },
];

const Category = () => {
  return (
    <div>
      <h3 className={classes.headline}>Categories</h3>
      <div className={classes.card_text}>
        {category.map((cat) => (
          <div className={classes.card}>
            <div className={classes.img1}>
              <img src={cat.image} alt="img"></img>
            </div>
            <ul className={classes.cat1}>{cat.name}</ul>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Category;
