import React from "react";

function NavBar() {
  const Links = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Library", path: "/library" },
    { label: "Contact", path: "/contact" },
  ];
  return (
    <div className="top-0 sticky bg-white">
      <nav className="flex items-center justify-between p-6 border border-b-2 border-b-[#D1F2F5]/30">
        <div className="mx-12">
          <a href="/">
            <img src="./icons/logo.svg" alt="Logo of the company" width={130} height={2}/>
          </a>
        </div>
        <div className="">
          <ul className="flex justify-center gap-12 items-center">
            {Links.map((item, index) => (
              <li key={index} className="underline-animation">
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
            <button className="px-4 py-2 bg-[#1A58F7] hover:bg-blue-700 hover:text-gray-200 text-white rounded-md mx-12 font-Lato font-medium">
              Get Library
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
