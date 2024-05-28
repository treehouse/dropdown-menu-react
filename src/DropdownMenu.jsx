import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import MenuItem from "./MenuItem";

const itemInfo = ["cat", "dog", "bird", "snake", "fish", "giraffe"];

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div
      className={`${
        activeMenu
          ? "rounded-br-none rounded-bl-none"
          : "rounded-br-md rounded-bl-md"
      } rounded-tl-md rounded-tr-md bg-white p-3 w-full max-w-[250px] flex justify-between items-center relative duration-200`}
    >
      {activeItem === null ? (
        <p className="text-zinc-500">Choose an animal:</p>
      ) : (
        <p>{activeItem}</p>
      )}
      <button
        onClick={() => {
          setActiveMenu(!activeMenu);
        }}
        className="bg-blue-500 w-[40px] h-[40px] rounded-md grid place-items-center text-white hover:bg-blue-600 duration-200"
      >
        <IoIosArrowDown />
      </button>

      {/* menu */}
      <div
        className={`${
          activeMenu ? "top-full" : "top-1/2 opacity-0 pointer-events-none"
        } w-full bg-white absolute left-0 duration-200 rounded-bl-md rounded-br-md`}
      >
        <ul className="p-1">
          {itemInfo.map((item, index) => {
            return (
              <MenuItem
                item={item}
                key={index}
                setActiveItem={setActiveItem}
                setActiveMenu={setActiveMenu}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default DropdownMenu;
