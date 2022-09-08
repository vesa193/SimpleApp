import { Button, Grid, TextField } from '@mui/material';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LinkRedirection } from '../../components/Link/Link';
import Wrapper from '../../components/Wrapper/Wrapper';
import { onRegisterFailed, onRegisterRequest } from '../../redux/reducers/user/user';
import './Register.css';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { errorMessage } = useSelector((state) => state.user);
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    useEffect(
        () => () => {
            dispatch(onRegisterFailed(''));
        },
        [dispatch]
    );

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

    const onRegister = (e) => {
        e.preventDefault();
        dispatch(onRegisterRequest({ formData, cb: redirectTo }));
    };

    return (
        <Wrapper>
            <h3 className="register-title">Registration</h3>
            <form onSubmit={onRegister}>
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
                <Grid marginTop={2} display="flex" justifyContent="space-between">
                    <LinkRedirection path="/" replace>
                        Login
                    </LinkRedirection>
                    <Button variant="contained" type="submit">
                        Register
                    </Button>
                </Grid>
            </form>

            {errorMessage && <p className="login-error-message">{`${errorMessage}`}</p>}
        </Wrapper>
    );
};

export default Register;
