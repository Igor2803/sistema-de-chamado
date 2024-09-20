import { useContext } from 'react'
import avatarImg from '../../assets/avatar.png'
import sys from '../../assets/sys.png'
import { Link } from 'react-router-dom'


import { AuthContext } from '../../contexts/auth'
import {FiHome, FiUser, FiSettings} from 'react-icons/fi'
import { SlPeople } from "react-icons/sl";
import { ImSwitch } from "react-icons/im";


import './header.css';
export default function  Header(){
    const {user, logout } = useContext(AuthContext);
    return(
        <div className="sidebar">
            <div>
                <img src={user.avatarUrl === null ? avatarImg : user.avatarUrl } alt="foto do usuario"/>
            </div>
        {/* <Link to="/service">
        <SlPeople color='#FFF' size={30}/>
        Rodrigo
        </Link> */}
        <Link to="/dashboard">
        <FiHome color='#FFF' size={24}/>
        Chamados
        </Link>
        <Link to="/customers">
        <FiUser color='#FFF' size={24}/>
        Clientes
        </Link>
        <Link to="/profile">
        <FiSettings color='#FFF' size={24}/>
        Perfil
        </Link>
        <Link onClick={ () => logout() }>
        <ImSwitch color='#FFF' size={24}/>
        Sair
        </Link>

        
        
        </div>
    )
}