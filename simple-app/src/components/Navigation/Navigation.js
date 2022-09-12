import { IconButton } from '@mui/material';
import './Navigation.css';
import { Person2Rounded } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { LinkRedirection } from '../Link/Link';

const Navigation = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogoRedirection = (path) => {
        navigate(path);
    };

    return (
        <nav className="navigation">
            <LinkRedirection
                isDisabled={location.pathname === '/' || location.pathname === '/register'}
                path="/dashboard"
            >
                SimpleApp
            </LinkRedirection>
            {location.pathname !== '/' && location.pathname !== '/register' && (
                <IconButton
                    onClick={() => handleLogoRedirection('/profile')}
                    className="navigation-icon"
                    color="primary"
                    aria-label="go to profile"
                >
                    <Person2Rounded />
                </IconButton>
            )}
        </nav>
    );
};

export default Navigation;
