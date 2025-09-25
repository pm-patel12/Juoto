import { useState } from "react";
import { useModal } from "../hook/useModal";
import { useAppContext } from "../ThemeProvider";
import PageModal from "./modals/PageModal";
import { TbX } from "react-icons/tb";
import { customPageData, faqsData } from "../staticData";

const MenuLinks = () => {
  // Store configuration (static for now, API later)
  const { storeConfig } = useAppContext();
  const navMenus = storeConfig.navMenus;
  const [activeMenus, setActiveMenus] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const { openModal, closeModal } = useModal();

  const openPageModal = (menu) => {
    setShowModal(true);
    setActiveMenus(customPageData[menu.id]);
    setTimeout(() => {
      openModal("pageModal");
    }, 300);
  };
  const closePageModal = () => {
    console.log("df");
    closeModal("pageModal");
    setTimeout(() => {
      setActiveMenus(null);
      setShowModal(false);
    }, 300);
  };

  if (navMenus.length <= 0) {
    return null;
  }

  return (
    <>
      <nav>
        <ul>
          {navMenus.map((menu) => (
            <li key={menu.id}>
              <button type="button" onClick={() => openPageModal(menu)}>
                {menu.name}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* Page Modal */}
      {showModal && (
        <div
          className="modal slide-to-left"
          id="pageModal"
          data-bs-keyboard="true"
          tabIndex="-1"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h3>{activeMenus.title}</h3>
                <button onClick={() => closePageModal()}>
                  <TbX />
                </button>
              </div>
              <div className="modal-body px-0">
                {activeMenus.template == "default" && (
                  <div
                    className="ctm-editor"
                    dangerouslySetInnerHTML={{ __html: activeMenus.content }}
                  />
                )}
                {activeMenus.template == "faq" && (
                  <div className="accordion" id="faqSec">
                    {faqsData.map((faq, index) => (
                      <div className="accordion-item" key={index}>
                        <h2 className="accordion-header">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faq${index}`}
                            aria-expanded="false"
                            aria-controls={`faq${index}`}
                          >
                            {faq.question}
                          </button>
                        </h2>
                        <div
                          id={`faq${index}`}
                          className="accordion-collapse collapse"
                          data-bs-parent="#faqSec"
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuLinks;
