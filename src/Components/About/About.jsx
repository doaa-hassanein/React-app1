import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';



export default function About() {
    return (
        <>
            {/* <section >

                <div className="about">

                    <div className='about-heading'>
                        <h1 className="text-uppercase text-white">
                            about component
                        </h1>

                        <div className='heading-decoration d-flex justify-content-center align-items-center mb-3'>
                            <div className='line me-3'>
                            </div>
                            <i className="fa-solid fa-star me-3"></i>
                            <div className='line me-3'>
                            </div>
                        </div>

                    </div>

                    <div className='container about-text'>

                        <div className="row">
                            <div className="col-md-6 ps-md-5">
                                <div className="inner">

                                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>



            </section> */}
            <Navbar />
            <section className="about text-white d-flex justify-content-center align-items-center">
                <div>
                    <div className="text-center pt-4" style={{ color: 'white' }}>
                        <h2 className="text-uppercase mb-3 fs-1 fw-bolder">About Component</h2>
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <div className="line me-3" style={{ backgroundColor: 'white' }}></div>
                            <i className="fa-solid fa-star me-3"></i>
                            <div className="line ms-3" style={{ backgroundColor: 'white' }}></div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row px-5 ">
                            <div className="col-md-6 ps-md-">
                                <p>
                                    Freelancer is a free Bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                            <div className="col-md-6 pe-5">
                                <p>
                                    Freelancer is a free Bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    )
}