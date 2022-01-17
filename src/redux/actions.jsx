import * as Types from "./actionType";
import axios from "axios";
import { url } from "../api";

const login=(user)=>({
    type:Types.SIGN_IN,
    payload:user
});

export const signIn=(user)=>{
    return function (dispatch){
        axios.post(`${url}login`, user)
             .then((response)=>{
                 console.log("Debut");
                 console.log(response.data);
                 console.log("Fin");
                 if(response.data.status===401 ){
                    dispatch(login(login(response.data)));
                 }else{
                    localStorage.setItem("accessToken",response.data.accessToken);
                    localStorage.setItem("refreshToken",response.data.refreshToken);
                    dispatch(login(login(response.data)))
                 }
                 
             }).catch(error=>console.log(error))
    }
}



