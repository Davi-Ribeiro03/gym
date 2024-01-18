import "./App.sass";
import BenefitsHome from "./components/BenefitsHome/BenefitsHome";
import Header from "./components/Header/Header";
import PresentationHome from "./components/PresentationHome/PresentationHome";
import ShapeInfo from "./components/ShapeInfo/ShapeInfo";

function App() {
  return (
    <div className="containerApp">
      <Header />
      <PresentationHome />
      <BenefitsHome />
      <ShapeInfo />
    </div>
  );
}

export default App;
