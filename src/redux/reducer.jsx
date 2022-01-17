import * as Types from "./actionType"
import {toast} from 'react-toastify';
import jwtDecode from "jwt-decode";
import { formControlClasses } from "@mui/material";

const initialState={
    users:[],
    status:null,
    profile:null,
    email:null,
    loggedIn:false,
    errors:null
};

const usersReducer=(state=initialState, action)=>{
    switch (action.type) {
        case Types.SIGN_IN :
            toast(" Bienvenue sur la page d'administration ...",
                {
                    position:toast.POSITION.BOTTOM_RIGHT
                }
            );
            //// verification de donnee
            if(action.payload.payload.status===401){
                return {
                    ...state,
                    errors:action.payload.payload,
                    status:401,
                    loggedIn:false
                };
            }
           const user=jwtDecode(action.payload.payload.accessToken);
            return {
                ...state,
                users:action.payload,
                profile:user.profile,
                email:user.email,
                status:200,
                loggedIn:true
            };
        
        default:
            return state;
    }
};

export default usersReducer;