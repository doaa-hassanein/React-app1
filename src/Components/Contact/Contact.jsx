import React from 'react';
import Navbar from '../MainNavbar/MainNavbar';
import Footer from '../Footer/Footer';
import { useState } from 'react';
import 'animate.css';


const Contact = () => {

    const nameInput = document.getElementById("nameInput")

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleInputChange = (e, setterFunction) => {
        setterFunction(e.target.value);
        // console.log("hii");
        // nameInput.classList.remove("d-none")
       

    };


    return (
        <div>
            <section className='contact-sec h-75'>
                <div className=" ">
                    <div className="pt-3 container">
                        <div title="contact section" style={{ color: '#2c3e50' }}>
                            <div className="text-center pt-4  contact-header">
                                <h2 className="text-uppercase mb-3 fs-1 fw-bolder">contact component</h2>
                                <div className="d-flex align-items-center justify-content-center mb-3">
                                    <div className="line me-3" ></div>
                                    <i className="fa-solid fa-star me-2 ms-2"></i>
                                    <div className="line ms-3" ></div>
                                </div>
                            </div>
                        </div>
                        <form action="" className="w-50 p-3 mx-auto mt-5">
                        <label htmlFor="userName"  className={ `animate__animated animate__fadeInUp animate__faster position-relative top-0 ${userName ? '' : 'd-none'}`}>userName : </label>
                            <input
                                id="userName"
                                type="text"
                                placeholder="userName"
                                name="userName"
                                className="form-control border-0 border-bottom py-3 position-relative shadow-none"
                                onChange={(e) => handleInputChange(e, setUserName)}
                            />
                          <label htmlFor="userAge" className={`animate__animated animate__fadeInUp animate__faster position-relative top-0 ${userAge ? '' : 'd-none'}`}>userAge : </label>
                            <input
                                id="userAge"
                                type="text"
                                placeholder="userAge"
                                name="userAge"
                                className="form-control border-0 border-bottom py-3 position-relative  shadow-none"
                                onChange={(e) => handleInputChange(e, setUserAge)}
                            />
                            <label htmlFor="userEmail" className={`animate__animated animate__fadeInUp animate__faster position-relative top-0 ${userEmail ? '' : 'd-none'}`}>userEmail : </label>
                            <input
                                id="userEmail"
                                type="text"
                                placeholder="userEmail"
                                name="userEmail"
                                className="form-control border-0 border-bottom py-3 position-relative  shadow-none"
                                onChange={(e) => handleInputChange(e, setUserEmail)}
                                
                            />
                            <label htmlFor="userPassword" className={` animate__animated animate__fadeInUp animate__faster position-relative top-0 ${userPassword ? '' : 'd-none '}`}>userPassword : </label>
                            <input
                                id="userPassword"
                                type="text"
                                placeholder="userPassword"
                                name="userPassword"
                                className="form-control border-0 border-bottom py-3 position-relative  shadow-none"
                                onChange={(e) => handleInputChange(e, setUserPassword)}
                            />
                            <button className="btn mt-4 text-white" style={{ backgroundColor: '#1abc9c' }}>
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>






        </div>
    );
};

export default Contact;
