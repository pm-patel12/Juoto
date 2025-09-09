import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStoreConfig } from "../StoreConfigContext";
import { useModal } from "../hook/useModal";

const MenuLinks = () => {
  // Store configuration (static for now, API later)
  const storeConfig = useStoreConfig();
  const navMenus = storeConfig.navMenus;

  const [menus, setMenus] = useState([]);
  const navigate = useNavigate();
  const { openModal } = useModal();

  // Load menus from store config
  useEffect(() => {
    setMenus(navMenus);
  }, [navMenus]);

  const handleClick = (menu) => {
    console.log("Clicked menu:", menu);

    if (menu.type === "page") {
      if (menu.path?.startsWith("#")) {
        const element = document.querySelector(menu.path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else if (menu.path) {
        navigate(menu.path);
      }
    } else if (menu.type === "popup" && menu.popupId) {
      // openModal accepts modal id and data (menu info)
      openModal("pageModal", { menu });
    }
  };

  if (menus.length <= 0) {
    return null;
  }

  return (
    <nav>
      <ul>
        {menus.map((menu) => (
          <li key={menu.id}>
            <button type="button" onClick={() => handleClick(menu)}>
              {menu.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MenuLinks;
