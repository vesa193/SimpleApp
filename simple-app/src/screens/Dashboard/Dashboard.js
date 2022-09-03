import { LinkRedirection } from "../../components/Link/Link";
import { useAuth } from "../../hooks/useAuth";
import './Dashboard.css';

const Dashboard = () => {
    const { user, logout } = useAuth();

    return (
        <div>
            <h3>Dashboard</h3>
            <p className="dashboard-content">Welcome {user.data.username}</p>
            <button onClick={logout}>Log out</button>
            <br />
            <br />
            <div>
                <LinkRedirection path="/allUsers">All users</LinkRedirection>
            </div>
        </div>
    );
};

export default Dashboard;