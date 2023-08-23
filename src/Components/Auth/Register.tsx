import React, {FC, useContext, useState} from 'react';
import {
    Box, Button,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import {ThemeProvider} from "@emotion/react";
import {theme} from "../../Customization/Customization";
import {Link, useNavigate} from "react-router-dom";
import {AuthContext} from "../../Context/context";
import "./auth.css"
import axios from "axios";

// const server = "http://localhost:5005/user"
const Register:FC = () => {
    const navigate = useNavigate()
    const {setIsAuth} = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState<boolean>(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const [registerEmail, setRegisterEmail] = useState<string>("")
    const [registerPass, setRegisterPass] = useState<string>("")
    const [registerRePass, setRegisterRePass] = useState<string>("")

    const SavePass = ( ) => {
        if (registerEmail !== "" && registerRePass !== "" && registerPass !== "" && registerPass === registerRePass) {
            localStorage.setItem("E-Mail", registerEmail)
            localStorage.setItem("password", registerPass)
            setIsAuth(true)
            navigate("/products")
        } else {
            alert("Неправильно указаны данные")
        }
        setRegisterRePass("")
        setRegisterEmail("")
        setRegisterPass("")
    }

    const register = () => {
        const newUser = {
            email: "Email",
            password: "Pass"
        }
        axios.post("http://localhost:5005/user", newUser)
            .then((res)=>console.log(res))
            .catch((error)=>error)
    }

    return (
        <div className={"register_form"}>
            <Box className={"login_box"}>
                <h1>Создание учетной записи</h1>
                <div className={"inp_box"}>
                    <InputLabel htmlFor="outlined-basic">E-Mail</InputLabel>
                    <TextField
                        value={registerEmail} onChange={(e) => setRegisterEmail(e.target.value)}
                        placeholder={"Введите свой e-mail"} className={"auth_inp"} id="outlined-basic"
                        variant="outlined"/>
                </div>
                <div className={"inp_box"}>
                    <InputLabel htmlFor="outlined-adornment-password">Пароль</InputLabel>
                    <OutlinedInput
                        value={registerPass}
                        onChange={(e) => setRegisterPass(e.target.value)}
                        placeholder={"Введите свой пароль"}
                        className={"auth_inp"}
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}>
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                    <div className={"inp_box"}>
                        <InputLabel htmlFor="outlined-adornment-pass">Повторите пароль</InputLabel>
                        <OutlinedInput
                            value={registerRePass}
                            onChange={(e) => setRegisterRePass(e.target.value)}
                            placeholder={"Повторите пароль"}
                            className={"auth_inp"}
                            id="outlined-adornment-pass"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleClickShowPassword}>
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                        />
                    </div>
                </div>

                <div className={"butt_box"}>
                    <ThemeProvider theme={theme}>
                        <Button onClick={register} color="primary"
                                variant="contained">Регистрация</Button></ThemeProvider>
                    <Link className={"link_to_auth"} to={"/auth/login"}> У меня уже есть аккаунт</Link>
                </div>
            </Box>
        </div>
    );
};

export default Register;