const initialState = {
    name: 'Visitante',
    contador: 0
};

const UsuarioReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SET_NAME':
            return { ...state, name: action.payload.name }

        default:

            break;
    }

    return state;
};


export default UsuarioReducer;