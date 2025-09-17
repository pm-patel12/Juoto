import { paymentOptions } from "../staticData";
import { TbCheck, TbCopyCheckFilled } from "react-icons/tb";
import DividerTitle from "./DividerTitle";
import { useState } from "react";
import { TbCopy } from "react-icons/tb";
import { useClipboard } from "../hook/useClipboard";
import { TbUpload } from "react-icons/tb";
import { TbExclamationCircle } from "react-icons/tb";
import { useAppContext } from "../ThemeProvider";

const PaymentOptions = () => {
  // Store configuration
  const { storeConfig } = useAppContext();
  const bankInfo = storeConfig.paymentInfo;

  const [selected, setSelected] = useState(null);
  const { copyToClipboard } = useClipboard();
  const [copiedId, setCopiedId] = useState(null);

  const handleCopy = async (text, id) => {
    await copyToClipboard(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) setFileName(file.name);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) setFileName(file.name);
  };

  return (
    <>
      <div className="card p-3 mb-3">
        <div className="d-flex align-items-center justify-content-between gap-2 flex-wrap">
          <p className="m-0 fw-semibold">
            Payment Options <i className="red-text">*</i>
          </p>
        </div>
        <hr />
        <div className="multi-option-select-wrap checkout-service-wrap mb-4">
          {paymentOptions.length > 0 &&
            paymentOptions.map((item, index) => {
              return (
                <div key={index}>
                  <input
                    type="radio"
                    name="payment-option"
                    id={`paymentOption${item.id}`}
                    checked={selected === item.type}
                    onChange={() => setSelected(item.type)}
                  />
                  <label htmlFor={`paymentOption${item.id}`} className="card">
                    <div className="check-icon">
                      <TbCheck />
                    </div>
                    <div className="icon">
                      <img src={item.icon} alt={item.title} />
                    </div>
                    <div>
                      <p>{item.title}</p>
                      <ul>
                        <li>{item.instructions}</li>
                      </ul>
                    </div>
                  </label>
                </div>
              );
            })}
        </div>
        {selected === "bank" && (
          <>
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <p className="m-0 p-0">Account Type:</p>
                <div className="d-flex gap-2 align-items-center">
                  <p className="m-0 p-0">{bankInfo.accountType}</p>
                  <button
                    className="copy"
                    onClick={() =>
                      handleCopy(bankInfo.accountType, "accountType")
                    }
                  >
                    {copiedId === "accountType" ? (
                      <TbCopyCheckFilled />
                    ) : (
                      <TbCopy />
                    )}
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <p className="m-0 p-0">Account Number:</p>
                <div className="d-flex gap-2 align-items-center">
                  <p className="m-0 p-0">{bankInfo.accountNumber}</p>
                  <button
                    className="copy"
                    onClick={() => handleCopy(bankInfo.accountNumber, "accNum")}
                  >
                    {copiedId === "accNum" ? <TbCopyCheckFilled /> : <TbCopy />}
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <p className="m-0 p-0">IFSC Code:</p>
                <div className="d-flex gap-2 align-items-center">
                  <p className="m-0 p-0">{bankInfo.ifscCode}</p>
                  <button
                    className="copy"
                    onClick={() => handleCopy(bankInfo.ifscCode, "ifsc")}
                  >
                    {copiedId === "ifsc" ? <TbCopyCheckFilled /> : <TbCopy />}
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <p className="m-0 p-0">Bank Name:</p>
                <div className="d-flex gap-2 align-items-center">
                  <p className="m-0 p-0">{bankInfo.bankName}</p>
                  <button
                    className="copy"
                    onClick={() => handleCopy(bankInfo.bankName, "bankName")}
                  >
                    {copiedId === "bankName" ? (
                      <TbCopyCheckFilled />
                    ) : (
                      <TbCopy />
                    )}
                  </button>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <p className="m-0 p-0">Branch Name:</p>
                <div className="d-flex gap-2 align-items-center">
                  <p className="m-0 p-0">{bankInfo.branchName}</p>
                  <button
                    className="copy"
                    onClick={() =>
                      handleCopy(bankInfo.branchName, "branchName")
                    }
                  >
                    {copiedId === "branchName" ? (
                      <TbCopyCheckFilled />
                    ) : (
                      <TbCopy />
                    )}
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <p className="mb-2">Upload Payment Proof:</p>
                <div
                  className="file-upload"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <label htmlFor="bankTransProof" className="file-label">
                    <span className="file-button">
                      <TbUpload /> Choose File
                    </span>
                    <input
                      id="bankTransProof"
                      type="file"
                      accept="image/jpeg, image/png, image/webp, image/svg+xml"
                      onChange={handleFileChange}
                      hidden
                    />
                  </label>
                  <p className="file-text">
                    {fileName || "Drop your image here to upload"}
                  </p>
                  <small className="file-info">
                    File types JPEG, PNG, Webp, SVG or Up to 512 KB
                  </small>
                </div>
              </div>
            </div>
          </>
        )}
        {selected === "upi" && (
          <>
            <div className="mb-3">
              <div className="d-flex align-items-center justify-content-between gap-2 mb-3">
                <p className="m-0 p-0">UPI ID:</p>
                <div className="d-flex gap-2 align-items-center">
                  <p className="m-0 p-0">{bankInfo.upiId}</p>
                  <button
                    className="copy"
                    onClick={() => handleCopy(bankInfo.upiId, "upi")}
                  >
                    {copiedId === "upi" ? <TbCopyCheckFilled /> : <TbCopy />}
                  </button>
                </div>
              </div>
              <div className="mb-3">
                <p className="mb-2">Upload Payment Proof:</p>
                <div
                  className="file-upload"
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={handleDrop}
                >
                  <label htmlFor="upiProof" className="file-label">
                    <span className="file-button">
                      <TbUpload /> Choose File
                    </span>
                    <input
                      id="upiProof"
                      type="file"
                      accept="image/jpeg, image/png, image/webp, image/svg+xml"
                      onChange={handleFileChange}
                      hidden
                    />
                  </label>
                  <p className="file-text">
                    {fileName || "Drop your image here to upload"}
                  </p>
                  <small className="file-info">
                    File types JPEG, PNG, Webp, SVG or Up to 512 KB
                  </small>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="notic warning mb-4">
          <TbExclamationCircle />
          <p className="small m-0 p-0">
            Your payment is under processing after UPI or Bank account payment
            option, we will update as soon as confirmation
          </p>
        </div>
        <DividerTitle />
        <button className="ctm-btn btn-lg w-100 dark-theme">Place Order</button>
      </div>
      <p className="small text-center m-0 light-text">
        Safe and Secure Payments. Easy returns. 100% Authentic products.
      </p>
    </>
  );
};

export default PaymentOptions;
