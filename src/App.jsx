import React from "react";
import { FrontVideo } from "./component/FrontVideo"; 
import Navbar from "./component/Navber"; 
import ReactDOM from 'react-dom/client';
import './index.css'; // Import Tailwind and custom CSS
import Slider from "./component/Slider";
import Roadmap from "./component/Roadmap";
import TopBar from "./component/TopBar";
import Schedule from "./component/Schedule";
import AboutUs from "./component/AboutUs";
import Footer from "./component/Footer";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <FrontVideo />
      <Slider/>
      <Schedule/>
      <Roadmap/>
      <AboutUs/>
      <Footer/>
      
    </div>
  );
}


export default App;
