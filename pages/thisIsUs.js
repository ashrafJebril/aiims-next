import ReactPlayer from "react-player";
// import video from "../images/this-is-us_001.mp4";
import Image from "next/image";

import images from "../helper/images";
const allImages = () => {
  return images.map((e) => {
    return (
      <div className="flex flex-col justify-start m-6 text-white">
        <img src={e.src} className="h-96  w-86 " style={{ height: "500px" }} />
        <span className="text-xs mt-4">CLIENT DIRECTOR</span>
        <span className="font-bold">JANTY Ayoub Mohammed</span>
      </div>
    );
  });
};
const ThisISUs = () => {
  //   const allImages = () => {
  //     return images.map((e) => {
  //       console.log(e.src);
  //       return (
  //         <div className="flex flex-col justify-start m-6 text-white" id={e.src}>
  //           <Image
  //             src={e.src}
  //             className="h-96  w-86 "
  //             style={{ height: "500px" }}
  //           />
  //           <span className="text-xs mt-4">CLIENT DIRECTOR</span>
  //           <span className="font-bold">JANTY Ayoub Mohammed</span>
  //         </div>
  //       );
  //     });
  //   };
  return (
    <div>
      {/* <Image
        src="
https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210420155809/gfg-new-logo.png"
        alt="GFG logo served with static path of public directory"
        height="100"
        width="400"
      /> */}
      {/* <ReactPlayer
        className="react-player fixed-bottom"
        url={video}
        width="100%"
        height="100%"
        autoPlay
        muted
        playing={true}
        loop={true}
      /> */}
      <div>
        <div
          className="flex flex-wrap justify-center"
          style={{ background: "#181b1e" }}
        >
          {allImages()}
        </div>
      </div>
    </div>
  );
};

export default ThisISUs;
