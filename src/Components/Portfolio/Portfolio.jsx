import React, { useState } from "react";
import Navbar from "../MainNavbar/MainNavbar";
import Footer from "../Footer/Footer";
import img1 from "./../../assets/poert1.png";
import img2 from "./../../assets/port2.png";
import img3 from "./../../assets/port3.png";
import { Modal } from "react-bootstrap";

const Portfolio = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleShow = (imgSrc) => {
    setSelectedImage(imgSrc);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div>
     
      <section className="protfolio-sec mb-5 h-100">
        <div className=" ">
          <div className="pt-3 container">
            <div title="protfolio section" style={{ color: "#2c3e50" }}>
              <div className="text-center pt-4  protfolio-header">
                <h1 className="text-uppercase mb-3 fs-1 fw-bolder">
                  Portfolio component
                </h1>
                <div className="d-flex align-items-center justify-content-center mb-3 ">
                  <div className="line me-3"></div>
                  <i className="fa-solid fa-star me-2 ms-2"></i>
                  <div className="line ms-3"></div>
                </div>
              </div>
            </div>

            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <div className="inner" onClick={() => handleShow(img1)}>
                  <img
                    src={img1}
                    alt="1"
                    className="w-100 rounded-3"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="desc rounded-3">
                    <i className="fa-solid fa-plus text-white fa-9x"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="inner" onClick={() => handleShow(img2)}>
                  <img
                    src={img2}
                    alt="2"
                    className="w-100 rounded-3"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="desc rounded-3">
                    <i className="fa-solid fa-plus text-white fa-9x"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="inner" onClick={() => handleShow(img3)}>
                  <img
                    src={img3}
                    alt="3"
                    className="w-100 rounded-3"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="desc rounded-3">
                    <i className="fa-solid fa-plus text-white fa-9x"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="inner" onClick={() => handleShow(img1)}>
                  <img
                    src={img1}
                    alt="1"
                    className="w-100 rounded-3"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="desc rounded-3">
                    <i className="fa-solid fa-plus text-white fa-9x"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="inner" onClick={() => handleShow(img2)}>
                  <img
                    src={img2}
                    alt="2"
                    className="w-100 rounded-3"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="desc rounded-3">
                    <i className="fa-solid fa-plus text-white fa-9x"></i>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6">
                <div className="inner" onClick={() => handleShow(img3)}>
                  <img
                    src={img3}
                    alt="3"
                    className="w-100 rounded-3"
                    style={{ cursor: "pointer" }}
                  />
                  <div className="desc rounded-3">
                    <i className="fa-solid fa-plus text-white fa-9x"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body style={{ padding: 0, margin: 0 }}>
          <img src={selectedImage} alt="Preview" className="img-fluid" />
        </Modal.Body>
      </Modal>

      <style jsx="true">{`
        .modal {
          background-color: rgba(13, 110, 253, 0.25);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
