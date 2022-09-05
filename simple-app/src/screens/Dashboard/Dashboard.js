import { Button, Grid, Typography } from '@mui/material';
import { LinkRedirection } from '../../components/Link/Link';
import Wrapper from '../../components/Wrapper/Wrapper';
import { useAuth } from '../../hooks/useAuth';
import './Dashboard.css';

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <Wrapper>
      <h3>Dashboard</h3>
      <Typography textAlign="center" marginY={4} className="dashboard-content">
        Welcome {user.data.username}
      </Typography>
      <Grid display="flex" justifyContent="space-between">
        <Button variant="contained" onClick={logout}>
          Log out
        </Button>
        <LinkRedirection path="/allUsers">All users</LinkRedirection>
      </Grid>
    </Wrapper>
  );
};

export default Dashboard;
