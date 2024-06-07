import "./Pagination.css";
import forward from "../../assets/forward_arrow.svg";
import backward from "../../assets/back_arrow.svg";

const Pagination = () => {
    return (
        <div className="pagination">
            <span>01</span>
            <span className="pagination_slash"></span>
            <span>05</span>
            <span className="pagination_direction">
                <img src={backward} alt="go back" />
            </span>
            <span className="pagination_direction">
                <img src={forward} alt="go forward" />
            </span>
        </div>
    );
};

export default Pagination;
