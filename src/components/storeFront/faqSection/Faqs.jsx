import React from "react";
import { faqsData } from "../../../staticData";

const Faqs = () => {
  return (
    <>
      {faqsData.length > 0 && (
        <section className="faq-sec" id="faqSection">
          <div className="container">
            <div className="inner">
              <h2 className="text-center mb-4">Frequently Asked Questions</h2>
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
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Faqs;
