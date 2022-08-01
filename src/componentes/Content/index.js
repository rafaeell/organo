import { useContext } from 'react';
import { UsuarioContext } from '../../contexts/Usuario';
import Time from '../Time';
import './Content.css';

const Content = () => {
    
    const { times } = useContext(UsuarioContext);

    return (
        <>
            {times.map( time => <Time key={time.nome} nome={time.nome} /> )}
        </>
    );
}

export default Content;