import { useLocation, useNavigate } from 'react-router-dom';

export const NavigateSetter = () => {
    History.navigate = useNavigate();
    const location = useLocation();
    History.state = location?.state;

    return null;
};
