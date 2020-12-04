import React from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Categoria = () => {

    let query = useQuery();

    let cat = query.get('tipo');

    return (
        <div>
            <h4>Página categoria</h4>
            <p>Categoria: {cat}</p>
        </div>
    )
}

export default Categoria;