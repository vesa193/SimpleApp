import { LinkRedirection } from "../../components/Link/Link";
import './Register.css';

const Register = ({ onSubmitHandler, onChangeHandler }) => {
    return (
        <div>
            <h3 className="register-title">Registration</h3>
            <form onSubmit={onSubmitHandler}>
                <input type="text" name="username" placeholder="Username" onChange={onChangeHandler}/>
                <input type="password" name="password" placeholder="Password" onChange={onChangeHandler} />
                <button type='submit'>Register</button>
                <br />
                <br />
                <div>
                <div>
                    <LinkRedirection path="/" replace={true}>Login</LinkRedirection>
                </div>
                </div>
            </form>
        </div>
    );
};

export default Register;