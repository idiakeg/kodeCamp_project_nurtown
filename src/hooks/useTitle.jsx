import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        // obtain the previous title
        const previousTitle = document.title;
        // change the title to what ever string was passed in by the current page component
        document.title = title;
        // run a clean up function that returns the title to the previous title when a component unmounts
        return () => {
            document.title = previousTitle;
        };
    }, [title]);
};

export default useTitle;
