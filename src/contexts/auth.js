import { useState, createContext, useEffect } from 'react';
import { auth, db } from '../services/firebaseConnection'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        async function loadUser() {
            const storageUser = localStorage.getItem('@ticketsPRO');

            if (storageUser) {
                setUser(JSON.parse(storageUser));
            }

            setLoading(false);
        }

        loadUser();
    }, []);

    async function signIn(email, password) {
        setLoadingAuth(true);
    
        try {
            const value = await signInWithEmailAndPassword(auth, email, password);
            const uid = value.user.uid;
    
            // Obter o documento do Firestore com o ID do usuário
            const docRef = doc(db, "users", uid);
            const docSnap = await getDoc(docRef);
    
            if (docSnap.exists()) {
                let data = {
                    uid: uid,
                    nome: docSnap.data().nome,
                    email: value.user.email,
                    avatarUrl: docSnap.data().avatarUrl || null,
                };
    
                setUser(data);
                storageUser(data);

                // Mostra a mensagem de boas-vindas com o nome do usuário
                toast.success(`Bem-vindo(a) de volta, ${data.nome || "Usuário"}!`);
                
                navigate("/dashboard");
            } else {
                console.error("Documento do usuário não encontrado!");
                toast.error("Erro ao buscar dados do usuário.");
            }
        } catch (error) {
            console.error("Erro ao fazer login:", error.message);
            toast.error("Erro ao entrar. Verifique suas credenciais.");
        } finally {
            setLoadingAuth(false);
        }
    }

    // Função de cadastro de um novo usuário sem fazer login
    async function signUp(email, password, name) {
        setLoadingAuth(true);

        await createUserWithEmailAndPassword(auth, email, password)
            .then(async (value) => {
                let uid = value.user.uid;

                await setDoc(doc(db, "users", uid), {
                    nome: name,
                    avatarUrl: null
                });

                setLoadingAuth(false);
                toast.success("Usuário cadastrado com sucesso!");
            })
            .catch((error) => {
                console.log(error);
                setLoadingAuth(false);
                toast.error("Erro ao cadastrar o usuário.");
            });
    }

    function storageUser(data) {
        localStorage.setItem('@ticketsPRO', JSON.stringify(data));
    }

    async function logout() {
        await signOut(auth);
        localStorage.removeItem('@ticketsPRO');
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signUp,
                logout,
                loadingAuth,
                loading,
                storageUser,
                setUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
