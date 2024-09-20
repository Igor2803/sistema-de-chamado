import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { FiMessageSquare } from 'react-icons/fi';
import api from '../../api';

export default function Service() {
    const { logout } = useContext(AuthContext);
    const [data, setData] = useState([]); // Usando useState para armazenar os dados da API

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get('/info');
                console.log('Dados recebidos:', response.data);

                // Verifica se a resposta é um array; se não for, coloca o objeto em um array
                const fetchedData = Array.isArray(response.data) ? response.data : [response.data];
                setData(fetchedData); // Atualiza o estado com os dados recebidos
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
            }
        }
        fetchData();
    }, []);

    return (
        <div>
            <Header />

            <div className="content">
                <Title name="Tela Rodrigo">
                    <FiMessageSquare size={25} />
                </Title>

                <>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Data</th>
                                <th scope="col">Periodo</th>
                                <th scope="col">Payload</th>
                                <th scope="col">Observação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.length > 0 ? (
                                data.map((item) => (
                                    <tr key={item.id}>
                                        <td data-label="ID">{item.id}</td>
                                        <td data-label="Data">{item.data}</td>
                                        <td data-label="Periodo">{item.periodo}</td>
                                        <td data-label="Payload">{item.payload.key}</td>
                                        <td data-label="Observação">{item.observacao}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5">Carregando dados...</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </>
            </div>
        </div>
    );
}
