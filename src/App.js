import "./styles.css";
import Nfts from "./component/Nfts";
import Trending from "./component/Trending";
import Explore from "./component/Explore";
import Resource from "./component/Resource";
import Accord from "./component/Accord";
import Partner from "./component/Partner";
import Footer from "./component/Footer";
export default function App() {
  return (
    <div>
      <Nfts />
      <Partner />
      <Trending />
      <Explore />
      <Accord />
      <Resource />
      <Footer />
    </div>
  );
}
