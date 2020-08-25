import React from "react";
import { Button, useColorMode } from "theme-ui";

const BtnChangeColorMode = () => {
  const [colorMode, setColorMode] = useColorMode();
  return (
    <Button
      onClick={() => setColorMode(colorMode === "light" ? "dark" : "light")}
    >
      Toggle {colorMode === "light" ? "Dark" : "Light"}
    </Button>
  );
};

export default BtnChangeColorMode;
