import {Api, authApi} from "./index";

export const SpotifyAuth = async () =>{
    try {
        const {data} = await Api.get('spotify/auth')
        console.log("дата=" + data)
        // window.location.href = data.data.authURL
    }catch (error){
        console.error('Ошибка при инициализации аутентификации:',error)
    }
}