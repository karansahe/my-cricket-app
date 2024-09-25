import React from "react";

const Navber = () => {
  return (
    <nav className="bg-transparent py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green text-lg font-bold">KhelocricketOrg.</div>
        <div className=" flex items-center gap-9">
          <a href="#" className="text-grey">Home</a>
          <a href="#" className="text-grey">Page</a>
          <a href="#" className="text-grey">Guidlines</a>
          <a href="#" className="text-grey">About</a>
          {/* <a href="#" className="text-grey">Contact</a> */}
          <select className="text-blue rounded-lg p-2">
            <option>English</option>
            <option>Bengali</option>
            <option>Tamil</option>
            <option>Spanish</option>
            <option>French</option>
            <option>Punjabi</option>
            <option>Kannada</option>
            <option>Odia</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 rounded-lg border border-gray-300"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navber;
