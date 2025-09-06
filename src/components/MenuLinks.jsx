import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStoreConfig } from '../StoreConfigContext';
import { useModal } from '../hook/useModal';

const MenuLinks = () => {
    // Store configuration
    const storeConfig = useStoreConfig();
    const navMenus = storeConfig.navMenus;

    const [menus, setMenus] = useState([]);
    const navigate = useNavigate();
    const { openModal } = useModal();

    useMemo(() => {
        setMenus(navMenus)
    }, []);


    const handleClick = (menu) => {
        console.log(menu)
        if (menu.type === "page") {
            if (menu.path.startsWith("#")) {
                const element = document.querySelector(menu.path);
                if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                }
            } else {
                navigate(menu.path);
            }
        } else if (menu.type === "popup" && menu.popupId) {
            console.log(menu.popupId)
            openModal(menu.popupId);
        }
    };


    if (menus.length <= 0) {
        return;
    }
    return (
        <>
            <ul>
                {
                    menus.map((menu, index) => {
                        return (
                            <li key={index}>
                                <button onClick={() => handleClick(menu)}>{menu.name}</button>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default MenuLinks