import { useState } from "react";
import { TbUpload, TbTrashX } from "react-icons/tb";

const StoreCreationSteps = () => {
  const [logoFile, setLogoFile] = useState("");
  const [prevUrl, setPrevUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(URL.createObjectURL(file));
    if (file) {
      setLogoFile(file);
      setPrevUrl(URL.createObjectURL(file));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setLogoFile(file.name);
      setPrevUrl(URL.createObjectURL(file));
    }
  };
  return (
    <>
      <div className="store-creation-steps-page">
        <div className="container">
          <div className="inner">
            <div className="tab-indicator"></div>
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-10 col-12 mx-auto">
                {/* Step 1 */}
                <div className="form-wrap mb-3">
                  <div className="mb-4">
                    <h3 className="mb-0">Now let's create your store</h3>
                    <p className="small light-text">
                      Don't worry - you can always change this information later
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">
                      Store / Business Name
                    </label>
                    <input type="text" className="form-control" />
                    <p className="small text-end light-text fw-normal">
                      Will appear on store title, receipts, invoices, and other.
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">Store URL</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="www.juoto.store /"
                    />
                    <p className="small text-end light-text fw-normal">
                      Link to your store. Changing this will break your existing
                      QR code and shared links.
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Store Tagline (Optional)
                    </label>
                    <textarea className="form-control"></textarea>
                    <p className="small text-end light-text fw-normal">
                      0/100 Characters
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">Category Type</label>
                    <select className="form-control">
                      <option value="">Select Business Category</option>
                    </select>
                  </div>
                  <button className="w-100 ctm-btn mt-4 btn-lg">
                    Continue
                  </button>
                </div>
                {/* Step 2 */}
                <div className="form-wrap mb-3">
                  <div className="mb-4">
                    <h3 className="mb-0">Where is Your Store Located?</h3>
                    <p className="small light-text">
                      Add your complete store address so customers worldwide can
                      easily find
                      <br className="d-none d-md-block" /> and connect with you.
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">
                      Street Address / Building / Shop No.
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">
                      Area / Locality
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">City</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">
                      State / Province / Region
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">
                      Postal / Zip Code
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label required">Country</label>
                    <select className="form-control">
                      <option value="">Select Country</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="checkbox"
                        id="storeOnMap"
                        className="form-control p-0"
                      />
                      <label
                        htmlFor="storeOnMap"
                        className="small light-text fw-normal m-0 cursor-pointer"
                      >
                        Add my store on map?
                      </label>
                    </div>
                  </div>
                  <button className="w-100 ctm-btn mt-4 btn-lg">
                    Continue
                  </button>
                </div>
                {/* Step 3 */}
                <div className="form-wrap mb-3">
                  <div className="mb-4">
                    <h3 className="mb-0">Make Your Store Look Unique</h3>
                    <p className="small light-text">
                      Customize your store with your logo and brand colors.
                      Based on your logo.
                    </p>
                  </div>
                  <div className="mb-3">
                    <label className="form-label required mb-1">
                      Upload Store Logo:
                    </label>
                    <div
                      className="file-upload"
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={handleDrop}
                    >
                      {!prevUrl ? (
                        <>
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
                            {logoFile.name || "Drop your image here to upload"}
                          </p>
                          <small className="file-info">
                            File types JPEG, PNG, Webp, SVG or Up to 512 KB
                          </small>
                        </>
                      ) : (
                        <>
                          <button className="file-remove">
                            <TbTrashX />
                          </button>
                          <div className="file-prev">
                            <img src={prevUrl && prevUrl} alt={logoFile.name} />
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="mb-3">
                    <label className="form-label required mb-1">
                      Choose Store Primary Color
                    </label>
                  </div>
                  <button className="w-100 ctm-btn mt-4 btn-lg">
                    Continue
                  </button>
                </div>
                {/* Step 4 */}
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </>
  );
};

export default StoreCreationSteps;
