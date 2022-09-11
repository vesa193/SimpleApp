import { IconButton } from '@mui/material';
import './Navigation.css';
import { Person2Rounded } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { LinkRedirection } from '../Link/Link';
import { getLocalAccessToken } from '../../utils/utils';

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoRedirection = (path) => {
        if (location.pathname === '/') return;
        navigate(path);
    };

    return (
        <nav className="navigation">
            <LinkRedirection isDisabled={location.pathname === '/'} path="/dashboard">
                SimpleApp
            </LinkRedirection>
            <IconButton
                onClick={() => handleLogoRedirection('/profile')}
                className="navigation-icon"
                color="primary"
                aria-label="go to profile"
                disabled={location.pathname === '/'}
            >
                <Person2Rounded />
            </IconButton>
        </nav>
    );
};

export default Navigation;
