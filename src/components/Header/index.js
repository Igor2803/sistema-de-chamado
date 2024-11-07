import { useContext } from 'react';
import avatarImg from '../../assets/avatar.png';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../contexts/auth';
import { FiHome, FiUser, FiSettings } from 'react-icons/fi';
import { ImSwitch } from "react-icons/im";

import './header.css';

export default function Header() {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className="sidebar">
            <div>
                <img src={user.avatarUrl === null ? avatarImg : user.avatarUrl} alt="foto do usuario" />
            </div>

            <Link to="/dashboard">
                <FiHome color='#FFF' size={24} />
                Chamados
            </Link>

           
            {/* Menu de Cadastro com submenu */}
            <button className="dropdown">
                <span className="dropdown-toggle">
                    <FiUser color='#FFF' size={24} />
                    Cadastro
                </span>
                <p className="dropdown-menu">
                    <Link to="/usuario">Usuários</Link>
                    <Link to="/customers">Clientes</Link>
                </p>
            </button>

            <Link to="/profile">
                <FiSettings color='#FFF' size={24} />
                Perfil
            </Link>

            <Link onClick={() => logout()}>
                <ImSwitch color='#FFF' size={24} />
                Sair
            </Link>
        </div> 
    );
}
