import './Colaborador.css';
import MaterialIcon from '@material/react-material-icon';
import { useUsuarioContext } from '../../contexts/Usuario';

const Colaborador = ({id, nome, cargo, imagem, corDeFundo }) => {

    const { removeColaborador, updateColaborador } = useUsuarioContext();
    
    const remove = (id) => {     
        if(window.confirm("Deseja realmente excluir este card ?")){
            removeColaborador(id);
        }
    }

    return (
        <div className='colaborador'>
            <MaterialIcon onClick={ () => remove(id) } icon='close' className='close' />
            <a href="#form">
                <MaterialIcon onClick={ () => updateColaborador(id) } icon='edit' className='edit' />
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