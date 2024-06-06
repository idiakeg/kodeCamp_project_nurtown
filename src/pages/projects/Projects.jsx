import { projects } from "../../utils";
import forward from "../../assets/forward_arrow.svg";
import "./Projects.css";
import Pagination from "../../components/pagination/Pagination";

const Projects = () => {
    return (
        <section>
            <div className="wrapper project_container">
                <p className="project_head">
                    <span>Our</span> <br /> Projects
                </p>
                <div className="gallery_separator"></div>
                <div className="project_item_container">
                    {projects.map((item, index) => (
                        <div key={index} className="project_item">
                            <div className="project_image">
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className="project_info">
                                <p className="project_title">{item.title}</p>
                                <p className="project_body">{item.body}</p>
                                <span className="project_viewmore">
                                    View More{" "}
                                    <img src={forward} alt="view more" />
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                <Pagination />
            </div>
        </section>
    );
};

export default Projects;
