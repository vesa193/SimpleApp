import { IconButton } from '@mui/material';
import './Navigation.css';
import { Person2Rounded } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { LinkRedirection } from '../Link/Link';
import { getLocalAccessToken } from '../../utils/utils';

const Navigation = () => {
    const navigate = useNavigate();
    const token = getLocalAccessToken();
    return (
        <nav className="navigation">
            <LinkRedirection path={token ? '/dashboard' : '/'} className="navigation-brand">
                SimpleApp
            </LinkRedirection>
            <IconButton
                onClick={() => navigate('/profile')}
                className="navigation-icon"
                color="primary"
                aria-label="go to profile"
            >
                <Person2Rounded />
            </IconButton>
        </nav>
    );
};

export default Navigation;
