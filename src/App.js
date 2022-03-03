import styles from "../src/components/styles.module.css";
import Location from "./components/Location/Location";
import Header from "./components/Header/Header";
import MainHeader from "./components/Header/MainHeader";
import MainBody from "./components/MainBody/MainBody";
import MobileApp from "./components/App/MobileApp";
import Category from "./components/Categories/Category";

function App() {
  return (
    <div>
      <Header></Header>
      <MainHeader></MainHeader>
      <hr className={styles.line1} />
      <MainBody />
      <MobileApp></MobileApp>
      <hr className={styles.line2} />
      <Category></Category>
      <hr className={styles.line3} />
      <Location></Location>
      <div className={styles.rectangle}></div>
    </div>
  );
}

export default App;
