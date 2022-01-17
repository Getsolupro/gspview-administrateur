import axios from "axios";

export function hasAuthenticated(){
    return false;
}

export const login=async (credentials)=>{
    console.log(credentials);
    await axios
        .post('http://localhost:3000/loginUser',credentials)
        .then((response) => {
           console.log(response);
        });
}
