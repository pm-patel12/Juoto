import { useEffect } from "react";
import { useStoreConfig } from "../StoreConfigContext";

const ThemeVariables = () => {
  const { theme } = useStoreConfig();

  useEffect(() => {
    const root = document.documentElement;

    // Primary Shades
    if (theme?.primaryShades) {
      Object.entries(theme.primaryShades).forEach(([key, value]) => {
        root.style.setProperty(`--color-primary-${key}`, value);
      });
    }

    // Secondary Shades
    if (theme?.secondaryShades) {
      Object.entries(theme.secondaryShades).forEach(([key, value]) => {
        root.style.setProperty(`--color-secondary-${key}`, value);
      });
    }
  }, [theme]);

  return null;
};

export default ThemeVariables;
