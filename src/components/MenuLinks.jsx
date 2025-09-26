import { useState } from "react";
import { useModal } from "../hook/useModal";
import { useAppContext } from "../ThemeProvider";
import PageModal from "./modals/PageModal";
import {
  TbClock,
  TbInfoCircle,
  TbMapPin,
  TbPhoneCall,
  TbX,
} from "react-icons/tb";
import { customPageData } from "../staticData";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

const MenuLinks = () => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const brandInfo = storeConfig.brandInfo;
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

  const onInit = () => {
    console.log("lightGallery has been initialized");
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
                {/* Defult text content Template */}
                {activeMenus.template == "default" && (
                  <div
                    className="ctm-editor"
                    dangerouslySetInnerHTML={{ __html: activeMenus.content }}
                  />
                )}
                {/* FAQs Type Template */}
                {activeMenus.template == "faq" && (
                  <div className="faq-sec p-0 bg-transparent">
                    <div className="accordion">
                      {activeMenus.content.map((faq, index) => (
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
                  </div>
                )}
                {/* Gallery Type Template */}
                {activeMenus.template == "gallery" && (
                  <LightGallery
                    onInit={onInit}
                    speed={500}
                    plugins={[]}
                    elementClassNames="gallery-wrap"
                  >
                    {activeMenus.content.map((item, index) => {
                      return (
                        <a href={item.src} className="img-wrap" key={index}>
                          <img alt="img1" src={item.thumbnail} />
                        </a>
                      );
                    })}
                  </LightGallery>
                )}
                {/* Contact us Template */}
                {activeMenus.template == "contact" && (
                  <ul className="store-meta">
                    <li>
                      <TbPhoneCall /> {brandInfo.number}
                    </li>
                    <li>
                      <TbClock />
                      Open | 11:00 AM – 11:00 PM
                    </li>
                    <li>
                      <TbMapPin /> {brandInfo.address}
                    </li>
                  </ul>
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
