import logo from "./../../assets/avataaars.svg";

const Project = () => {
  return (
    <div> 
     <section>
        <div className=" home ">
          <div>
            <img className="w-100" src={logo} alt="1" />
          </div>

          <div className="text-center pt-4  home-header">
            <h2 className="text-uppercase mb-3 fs-1 fw-bolder">
              start Framework
            </h2>
            <div className="d-flex align-items-center justify-content-center mb-3">
              <div className="line me-3"></div>
              <i className="fa-solid fa-star me-2 ms-2"></i>
              <div className="line ms-3"></div>
            </div>
          </div>

          <div className="text-white">
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
