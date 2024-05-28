const MenuItem = ({ item, setActiveItem, setActiveMenu }) => {
  return (
    <li
      onClick={() => {
        setActiveItem(item);
        setActiveMenu(false);
      }}
      className="px-3 py-1 rounded-md hover:bg-zinc-200 duration-200 cursor-pointer"
    >
      {item}
    </li>
  );
};
export default MenuItem;
