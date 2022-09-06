import { Button, Grid, TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { LinkRedirection } from '../../components/Link/Link';
import Wrapper from '../../components/Wrapper/Wrapper';
import './Register.css';

const Register = ({ onSubmitHandler, onChangeHandler }) => (
  <Wrapper>
    <h3 className="register-title">Registration</h3>
    <form onSubmit={onSubmitHandler}>
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
  </Wrapper>
);

Register.defaultProps = {
  onSubmitHandler: () => null,
};

Register.propTypes = {
  onSubmitHandler: PropTypes.func,
  onChangeHandler: PropTypes.func.isRequired,
};

export default Register;
