import { useContext } from 'react';
import { UsuarioContext } from '../../contexts/Usuario';
import './ListaSuspensa.css';

const ListaSuspensa = (props) => {

    const { times } = useContext(UsuarioContext);

    return (
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select name={props.name} onChange={ evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                <option value=""></option>
                {times.map((time) => <option key={time.nome}>{time.nome}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;