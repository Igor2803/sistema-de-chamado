import { useState, useContext } from 'react';
import Title from "../../components/Title";
import { FiUser } from 'react-icons/fi';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';

export default function Usuario() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, loadingAuth } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();

        if (name !== '' && email !== '' && password !== '') {
            await signUp(email, password, name);
            
            // Limpar os campos após o cadastro
            setName('');
            setEmail('');
            setPassword('');
        }
    }

    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Cadastro Usuário">
                    <FiUser size={25} />
                </Title>
                <div className="container">
                    <form className="form-profile" onSubmit={handleSubmit}>
                        <label>Nome usuário</label>
                        <input 
                            type="text" 
                            placeholder="seu nome"  
                            value={name} 
                            onChange={(e) => setName(e.target.value)}
                        />
                        <label>Email</label>
                        <input 
                            type="text" 
                            placeholder="email@email.com"  
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label>Senha</label>
                        <input 
                            type="password" 
                            placeholder="*****"  
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit">
                            {loadingAuth ? 'Carregando..' : 'Cadastrar'}
                        </button>
                    </form>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    );
}
