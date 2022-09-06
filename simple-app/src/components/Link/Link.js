import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Button } from '@mui/material';
import './Link.css';

export const LinkRedirection = ({ children, path }) => (
  <Button>
    <Link className="link" to={path}>
      {children}
    </Link>
  </Button>
);

LinkRedirection.propTypes = {
  children: PropTypes.string.isRequired,
  path: PropTypes.string,
};
