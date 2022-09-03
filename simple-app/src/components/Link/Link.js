import { Link } from "react-router-dom";

export const LinkRedirection = ({ children, path }) => {
    return (
        <Link to={path}>{children}</Link>
    )
};
