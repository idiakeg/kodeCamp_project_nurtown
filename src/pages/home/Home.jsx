import "./Home.css";
import forward from "../../assets/forward_arrow.svg";
import backward from "../../assets/back_arrow.svg";
import home1 from "../../assets/home/home_img1.svg";
import home2 from "../../assets/home/home_img2.svg";
import home3 from "../../assets/home/home_img3.svg";
import home4 from "../../assets/home/home_img4.svg";

const Home = () => {
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
            </div>
        </section>
    );
};

export default Home;
