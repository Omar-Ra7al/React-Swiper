import "./App.css";
import img1 from "./assets/Black Gold Dynamic Business Circle Profile Image.png";
import img2 from "./assets/Black Gold Dynamic Business Circle Profile Image (2).png";
import img3 from "./assets/Black Gold Dynamic Business Circle Profile Image (1).png";
import Swiper from "./Swiper/Swiper";
import { useState } from "react";
function App() {
  const [autoSlide, setautoSlide] = useState(true);
  return (
    <>
      <h1>React Swiper</h1>
      <div className="auto-slide">
        <p>Auto Slide</p>
        <div className="actions">
          <button
            onClick={() => {
              setautoSlide(false);
            }}>
            Stop
          </button>
          <button
            onClick={() => {
              setautoSlide(true);
            }}>
            Work
          </button>
        </div>
      </div>

      <Swiper autoSlide={autoSlide} slideTime={3000}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
      </Swiper>
    </>
  );
}

export default App;
