import { Button, Grid, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { LinkRedirection } from '../../components/Link/Link';
import Wrapper from '../../components/Wrapper/Wrapper';
import { onLogoutRequest } from '../../redux/reducers/user/user';
import './Dashboard.css';

const Dashboard = () => {
    const { user } = useSelector((state) => state?.user?.userData);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <h3>Dashboard</h3>
            <Typography textAlign="center" marginY={4} className="dashboard-content">
                Welcome {user?.username}
            </Typography>
            <Grid display="flex" justifyContent="space-between">
                <Button variant="contained" onClick={() => dispatch(onLogoutRequest())}>
                    Log out
                </Button>
                <LinkRedirection path="/allUsers">All users</LinkRedirection>
            </Grid>
        </Wrapper>
    );
};

export default Dashboard;
