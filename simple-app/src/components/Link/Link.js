import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import './Link.css';

export const LinkRedirection = ({ children, path, type }) =>
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

LinkRedirection.defaultProps = {
    type: 'link',
};

LinkRedirection.propTypes = {
    children: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    type: PropTypes.string,
};
