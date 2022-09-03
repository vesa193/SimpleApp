import { Link } from "react-router-dom";
import { Input } from "../../components/common/Input";
import { LinkRedirection } from "../../components/Link/Link";
import './Login.css';

const Login = ({ onSubmitHandler, onChangeHandler, errorMessage }) => {
    return (
        <div>
            <h3 className="login-title">Login</h3>
            <form onSubmit={onSubmitHandler}>
                {/* TODO: this should be new input component */}
                {/* <Input type="text" name="username" placeholder="Username" onChangeHandler={onChangeHandler} isAutoCompleteOff /> */}
                <input type="text" name="username" placeholder="Username" onChange={onChangeHandler}/>
                <input type="password" name="password" placeholder="Password" onChange={onChangeHandler} />
                <button type='submit'>Login</button>
                
                {errorMessage && (
                    <p className="login-error-message">{`${errorMessage}, please make an account.`}</p>
                )}

                <br />
                <br />
                <div>
                    <LinkRedirection path="/register">Register</LinkRedirection>
                </div>
            </form>
        </div>
    );
};

export default Login;