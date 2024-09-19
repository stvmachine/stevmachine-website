import { Themed } from "@theme-ui/mdx";
import { useState, useEffect } from "react";

const MenuItem = ({ itemName, active }) => {
  /*
   * Store our anchorTarget in state
   * We do not set it here, preferring to wait for after the component
   * is mounted to avoid any errors
   */
  const [anchorTarget, setAnchorTarget] = useState(null);

  /*
   * When the component mounts and/or updates, set our AnchorTarget based
   * on the itemName
   */
  useEffect(() => {
    setAnchorTarget(document.getElementById(itemName));
  }, [itemName]);

  const handleClick = (event) => {
    event.preventDefault();
    anchorTarget.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <li className={active ? "current" : ""}>
      <Themed.a
        href={`#${itemName}`}
        onClick={handleClick}
        ariaLabel={`${itemName}`}
        variant="menuItem"
      >
        {itemName}
      </Themed.a>
    </li>
  );
};

export default MenuItem;
