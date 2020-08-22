/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { useState, useEffect } from "react";

import { NavWrap } from "./Nav.styles";
import MenuItem from "./MenuItem";

/*
 * The list of our Menu Titles (Sections) as keys, with their
 * Y-pixel position on the page as the values
 * 'home' generically references the top of the page
 */
const menuItems = {
  home: 0,
  about: null,
  resume: null,
  portfolio: null,
};

const Nav = () => {
  const [activeItem, setActiveItem] = useState("home");
  const [navIsOpaque, setNavOpaque] = useState(false);
  const [navIsDisplayed, showNav] = useState(true);

  /*
   * The MutationObserver allows us to watch for a few different
   * events, including page resizing when new elements might be
   * added to the page (potentially changing the location of our
   * anchor points)
   * We also listen to the scroll event in order to update based
   * on our user's scroll depth
   */
  useEffect(() => {
    getAnchorPoints();
    const observer = new MutationObserver(getAnchorPoints);
    observer.observe(document.getElementById("__next"), {
      childList: true,
      subtree: true,
    });
    window.addEventListener("scroll", handleScroll);
  }, []);

  /*
   * Programmatically determine where to set AnchorPoints for our Menu
   */
  const getAnchorPoints = () => {
    const curScroll = window.scrollY - 100;
    const viewPortHeight = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0
    );
    for (const key in menuItems) {
      menuItems[key] =
        document.getElementById(key).getBoundingClientRect().top + curScroll;
    }
    const bottom = document.body.offsetHeight;
    handleScroll();
  };

  /*
   * Determine which section the user is viewing, based on their scroll-depth
   * Locating the active section allows us to update our MenuItems to show which
   * item is currently active
   */
  const handleScroll = () => {
    const curPos = window.scrollY;
    let curSection = null;
    /*
     * Iterate through our sections object to find which section matches with
     * the current scrollDepth of the user.
     * NOTE: This code assumes that the sections object is built with an 'ordered'
     * list of sections, with the lowest depth (top) section first and greatest
     * depth (bottom) section last
     * If your items are out-of-order, this code will not function correctly
     */

    if (curPos < menuItems["about"]) {
      curSection = "home";
    } else if (curPos < menuItems["resume"]) {
      curSection = "about";
    } else if (curPos < menuItems["portfolio"]) {
      curSection = "resume";
    } else {
      curSection = "portfolio";
    }
    setActiveItem(curSection);

    // Add some animation to hide the nav menu when we scroll a little but appears again in the second section
    const topSection = menuItems["resume"];
    if (curPos > topSection * 0.2 && curPos < 768) {
      showNav(false);
    } else {
      if (curPos < topSection * 0.2) {
        setNavOpaque(false);
        showNav(true);
      } else {
        setNavOpaque(true);
        showNav(true);
      }
    }
  };

  /*
   * Create the list of MenuItems based on the sections object we have defined above
   */
  return (
    <NavWrap id="nav-wrap" opaque={navIsOpaque} show={navIsDisplayed}>
      {/* ToDo: Add button on mobile to display the navigation menu */}
      <Styled.a className="mobile-btn" href="#nav-wrap" title="Show navigation">
        Show navigation
      </Styled.a>
      <Styled.a className="mobile-btn" href="#home" title="Hide navigation">
        Hide navigation
      </Styled.a>

      <ul id="nav">
        {Object.keys(menuItems).map((item, index) => (
          <MenuItem
            itemName={item}
            key={`menuitem_${index}`}
            active={item === activeItem}
          />
        ))}
      </ul>
    </NavWrap>
  );
};

export default Nav;
