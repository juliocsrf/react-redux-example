import React from 'react';
import { connect } from 'react-redux';
const Login = (props) => {
    const handleButton = () => {
        props.setName('Felipe');
    }
    return (
        <div>
            <h4>LOGIN</h4>
            <p>O nome é: {props.name}</p>

            <button onClick={handleButton}>Trocar nome</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.usuario.name
    };
}

const mapDispatchToProps = (dispatch) => ({
    setName: (newName) => dispatch({
        type: 'SET_NAME',
        payload: { name: newName }
    })
})


export default connect(mapStateToProps, mapDispatchToProps)(Login);