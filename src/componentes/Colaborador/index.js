import './Colaborador.css';
import MaterialIcon from '@material/react-material-icon';

const Colaborador = ({nome, cargo, imagem, corDeFundo, remove, update }) => {

    return (
        <div className='colaborador'>
            <MaterialIcon onClick={remove} data-remove={nome} icon='close' className='close' />
            <a href="#form">
                <MaterialIcon onClick={update} data-update={nome} icon='edit' className='edit' />
            </a>
            <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
                <img src={imagem} alt={nome} />
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;