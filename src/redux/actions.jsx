import * as Types from "./actionType";
import axios from "axios";
import { url } from "../api";

const login=(user)=>({
    type:Types.SIGN_IN,
    payload:user
});

const getStaff=(user)=>({
    type:Types.GET_STAFF,
    payload:user
})

export const signIn=(user)=>{
    return function (dispatch){
        axios.post(`${url}login`, user)
             .then((response)=>{
                 if(response.data.status===401 ){
                    dispatch(login(response.data));
                 }else{
                    localStorage.setItem("accessToken",response.data.accessToken);
                    localStorage.setItem("refreshToken",response.data.refreshToken);
                    dispatch(login(response.data));
                 }
                 
             }).catch(error=>console.log(error))
    }
}

export const loadStaff=(id)=>{
    return function (dispatch){
        axios.get(`${url}${id}`)
             .then((response)=>{
                 dispatch(getStaff(response.data))
             })
    }
}



