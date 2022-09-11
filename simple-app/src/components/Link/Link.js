import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import './Link.css';

export const LinkRedirection = ({ children, path, type, isDisabled }) => {
    const linkType =
        type === 'button' ? (
            <Button>
                <Link className="link" to={path}>
                    {children}
                </Link>
            </Button>
        ) : (
            <Link className="link" to={path}>
                {children}
            </Link>
        );

    return !isDisabled ? linkType : <p>{children}</p>;
};

LinkRedirection.defaultProps = {
    type: 'link',
    isDisabled: false,
};

LinkRedirection.propTypes = {
    children: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    type: PropTypes.string,
    isDisabled: PropTypes.bool,
};
