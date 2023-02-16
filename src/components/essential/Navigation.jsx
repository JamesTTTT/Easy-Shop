import React from "react";
import { navigationItems } from "@/data/general";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
const Navigation = () => {
  const navItems = () => {
    return navigationItems.map((item, index) => {
      return (
        <li key={index}>
          <Link
            href={item.route}
            className="flex font-semibold items-center text-2xl py-3 my-1 hover:bg-background rounded-2xl hover:bg-gray-200"
          >
            <span className="px-4">{item.title}</span>
          </Link>
        </li>
      );
    });
  };

  return (
    <nav className="sticky w-screen bg-white flex px-8 justify-between">
      <ul className="flex justify-start items-center  w-1/3">{navItems()}</ul>
      <h1 className="font-bold text-4xl p-3 w-1/3 flex justify-center">
        Easy-Shop
      </h1>
      <ul className="flex text-2xl w-1/3 justify-end ">
        <li className="p-3 bg-black rounded-full text-white flex items-center m-2">
          <AiOutlineShoppingCart />
        </li>
        <li className="p-3 bg-black rounded-full text-white flex items-center m-2">
          <AiOutlineUser />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
