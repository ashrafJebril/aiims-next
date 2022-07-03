import left from "../images/arrow-left.svg";
import right from "../images/arrow-right.svg";
import sliderStyles from "../styles/Slider.module.css";
const Slider = () => {
  return (
    <div className="flex justify-center">
      <img src={left.src}></img>
      <div
        className={sliderStyles.main_slider + "flex items-center justify-center"}
      >
        <div>asfga</div>
      </div>
      <img src={right.src}></img>
    </div>
  );
};

export default Slider;
