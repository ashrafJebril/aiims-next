import Link from "next/link";

const Header = () => {
  return (
    <div
      className={"h-16 flex items-center  justify-center z-10  fixed w-full "}
    >
      <div className="flex w-3/5 justify-between items-center mt-2 text-white ">
        <Link href="/">
          <div className="flex text-2xl font-bold">
            <div className=""> Venue</div>
            <div className="text-main-red">Now</div>{" "}
          </div>
        </Link>
        <div className="gap-x-2 flex font-bold">
          <button className="border border-white px-4 py-2 text- rounded ">
            List Your Venue
          </button>
          <button className="ml-2 bg-white border text-black border-white py-1 px-4 rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
