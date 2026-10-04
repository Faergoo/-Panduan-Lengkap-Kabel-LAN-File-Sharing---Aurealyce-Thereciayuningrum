import Navbar from "./components/Navbar";import Hero from "./components/Hero";
import Introduction from "./components/Introduction";import CableTypes from "./components/CableTypes";
import ToolsMaterials from "./components/ToolsMaterials";import CrimpingGuide from "./components/CrimpingGuide";
import WiringDiagram from "./components/WiringDiagram";import LaptopConnection from "./components/LaptopConnection";
import IPConfiguration from "./components/IPConfiguration";import PingTest from "./components/PingTest";
import FileSharing from "./components/FileSharing";import MediaSection from "./components/MediaSection";
import Footer from "./components/Footer";
export default function App() {
  return (<>
    <div className="bg-deco" aria-hidden="true"><i className="blob b1"/><i className="blob b2"/><i className="grid"/></div>
    <Navbar /><main><Hero />
      <Introduction /><CableTypes /><ToolsMaterials /><CrimpingGuide /><WiringDiagram />
      <LaptopConnection /><IPConfiguration /><PingTest /><FileSharing /><MediaSection />
    </main><Footer /></>);
}
