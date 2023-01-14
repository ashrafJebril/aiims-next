import Link from "next/link";

const Header = () => {
  return (
    <div
      className={"h-16 flex items-center  justify-center z-10  fixed w-full "}
    >
      <div className="flex w-3/5 justify-between items-center text-white ">
        <Link href="/">
          <div className="flex font-bold">
            <div className=""> Venue</div>
            <div className="text-pink-700">Now</div>{" "}
          </div>
        </Link>
        <div className="gap-x-2 flex">
          <button className="border border-white px-3 text-xs rounded ">
            List Your Venue
          </button>
          <button className="bg-white border text-black border-white py-1 px-2 text-xs rounded">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
