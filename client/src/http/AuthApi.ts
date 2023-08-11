import {Api, authApi} from "./index";
import jwtDecode from "jwt-decode";
import {IUser} from "../models/IUser";


export const Registration = async (username: string,email: string, password: string) : Promise<IUser | null>=> {
    try {
        const {data} = await Api.post(`auth/registration`, {username, email, password})
        if(data.message)
            return null
        else{
            localStorage.setItem('token', data.token)
            return jwtDecode(data.token)
        }
    }catch (e){
        console.log(e)
        return null
    }
}

export const LoginUser = async (email: string, password: string): Promise<IUser | null>  =>{
    try {
        const {data} = await Api.post(`auth/login`, {email, password})
        if(data.message)
            return null
        else{
            localStorage.setItem('token', data.token)
            return jwtDecode(data.token)
        }
    }catch (e){
        console.log(e)
        return null
    }
}

export const checkAuth = async () : Promise<IUser | null> =>{
    try {
        const {data} = await authApi.get(`auth/check`)
        if(data.message)
            return null
        else{
            localStorage.setItem('token', data.token)
            return jwtDecode(data.token)
        }
    }catch (e) {
        console.log(e)
        return null
    }
}