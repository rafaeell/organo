import './CampoImagem.css';

const CampoImagem = (props) => {

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

    return (
        <div className='campo-imagem'>  
            <label htmlFor='uploadImage'>{props.label}</label>
            { props.valor && <img className='' src={props.valor} alt={props.name} /> } 
            <input id='uploadImage' required={props.obrigatorio} placeholder={props.placeholder} name={props.name} type="file" onChange={aoDigitado}/>
        </div>
    )
}

export default CampoImagem;