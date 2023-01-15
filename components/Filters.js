import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Link from "next/link";

import { useState } from "react";
const Filters = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    // update suggestions based on input value
  };
  return (
    <div className="w-full flex flex-col items-center">
      <div className="text-6xl w-1/2 text-center font-bold mb-16">
        Find and book your perfect corporate function venue
      </div>
      <div className="p-2 w-1/2 bg-white flex justify-center rounded-lg">
        <div className="flex items-center h-14 justfy border-r border-red w-1/4 relative">
          <SearchIcon className="text-gray-700 absolute ml-2" />

          <input
            placeholder="What event type ?"
            className="h-full w-full pl-10 px-2 "
            value={inputValue}
            onChange={handleInputChange}
          />
          <KeyboardArrowDownIcon className="text-gray-700 absolute right-1" />
        </div>
        <div className="flex items-center h-14 justfy border-r border-red w-1/4 relative">
          <PermIdentityIcon className="text-gray-700 absolute ml-2 " />

          <input
            placeholder="What event type ?"
            className="h-full w-full pl-10 px-2 "
            value={inputValue}
            onChange={handleInputChange}
          />
          <KeyboardArrowDownIcon className="text-gray-700 absolute right-1" />
        </div>
        <div className="flex items-center h-14 justfy  border-red w-1/4 relative">
          <LocationOnIcon className="text-gray-700 absolute ml-2 " />

          <input
            placeholder="What event type ?"
            className="h-full w-full pl-10 px-2 "
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex  justify-end pl-4  h-14  border-red w-1/4 ">
          <Link href="/search">
            <button className="text-white font-bold bg-main-red w-full hover:bg-red-600  h-14 rounded">
              Search
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Filters;
