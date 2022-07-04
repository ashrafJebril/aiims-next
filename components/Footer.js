import logo from "../images/logo.svg";
import img1 from "../images/footer/partner1.svg";
import img2 from "../images/footer/partner2.svg";
import img3 from "../images/footer/partner3.svg";
import img4 from "../images/footer/partner4.svg";
import img5 from "../images/footer/partner5.svg";
import solder from "../images/footer/Vector.svg";
import footerStyle from "../styles/Footer.module.css";

const Footer = () => {
  const arr = [img1, img2, img3, img4, img5].map((e,idx) => {
    return <img key={idx} src={e.src} className="mr-6"></img>;
  });
  return (
    <footer className={footerStyle.footer + " text-white flex justify-center "}>
      <div className="flex justify-center flex-col items-center w-4/5 pb-36 ">
        <div className=" mt-8 relative">
          <div className="flex">
            <div className="flex w-1/2 justify-between mr-48 items-start">
              <div className="w-1/3 mr-2">
                <img src={logo.src} className="mr-"></img>
              </div>
              <div>
                <div className="underline hover:text-main-red cursor-pointer text-xs font-bold">
                  How two young brothers 3x their business in 12 months
                </div>
                <h2 className="text-3xl font-bold my-8">
                  Ready to get started?
                </h2>
                <span className="text-sm">
                  We get it, it’s hard knowing where to start. Drop your details
                  below and we can help guide you on a path of success..question
                  is are you ready for it?
                </span>
                <div className="my-8 w-1/2">
                  <div className="flex">
                    <input
                      placeholder="Name"
                      className="bg-black border-b border-gray-700 py-1 mr-4  outline-0"
                    ></input>
                    <input
                      placeholder="Name"
                      className="bg-black border-b border-gray-700 py-1 outline-0"
                    ></input>
                  </div>

                  <input
                    placeholder="Name"
                    className="bg-black border-b border-gray-700 py-1 outline-0 w-full my-2"
                  ></input>
                </div>
                <button className="bg-blue-500 rounded p-2">
                  Yes, show me the way
                </button>
                <div className="flex mt-16">{arr}</div>
              </div>
            </div>
            <div className="flex w-1/2 justify-between items-start">
              <div className="w-1/2 mr-8">
                <h2 className="text-3xl font-bold -mt-4">Surival Kit</h2>
                <div>
                  <div className="text-xs mt-4">Business Profile Building</div>
                  <div className="my-4 text-xs">Google Ads</div>
                  <div className="text-xs">SEO</div>
                  <div className="my-4 text-xs">Video & Photo</div>
                  <div className="text-xs">Web Design & Development</div>
                  <div className=" text-xs my-4">Careers </div>
                </div>
              </div>

              <div className="text-sm">
                <div className="bg-red-400 w-72 h-48 ">
                  How two young brothers 3x their business in 12 months
                </div>
                <div>
                  <div className="flex items-center">
                    <i
                      className="fa fa-map-marker mr-3 text-lg"
                      aria-hidden="true"
                    ></i>

                    <span>6 Palmer Street, Parramatta NSW 2150</span>
                  </div>

                  <div className="w-3/4 my-4 flex items-start">
                    <i className="fas fa-clock mr-3 text-lg"></i>

                    <span>
                      Monday - Friday : 9am - 5pm Saturday/Sunday : Closed
                    </span>
                  </div>
                  <div className="flex items-center">
                    <i className="fa-solid fa-phone mr-3 text-lg"></i>

                    <span>1300 397 603</span>
                  </div>
                </div>
                <div className="w-1/2 flex text-lg mt-6 justify-between ">
                  <i className="fab fa-youtube"></i>
                  <i className="fab fa-whatsapp"></i>
                  <i className="fab fa-tiktok"></i>
                  <i className="fab fa-twitter"></i>
                  <i className="fab fa-instagram"></i>
                  <i className="fab fa-facebook"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-tail bg-red-400  flex justify-start items-center w-full ">
          <div className="flex -mb-48">
            <span className="mr-16 ">© 2022 AiiMS</span>
            <div>
              <span className="mr-4">Privacy</span>
              <span>Terms</span>
            </div>
          </div>
          <img
            src={solder.src}
            className="absolute right-1 bottom-0 w-96  "
          ></img>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
