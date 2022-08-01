import { useContext } from 'react';
import { UsuarioContext } from '../../contexts/Usuario';
import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {

    const { times, colaboradores } = useContext(UsuarioContext);
    const time = times.find(item => item.nome === props.nome);
    const colabs = colaboradores.filter( colaborador => colaborador.time === props.nome );
    
    return (
        colabs.length > 0 && <section className='time' style={{backgroundColor: time.corSecundaria}}>
            <h3 style={{ borderColor: time.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {colabs.map( colaborador => <Colaborador {...colaborador} key={colaborador.nome} corDeFundo={time.corPrimaria} /> )}
            </div>
        </section>
    );
}

export default Time;