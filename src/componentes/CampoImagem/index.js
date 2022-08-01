import MaterialIcon from '@material/react-material-icon';
import { useContext } from 'react';
import { UsuarioContext } from '../../contexts/Usuario';
import './CampoImagem.css';

const CampoImagem = (props) => {

    const { setImagem } = useContext(UsuarioContext);
                                                    ;
    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    const aoDigitado = async (e) => {
        const img = e.target.files[0];
        const file = await toBase64(img);
        props.aoAlterado(file);
    }

    const resetImage = () => {
        const input = document.querySelector('#uploadImage');
        input.value = '';
        setImagem('');
    }

    return (
        <div className='campo-imagem'>  
            <label htmlFor='uploadImage'>{props.label}</label>
            { 
                props.valor && 
                <div className='wrapperImage'>
                    <MaterialIcon onClick={resetImage} icon='close' className='close' />
                    <img className='' src={props.valor} alt={props.name} />
                </div> 
            } 
                <input id='uploadImage' required={props.obrigatorio} placeholder={props.placeholder} name={props.name} type="file" onChange={aoDigitado}/>
        </div>
    )
}

export default CampoImagem;