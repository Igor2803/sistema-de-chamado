import React, { useState } from 'react';
import './teste.css';

const statusLabels = ['Rota', 'Em Trânsito', 'Entregue'];

function Teste() {
  const [statusIndex, setStatusIndex] = useState(0);

  const ficaverde = () => {
    if (statusIndex < statusLabels.length - 1) {
      setStatusIndex(statusIndex + 1);
    }
  };

  return (
    <div className="App">
      <h1>Status de Entrega</h1>
      
      <div className="status-container">
        {statusLabels.map((label, index) => (
          <div key={index} className="status-item">
            <div
              className={`status-dot ${statusIndex >= index ? 'active' : ''}`}
            ></div>
            <span>{label}</span>
            
          </div>
        ))}
      </div>
      <hr/>

        <br/>

      <button onClick={ficaverde} disabled={statusIndex === statusLabels.length - 1}>
        Próximo Status
      </button>
    </div>
  );
}

export default Teste;
