import { useContext } from "react";
import {useNavigate,Navigate} from "react-router-dom";
import {AuthContext} from "../Context/AuthContext";

export const Login= ()=>{

    const {handleToken,token}= useContext(AuthContext);

    const navigate = useNavigate();

    if(token) {
        return <Navigate to={"/"}/>
    }

    return (
        <div>
            <input type="text" placeholder="Email Address"/>
            <input type="text" placeholder="password"/>
            <button onClick={()=>{
                handleToken("abcdefgh")
                navigate("/")
            }}>Submit</button>
        </div>
    )
}