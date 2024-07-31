import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function BasicExample() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary py-4">
            <Container>
                <Link to="/" className="navbar-brand text-white text-uppercase fw-bolder fs-2">
                    Start Framework
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <li className="nav-item me-3">
                            <NavLink
                                to="/about"
                                className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                                style={{ width: 'fit-content' }}> About </NavLink>
                        </li>

                        <li className="nav-item me-3">                           
                             <NavLink to="/portfolio" className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2" style={{ width: 'fit-content' }}>  Portfolio </NavLink>                       
                              </li>
                        <li className="nav-item me-3">                            <NavLink
                            to="/contact"
                            className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
                            style={{ width: 'fit-content' }} >    Contact  </NavLink>
                        </li>


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

//         <nav className="navbar navbar-expand-lg fixed-top py-4 bg-body-tertiary">
//             <div className="container">
//                 <Link to="/" className="navbar-brand text-white text-uppercase fw-bolder fs-2">
//                     Start Framework
//                 </Link>

//                 <button
//                     type="button" className="navbar-toggler collapsed" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                     <span className="navbar-toggler-icon text-white"></span>
//                 </button>

//                 <div id="navbarSupportedContent" className="navbar-collapse collapse">
//                     <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//                         <li className="nav-item me-3">
//                             <NavLink
//                                 to="/about"
//                                 className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
//                                 style={{ width: 'fit-content' }}> About </NavLink>
//                         </li>
//                         <li className="nav-item me-3">
//                             <NavLink
//                                 to="/portfolio"
//                                 className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
//                                 style={{ width: 'fit-content' }}>  Portfolio </NavLink>
//                         </li>
//                         <li className="nav-item me-3">
//                             <NavLink
//                                 to="/contact"
//                                 className="nav-link text-white text-uppercase fw-bold mt-3 mt-md-0 px-2"
//                                 style={{ width: 'fit-content' }} >    Contact  </NavLink>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </nav>

//     );

// };

export default BasicExample;
