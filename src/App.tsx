import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Overview from "./components/Overview/Overview";
import Performance from "./components/Performance/Performance";
import Engine from "./components/Engine/Engine";
import Colors from "./components/Colors/Colors";
import Technology from "./components/Technology/Technology";
import WheelsBrakes from "./components/WheelsBrakes/WheelsBrakes";
import CarExplorer from "./components/CarExplorer/CarExplorer";
import Gallery from "./components/Gallery/Gallery";
import Specifications from "./components/Specifications/Specifications";
import Timeline from "./components/Timeline/Timeline";
import Design from "./components/Design/Design";
// import CarModel from "./components/CarModel3D/CarModel3D";

function App() {
  return (
    <div>
      <Navbar />
      <div id="overview"><Hero /></div>
      {/* <CarModel /> */}
      <Overview />
      <div id="performance"><Performance /></div>
      <div id="engine"><Engine /></div>
      <div id="design"><Design /></div>
      <div id="technology"><Technology /></div>
      <Colors />
      <WheelsBrakes />
      <CarExplorer />
      <div id="gallery"><Gallery /></div>
      <div id="specifications"><Specifications /></div>
      <Timeline />
    </div>
  )
}

export default App;