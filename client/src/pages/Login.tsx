import React, {useState} from 'react';
import '../styles/main.scss'
import {useTranslation} from "react-i18next";


const Login = () => {
    const {t} = useTranslation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const newEmail = e.target.value
        setEmail(newEmail)
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        if(!emailPattern.test(newEmail)){
            setEmailError("Invalid email address")
        }else{
            setEmailError("")
        }
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const newPassword = e.target.value
        setPassword(newPassword)
        if(newPassword.length < 8 && newPassword.length > 0){
            setPasswordError("Invalid password")
        }else{
            setPasswordError("")
        }
    }

    return (
        <div className="container">
            <div className="main_content">
                <div className="authTag">{t("Login")}</div>
                <div className={`form-group`}>
                    <label>{t("Email")}:</label>
                    <input
                        type="email"
                        className={`${emailError ? 'error' : ''}`}
                        value={email}
                        onChange={(e) => handleChangeEmail(e)}
                        required
                    />
                    {emailError && <div>{t(emailError)}</div>}
                </div>
                <div className="form-group">
                    <label>{t("Password")}:</label>
                    <input
                        type="password"
                        className={`${passwordError ? 'error' : ''}`}
                        value={password}
                        onChange={(e) => handleChangePassword(e)}
                        required
                    />
                    {passwordError && <div>{t(passwordError)}</div>}
                </div>

                <button
                    className="Button"
                    disabled={emailError.length > 0 || passwordError.length > 0}
                    type="submit"
                    onClick={() => console.log("213")}
                >
                    {t("Login")}
                </button>
            </div>
        </div>
    );
};

export default Login;