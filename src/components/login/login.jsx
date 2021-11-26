import React, { useState } from "react";
import UserProfile from "../userhome/userHome";
import { connect } from "react-redux";

function AuthUser(props) {
    const [em, setEm] = useState("1");
    const [ps, setPs] = useState("");
    const [isValidated, setIsValidated] = useState(false);

    // console.log(props);
    const { userName, password } = props
    // console.log(password);

    // setEmail
    const setEmail = (e) => {
        setEm(e.target.value);
        // console.log(e.target.value);
    }
    // set password
    const setPass = (e) => {
        setPs(e.target.value)
        // console.log(e.target.value);
    }
    // auth user
    const authUser = (e) => {
        e.preventDefault();
        if (userName === em && password === ps) {
            setIsValidated(true);
        }
        else {
            setIsValidated(false);
        }

    }
    return (
        <div>
            <div>
                userName: <span>{userName}</span> <br /><br />
                password: <span>{password}</span>
                <br /><br />
            </div>
            <form>
                email : <input onChange={setEmail} type="text" />
                <br />
                <br />
                password : <input onChange={setPass} type="text" />

                <br />
                <br />
                <button onClick={authUser} >Login</button>
            </form>
            {isValidated ?
                <UserProfile /> : <div>login failed</div>}
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state.auth.userName);
    return {
        userName: state.auth.userName,
        password: state.auth.password
    };
}

export default connect(mapStateToProps)(AuthUser);