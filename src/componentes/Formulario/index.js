import { useContext } from 'react';
import { useUsuarioContext, UsuarioContext } from '../../contexts/Usuario';
import Botao from '../Botao';
import CampoImagem from '../CampoImagem';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const { adicionaColaborador } = useUsuarioContext();
    const {
        id,
        nome, 
        cargo, 
        imagem, 
        time,
        setId,
        setNome,
        setCargo,
        setImagem,
        setTime 
    } = useContext(UsuarioContext);
   
    const aoSalvar = (e) => {
        e.preventDefault();
        adicionaColaborador({id,nome,cargo,imagem,time});
    }

    return (
        <section className='formulario'>
            <form id="form" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <input type="hidden" value={id} />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    name="name"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={ valor => setNome(valor) }
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    name="cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={ valor => setCargo(valor) }
                />
                <CampoImagem 
                    obrigatorio={ imagem ? false : true} 
                    label="Selecione uma Imagem" 
                    name="imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={ valor => setImagem(valor) }
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    name="dropdown"
                    valor={time}
                    aoAlterado={ valor => setTime(valor) }
                />
                <Botao>
                    Criar card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;