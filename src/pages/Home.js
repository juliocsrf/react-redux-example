import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const Home = (props) => {
    let history = useHistory();
    const dispatch = useDispatch();

    const name = useSelector(state => state.usuario.name);
    const contador = useSelector(state => state.usuario.contador);

    const handleButton = () => {
        history.replace('/sobre');
    }

    const handleJulio = () => {
        dispatch({
            type: 'SET_NAME',
            payload: {name: 'Julio Fonseca'}
        });
    }

    return (
        <div>
            <h4>Página HOME</h4>

            <p>Nome: {name}</p>
            <p>Contagem: {contador}</p>

            <button onClick={handleJulio}>Setar nome para Julio</button>

            <button onClick={handleButton}>Ir para SOBRE</button>
        </div>
    )
}

export default Home;