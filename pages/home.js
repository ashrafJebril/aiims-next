import Slider from "../components/Crousel";
import Logos from "../components/Logos";

const Home = () => {
  const images = [
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcase-corporate-function.1893d4e0.jpg&w=2048&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcase-conference.826be176.jpg&w=2048&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial-event-christmas-party.129d6473.jpg&w=2048&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fshowcase-meeting.faf95e9c.jpg&w=2048&q=75",
    ,
    "https://venuenow.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsocial-event-birthday-party.c0d95875.jpg&w=2048&q=75",
  ];
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div className="mt-36">asfgsa</div>
      <Logos />
      <div className="flex flex-col items-center mt-16 ">
        <div className="text-4xl font-bold ">
          Australia's top venue hire platform to find, compare & book event
          space.
        </div>
        <div className="w-1/2 text-xl mt-2 text-center">
          We help you find the perfect venue based on your needs, whatever the
          occasion. From hotels to rooftop bars, discover over 5,000 popular
          venues across Australia to host your next function.
        </div>
        <div className="flex gap-x-4 my-8 justify-between w-3/5">
          {images.map((e) => {
            return (
              <div
                className="w-1/5  rounded-lg hover:shadow-2xl"
                style={{
                  backgroundImage: "url(" + e + ")",

                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  height: "220px",
                }}
              ></div>
            );
          })}
        </div>
        <div className="mb-8">
          <button className="border border-black rounded font-bold px-4 p-2 text-xl">
            View More Events Types
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
