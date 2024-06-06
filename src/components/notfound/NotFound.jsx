import { Link } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
    return (
        <section>
            <div className="wrapper notfound_container">
                <p>Page Not Found</p>
                <Link to="/">Return Home</Link>
            </div>
        </section>
    );
};

export default NotFound;
