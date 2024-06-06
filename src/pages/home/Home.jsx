import "./Home.css";
import forward from "../../assets/forward_arrow.svg";
import backward from "../../assets/back_arrow.svg";
import home1 from "../../assets/home/home_img1.svg";
import home2 from "../../assets/home/home_img2.svg";
import home3 from "../../assets/home/home_img3.svg";
import home4 from "../../assets/home/home_img4.svg";
import number_one from "../../assets/number_one.svg";
import number_two from "../../assets/number_two.svg";
import home_prj1 from "../../assets/home/home_project1.svg";
import home_prj2 from "../../assets/home/home_project2.svg";
import home_prj3 from "../../assets/home/home_project3.png";
import home_prj4 from "../../assets/home/home_project4.png";
import home_prj5 from "../../assets/home/home_project5.svg";
import white_arrow from "../../assets/white_arrow.svg";
import contact_us_img from "../../assets/home/home_contactus.svg";
import { useState } from "react";

const Home = () => {
    const [flag, setFlag] = useState({
        phone_no: false,
        email: false,
        message: false,
    });
    const handleChange = (e) => {
        if (e.target.value !== " ") {
            setFlag((prev) => {
                return {
                    ...prev,
                    [e.target.name]: true,
                };
            });
        }

        if (e.target.value === "") {
            setFlag(false);
        }
    };
    return (
        <section>
            <div className="wrapper home_container">
                <div className="project_lorum">
                    <div className="left">
                        <p>
                            PROJECT <br />
                            <span>Lorum</span>
                        </p>
                        <div className="home_pag_arrow">
                            <span>
                                <img src={backward} alt="backward" />
                            </span>
                            <span>
                                <img src={forward} alt="forward" />
                            </span>
                        </div>
                        <div className="home_pag_pagi_info">
                            <span>01</span>
                            <span className="home_pag_pagi_separator"></span>
                            <span>02</span>
                        </div>
                    </div>
                    <div className="right">
                        <img src={home1} alt="project lorum" />
                        <span className="home_view_project">
                            View Project <img src={forward} alt="view more" />
                        </span>
                    </div>
                </div>
                <div className="about_us">
                    <div className="left">
                        <div className="two_img">
                            <img src={home2} alt="about us" />
                            <img src={home4} alt="about us" />
                        </div>
                        <div className="one_img">
                            <img src={home3} alt="about us" />
                        </div>
                    </div>
                    <div className="right">
                        <p className="about_us_head">About</p>
                        <p className="about_us_body">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                        <span className="about_us_btn home_btn">
                            READ MORE <img src={forward} alt="continue" />
                        </span>
                    </div>
                </div>
                <div className="mission_statement">
                    <p className="ms_head">Main Focus/Mission Statement</p>
                    <div className="ms_container">
                        <div className="ms_one">
                            <span className="ms_number">
                                <img
                                    src={number_one}
                                    alt="first mission statement"
                                />
                            </span>
                            <div className="ms_content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed efficitur, lectus et
                                facilisis placerat.
                            </div>
                        </div>
                        <div className="ms_two">
                            <div className="ms_number">
                                <img
                                    src={number_two}
                                    alt="second mission statement"
                                />
                            </div>
                            <div className="ms_content">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed efficitur, lectus et
                                facilisis placerat, magna mauris porttitor
                                tortor, a auctor est felis ut nisl.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our_projects">
                    <div className="op_head">Our Projects</div>
                    <div className="op_container">
                        <div className="overlay_doings">
                            <img src={home_prj1} alt="home project" />
                        </div>
                        <img src={home_prj2} alt="home project" />
                        <img src={home_prj3} alt="home project" />
                        <img src={home_prj4} alt="home project" />
                        <img src={home_prj5} alt="home project" />
                    </div>
                    <div className="all_projects">
                        <span className="projects_btn home_btn">
                            ALL PROJECTS
                            <img src={white_arrow} alt="continue" />
                        </span>
                    </div>
                </div>
                <div className="contact_us">
                    <p className="contact_us_head">Contact Us</p>
                    <div className="contact_container">
                        <div className="contact_form">
                            <input type="text" placeholder="Name" />
                            <div className="required">
                                <input
                                    className={`${
                                        flag.phone_no ? "changed" : ""
                                    }`}
                                    onChange={(e) => handleChange(e)}
                                    type="number"
                                    name="phone_no"
                                    placeholder="Phone Number"
                                />
                                <span className="asterisk">*</span>
                            </div>
                            <div className="required">
                                <input
                                    className={`${flag.email ? "changed" : ""}`}
                                    type="email"
                                    onChange={(e) => handleChange(e)}
                                    placeholder="Email"
                                    name="email"
                                />
                                <span className="asterisk email">*</span>
                            </div>
                            <input type="text" placeholder="Interest In" />
                            <div className="required">
                                <textarea
                                    onChange={(e) => handleChange(e)}
                                    name="message"
                                    placeholder="Message"
                                    id=""
                                    cols="30"
                                    rows="10"
                                    className={`${
                                        flag.message ? "changed" : ""
                                    }`}
                                ></textarea>
                                <span className="asterisk msg">*</span>
                            </div>
                        </div>
                        <div className="contact_us_image">
                            <img src={contact_us_img} alt="contact us" />
                        </div>
                    </div>
                    <span className="contact_us_btn home_btn">
                        SEND EMAIL
                        <img src={white_arrow} alt="continue" />
                    </span>
                </div>
            </div>
        </section>
    );
};

export default Home;
