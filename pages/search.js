import ChairAltIcon from "@mui/icons-material/ChairAlt";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import Map from "../components/Map";
const search = () => {
  const data = [
    {
      image:
        "https://d326yn2yk9qb38.cloudfront.net/6264/6b91f830-542d-4177-98a3-9bea4f760ccd_630x330.jpeg?bust=undefined",
      title: "Cafe - Venue Hire",
      subTitle: "108 leicetar street , Carton VIC 3053 , Australia",
      chairs: 80,
      guests: 100,
    },
    {
      image:
        "https://d326yn2yk9qb38.cloudfront.net/15125/c6f5a32b-ce6d-47fd-8ec7-f1b170315561_630x330.jpg?bust=undefined",
      title: "Cafe - Venue Hire",
      subTitle: "108 leicetar street , Carton VIC 3053 , Australia",
      chairs: 80,
      guests: 100,
    },
    {
      image:
        "https://d326yn2yk9qb38.cloudfront.net/5549/c508e4d7-f208-4d11-9da7-68905dd8813d_630x330.jpg?bust=undefined",
      title: "Cafe - Venue Hire",
      subTitle: "108 leicetar street , Carton VIC 3053 , Australia",
      chairs: 80,
      guests: 100,
    },
  ];

  return (
    <div
      className="w-full min-h-screen mb-16 gap-x-4 flex"
      style={{ background: "#f7f7f7" }}
    >
      <div className="flex w-full gap-x-4 box">
        {data.map((e) => {
          return (
            <div className=" h-80 mt-24 box bg-white w-1/3 rounded-lg">
              <div
                className="w-full h-48 bg-green-400 rounded-t-lg "
                style={{
                  backgroundImage: "url(" + e.image + ")",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="p-4">
                <div className=" leading-3">
                  <div>{e.title}</div>
                  <div className="text-gray-400 text-sm">{e.subTitle}</div>
                </div>
                <div className="flex items-center mt-2 justify-between">
                  <div className="flex gap-x-4">
                    <div className=" flex items-center text-gray-400">
                      <ChairAltIcon />
                      <div>{e.chairs}</div>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <AccessibilityNewIcon />
                      <div>{e.guests}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-x-1">
                    <div className="text-xs mt-1">FROM</div>
                    <div className="font-bold text-xl">$7,000</div>
                    <div className="text-xs mt-1">AUD</div>
                  </div>
                </div>
              </div>
            </div>
            //   <div className="w-1/4  bg-white flex flex-col justify-start items-start shadow mt-16">
            //     <div
            //       className="w-full h-16 mt-16 bg-green-400 rounded-t-lg "
            //       style={{
            //         backgroundImage: "url(" + e.image + ")",
            //         backgroundPosition: "center",
            //         backgroundSize: "cover",
            //         backgroundRepeat: "no-repeat",
            //       }}
            //     ></div>
            //     <div className="h-18">ashraf</div>
            //   </div>
          );
        })}
      </div>
      <Map />
    </div>
  );
};

export default search;
