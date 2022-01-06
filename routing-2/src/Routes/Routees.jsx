import {Route,Routes} from 'react-router-dom';

import {HomePage }from "../Components/HomePage"
import {Home }from "../Components/Home";
import { Login } from '../Components/Login';
import { Setting } from '../Components/Settings';
import {PrivateRoutes} from "../Routes/PrivateRoutes";


export const Routees =()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

            <Route
            path="/dashboard"
            element={
                <PrivateRoutes>
                    <HomePage/>
                </PrivateRoutes>
            }
            ></Route>
            <Route
            path="/dashboard/settings"
            element={
                <PrivateRoutes>
                    <Setting/>
                </PrivateRoutes>
            }
            ></Route>
        </Routes>
    )
}