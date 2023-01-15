import Filters from "../components/Filters";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  {
    url: "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fyour-desk.a0ebf559.jpg&w=2048&q=75",
  },
  {
    url: "https://venuenow.com/_next/image?url=%2F_next%2Fst…c%2Fmedia%2Fverandah-bar.c6c03f18.jpg&w=2048&q=75",
  },
  {
    url: "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fqt-sydney.7a9475f0.jpg&w=2048&q=75",
  },
];

const Slider = () => {
  return (
    <div style={{ height: "400px" }}>
      <SimpleImageSlider
        width="100%"
        height={600}
        images={images}
        autoPlay={true}
        // showBullets={true}
        // showNavs={true}
      />

      <div className="overlay text-white flex justify-center items-center">
        <Filters />
      </div>
    </div>
  );
};

export default Slider;
