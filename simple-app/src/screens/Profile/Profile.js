import { useSelector } from 'react-redux';
import Wrapper from '../../components/Wrapper/Wrapper';

const Profile = () => {
    const userData = useSelector((state) => state.user?.userData);
    return (
        <Wrapper>
            <p>
                <b>Username</b>: {userData?.user?.username || ''}
            </p>
            <br />
            <p>
                <b>User id</b>: {userData?.user?.id || ''}
            </p>
            <br />
            <p>
                <b>User was created at</b>: {userData?.user?.createdAt || ''}
            </p>
        </Wrapper>
    );
};

export default Profile;
