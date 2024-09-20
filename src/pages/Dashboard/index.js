import {useContext} from 'react'
import {AuthContext} from '../../contexts/auth'

import Header from '../../components/Header'
import Title from '../../components/Title'
import {FiPlus, FiMessageSquare, FiSearch, FiEdit2} from 'react-icons/fi'

import{Link} from 'react-router-dom'

import './dashboard.css'

 export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    async function handleLogout(){
        await logout();
    }

    return (
        <div>
            <Header/>

           <div className="content">
            <Title name="Tickets">
            <FiMessageSquare size={25} />
            </Title>

            <>   
               <Link to="/new" className="new">
               <FiPlus color="#FFF" size={25}/>
               Novo chamado
               </Link>     
            
            <table>
               <thead>
                <tr>
                    <th scape="col">Cliente</th>
                    <th scape="col">Assunto</th>
                    <th scape="col">Status</th>
                    <th scape="col">Cadastrado em</th>
                    <th scape="col">#</th>
                </tr>
                </thead> 
                <tbody>
                    <tr>
                      <td data-label="Cliente">Mercado Esquina</td>  
                      <td data-label="Assunto">Suporte</td> 
                      <td data-label="Status">
                        <span className="badge" style={{backgroundColor: '#999'}}>
                           em aberto 
                        </span></td> 
                      <td data-label="Cadastrado">12/05/2024</td> 
                      <td data-label="#">
                        <button className="action" style={{backgroundColor: '#3583f6'}}>
                            <FiSearch color='#FFF' size={17}/>
                        </button>
                        <button className="action" style={{backgroundColor: '#f6a935'}}>
                            <FiEdit2 color='#FFF' size={17}/>
                        </button>
                        
                        </td> 
                    </tr>

                    <tr>
                      <td data-label="Cliente">Informatica TECH</td>  
                      <td data-label="Assunto">Suporte</td> 
                      <td data-label="Status">
                        <span className="badge" style={{backgroundColor: '#999'}}>
                           em aberto 
                        </span></td> 
                      <td data-label="Cadastrado">12/05/2024</td> 
                      <td data-label="#">
                        <button className="action" style={{backgroundColor: '#3583f6'}}>
                            <FiSearch color='#FFF' size={17}/>
                        </button>
                        <button className="action" style={{backgroundColor: '#f6a935'}}>
                            <FiEdit2 color='#FFF' size={17}/>
                        </button>
                        
                        </td> 
                    </tr>
                    <tr>
                      <td data-label="Cliente">Mercado Esquina</td>  
                      <td data-label="Assunto">Suporte</td> 
                      <td data-label="Status">
                        <span className="badge" style={{backgroundColor: '#999'}}>
                           em aberto 
                        </span></td> 
                      <td data-label="Cadastrado">12/05/2024</td> 
                      <td data-label="#">
                        <button className="action" style={{backgroundColor: '#3583f6'}}>
                            <FiSearch color='#FFF' size={17}/>
                        </button>
                        <button className="action" style={{backgroundColor: '#f6a935'}}>
                            <FiEdit2 color='#FFF' size={17}/>
                        </button>
                        
                        </td> 
                    </tr>
                </tbody>
            </table>
            </>

           </div>
        </div>
    )
 }