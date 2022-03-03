import classes from "./Location.module.css";
const col1 = [
  "PuneLocalityMaps",
  "Alandi Road",
  "Ambegaon ",
  "Anandnagar",
  "Aundh",
  "Aundh Road",
  "Balaji Nagar",
  "Baner",
  "Baner road",
  "BhandarkarRoad",
  "Bhavani Peth",
  "Bibvewadi",
  "Bopodi",
  "Budhwar Peth",
  "BundGardenRoad",
  "Camp",
  "Chandan Nagar",
  "Dapodi",
  "Deccan Gymkhana",

];
const col2 = [
  "Dehu Road",
  " Dhankawadi",
  "Dhayari Phata",
  "Dhole Patil Road",
  "Erandwane",
  "Fatima Nagar",
  "FergussonCollegeRoad",
  "Ganesh Peth",
  "Ganeshkhind",
  "Ghorpade Peth",
  "Ghorpadi",
  "Gokhale Nagar",
  "Gultekd",
  "Guruwar peth",
  "Hadapsar",
  "HadapsarIndustrialEstate",
  "Hingne Khurd",
  "angali Maharaj ",
  "Maharaj Road ",
  "Kalyani Nagar",
];
const col3 = [
  " Karve Nagar",
  "Karve Road ",
  "Kasba Peth",
  "Katraj",
  "Khadaki",
  "Khadki",
  "Kharadi",
  "Kondhwa",
  "Kondhwa Budruk ",
  "Kondhwa Khurd",
  "Koregaon Park",
  " Kothrud",
  "Law College Road",
  " Laxmi Road ",
  "Lulla Nagar",
  "MahatmaGandhiRoad",
  "Mangalwar",
  "Mangalwar peth",
  "Manik Bagh ",
  "Market yard"
];
const col4 = [
  "Model colony ",
  " Mukund Nagar",
  "Mundhawa",
  " Nagar Road",
  " Nana Peth",
  "Narayan Peth ",
  " Narayangaon",
  " Navi Peth",
  " Padmavati",
  "Parvati Darshan",
  " Pashan",
  "Paud Road",
  " Pirangut",
  " Prabhat Road",
  " Pune Railway Station",
  " Rasta Peth",
  "Raviwar Peth",
  "Sadashiv Peth",
  "Sahakar Nagar"
];
const col5 =[
  "Salunke Vihar ",
  " Sasson Road",
  " Satara Road",
  " Senapati Bapat Road ",
  " Shaniwar Peth",
  "Shivaji Nagar",
  "Shukrawar Peth",
  " Sinhagad Road",
  " Somwar Peth",
  " Swargate",
  " Tilak Road",
  " Uruli Devachi",
  " Vadgaon Budruk",
  "Wadgaon Sheri",
  " Viman Nagar",
  " Vishrant Wadi",
  " Wagholi",
  " Wakadewadi",
  " Wanowrie",
];
const Location = (props) => {
  return (
    <div>
      <h2 className={classes.heading}>Location</h2>
      <h4 className={classes.subHeading}>Pune</h4>
      <div className={classes.col1}>
        {col1.map((area) => (
          <div>{area}</div>
        ))}
      </div>
      <div className={classes.col2}>
        {col2.map((area2) => (
          <div>{area2}</div>
        ))}
      </div>
      <div className={classes.col3}>
        {col3.map((area3) => (
          <div>{area3}</div>
        ))}
      </div>
      <div className={classes.col4}>
        {col4.map((area4) => (
          <div>{area4}</div>
        ))}
      </div>
      <div className={classes.col5}>
        {col5.map((area5) => (
          <div>{area5}</div>
        ))}
      </div>
    </div>
  );
};
export default Location;
