import { Box, Button, Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { LinkRedirection } from '../../components/Link/Link';
import Wrapper from '../../components/Wrapper/Wrapper';
import './Login.css';

const Login = ({ onSubmitHandler, onChangeHandler, errorMessage }) => (
  <Wrapper>
    <h3 className="login-title">Login</h3>
    <form onSubmit={onSubmitHandler}>
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
        <Button variant="contained" type="submit">
          Login
        </Button>
        <LinkRedirection path="/register">Register</LinkRedirection>
      </Grid>

      {errorMessage && <p className="login-error-message">{`${errorMessage}, please make an account.`}</p>}
    </form>
  </Wrapper>
);

Login.defaultProps = {
  onSubmitHandler: () => null,
  errorMessage: '',
};

Login.propTypes = {
  onSubmitHandler: PropTypes.func,
  onChangeHandler: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default Login;
