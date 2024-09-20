import {Routes, Route} from 'react-router-dom'

import SignIn from '../pages/Signin';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Private from './Private'
import Customers from '../pages/Customers';
import New from '../pages/New';
import Service from '../pages/Service';
import Teste from '../pages/teste';

function RouteApp(){
    return(
        <Routes>
            <Route path="/" element={ <SignIn/> }/>
            <Route path="/register" element={<SignUp/>}/>
            <Route path="/dashboard" element={<Private><Dashboard/></Private>}/>
            <Route path="/profile" element={<Private><Profile/></Private>}/>
            <Route path="/customers" element={<Private><Customers/></Private>}/>
            <Route path="/service" element={<Private><Service/></Private>}/>
            <Route path="/new" element={<Private><New/></Private>}/>
            <Route path="/teste" element={<Private><Teste/></Private>}/>

        </Routes>
    )
}

export default RouteApp;