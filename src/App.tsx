import "./App.sass";
import BenefitsHome from "./components/BenefitsHome/BenefitsHome";
import ContainerAssessment from "./components/ContainerAssessments/ContainerAssessment";
import CardMembership from "./components/CardMembership/CardMembership";
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
      <CardMembership />
      <ContainerAssessment />
    </div>
  );
}

export default App;
