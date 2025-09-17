import { useEffect } from "react";
import { useAppContext } from "../ThemeProvider";

const ThemeVariables = () => {
  const { themeColors } = useAppContext();

  useEffect(() => {
    const root = document.documentElement;

    // Primary Shades
    if (themeColors) {
      Object.entries(themeColors).forEach(([key, value]) => {
        root.style.setProperty(`--color-primary-${key}`, value);
      });
    }
  }, [themeColors]);

  return null;
};

export default ThemeVariables;
