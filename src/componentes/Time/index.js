import Colaborador from '../Colaborador';
import './Time.css';

const Time = (props) => {
    const css = {backgroundColor: props.corSecundaria};

    const remove = (e) => {     
        e.preventDefault();
        const id = e.target.dataset.remove;
        if(window.confirm("Deseja realmente excluir este card ?")){
            props.removeColaborador(id);
        }
    }

    const update = (e) => {
        const id = e.target.dataset.update;
        props.updateColaborador(id);
    }

    return (
        props.colaboradores.length > 0 && <section className='time' style={css}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => <Colaborador update={update} remove={remove} corDeFundo={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/> )}
            </div>
        </section>
    );
}

export default Time;