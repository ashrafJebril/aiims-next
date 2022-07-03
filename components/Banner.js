import lionBack from "../images/lion-background.png";
import lion from "../images/lion.gif";
import bannerStyles from "../styles/Banner.module.css";

const Banner = () => {
  return (
    <div
      className={
        bannerStyles.banner + " flex justify-center  items-center text-white"
      }
    >
      <div className="flex  w-full">
        <button className="h-12 -ml-14 bg-main-red rotate-90 text-white mr-6 font-bold   px-6 rounded py-2">
          success stories
        </button>
        <div className="ml-16">
          <span className="text-xl font-bold">Want to</span>
          <div className="text-9xl font-bold">DOMINATE</div>
          <div className="text-5xl font-bold">THE DIGITAL JUNGLE?</div>
        </div>
        <div className="bg-red-400"></div>
      </div>
      <div>
        <div className="relative bg-red-400 ">
          <div className={bannerStyles.rotate}>
            <img src={lionBack.src} />
          </div>
          <div className={bannerStyles.bannerLion + " w-96 h-full "}>
            <img src={lion.src} className="lion-1 "></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
