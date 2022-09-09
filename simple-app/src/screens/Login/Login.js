import { Box, Button, Grid, TextField } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkRedirection } from '../../components/Link/Link';
import Wrapper from '../../components/Wrapper/Wrapper';
import { onLoginRequest } from '../../redux/reducers/user/user';
import './Login.css';

const Login = () => {
    // const { login, logout } = useAuth();
    const { errorMessage } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    // useEffect(
    //     () => () => {
    //         dispatch(onLoginFailed(''));
    //     },
    //     [dispatch]
    // );

    const onChangeHandler = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const redirectTo = (path) => {
        navigate(path, { replace: true });
    };

    const onLogin = (e) => {
        e.preventDefault();
        dispatch(onLoginRequest({ formData, cb: redirectTo }));
    };

    return (
        <Wrapper>
            <h3 className="login-title">Login</h3>
            <form onSubmit={onLogin}>
                <Box className="login-inputs">
                    <TextField
                        fullWidth
                        margin="normal"
                        type="text"
                        name="username"
                        placeholder="Username"
                        onChange={onChangeHandler}
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={onChangeHandler}
                    />
                </Box>
                <Grid marginTop={2} display="flex" justifyContent="space-between">
                    <LinkRedirection path="/register">Register</LinkRedirection>
                    <Button variant="contained" type="submit">
                        Login
                    </Button>
                </Grid>

                {errorMessage && <p className="login-error-message">{`${errorMessage}, please make an account.`}</p>}
            </form>
        </Wrapper>
    );
};

Login.defaultProps = {
    // onSubmitHandler: () => null,
    // errorMessage: '',
};

Login.propTypes = {
    // onSubmitHandler: PropTypes.func,
    // onChangeHandler: PropTypes.func.isRequired,
    // setErrorMessage: PropTypes.func.isRequired,
    // errorMessage: PropTypes.string,
};

export default Login;
