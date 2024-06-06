import "./Gallery.css";
import img1 from "../../assets/gallery_page_img/gallery_img1.svg";
import img2 from "../../assets/gallery_page_img/gallery_img2.svg";
import img3 from "../../assets/gallery_page_img/gallery_img3.svg";
import img4 from "../../assets/gallery_page_img/gallery_img4.svg";
import img5 from "../../assets/gallery_page_img/gallery_img5.svg";
import img6 from "../../assets/gallery_page_img/gallery_img6.svg";
import img7 from "../../assets/gallery_page_img/gallery_img7.svg";
import img8 from "../../assets/gallery_page_img/gallery_img8.svg";
import img9 from "../../assets/gallery_page_img/gallery_img9.svg";
import Pagination from "../../components/pagination/Pagination";

const Gallery = () => {
    return (
        <section>
            <div className="gallery_container wrapper">
                <p className="gallery_head">
                    <span>Photo</span>
                    <br />
                    Gallery
                </p>
                <div className="gallery_separator"></div>
                <div className="gallery_img_container">
                    <div className="gallery_img">
                        {/* <img src="" alt="gallery showcase" /> */}
                    </div>
                    <div className="gallery_img">
                        <img src={img1} alt="gallery showcase" />
                    </div>
                    <div className="gallery_img">
                        <img src={img2} alt="gallery showcase" />
                    </div>
                    <div className="gallery_img">
                        <img src={img3} alt="gallery showcase" />
                    </div>
                    <div className="gallery_img">
                        <img src={img4} alt="gallery showcase" />
                    </div>
                    <div className="gallery_img">
                        <img src={img5} alt="gallery showcase" />
                    </div>
                    <div className="gallery_img">
                        <img src={img6} alt="gallery showcase" />
                    </div>
                    <div className="gallery_img">
                        <img src={img7} alt="gallery showcase" />
                    </div>
                    <div className="gallery_img">
                        <img src={img8} alt="gallery showcase" />
                    </div>
                    <div className="gallery_img">
                        <img src={img9} alt="gallery showcase" />
                    </div>
                </div>
                <Pagination />
            </div>
        </section>
    );
};

export default Gallery;
