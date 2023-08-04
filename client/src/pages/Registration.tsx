import React, {useState} from 'react';
import '../styles/main.scss'
import {useTranslation} from "react-i18next";


const Login = () => {
    const {t} = useTranslation()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [login, setLogin] = useState("")
    const [verifyPassword, setVerifyPassword] = useState("")
    const [verifyError, setVerifyError] = useState("")
    const [loginError, setLoginError] = useState("")

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

    const handleChangeVerifyPassword = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const verifyPassword = e.target.value
        setVerifyPassword(verifyPassword)
        if(verifyPassword !== password){
            setVerifyError("Invalid verify")
        }else{
            setVerifyError("")
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

    const handleChangeLogin = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setLogin(e.target.value)
        if(login.length > 0){
            setLoginError("")
        }
    }

    const registrationUser = () =>{
        if(login.length === 0){
            setLoginError("LoginError")
        }
        if(email.length === 0){
            setEmailError("Invalid email address")
        }
        if(password.length === 0){
            setPasswordError("Invalid password")
        }
    }

    return (
        <div className="container">
            <div className="main_content">
                <div className="authTag">{t("Registration")}</div>
                <div className={`form-group`}>
                    <label>{t("Username")}:</label>
                    <input
                        type="text"
                        className={`${loginError ? 'error' : ''}`}
                        value={login}
                        onChange={(e) => handleChangeLogin(e)}
                        required
                    />
                    {loginError && <div>{t(loginError)}</div>}
                </div>
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
                <div className="form-group">
                    <label>{t("VerifyPassword")}:</label>
                    <input
                        type="password"
                        className={`${verifyError ? 'error' : ''}`}
                        value={verifyPassword}
                        onChange={(e) => handleChangeVerifyPassword(e)}
                        required
                    />
                    {verifyError && <div>{t(verifyError)}</div>}
                </div>
                <button
                    className="Button"
                    disabled=
                        {emailError.length > 0 || passwordError.length > 0 || verifyError.length > 0}
                    type="submit"
                    onClick={registrationUser}
                >
                    {t("Registration")}
                </button>
            </div>
        </div>
    );
};

export default Login;