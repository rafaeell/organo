import { useState } from 'react';
import Botao from '../Botao';
import CampoImagem from '../CampoImagem';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';

const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
   

    const aoSalvar = (e) => {
        e.preventDefault();
        props.aoColaboradorCadastrado({nome,cargo,imagem,time});
        setNome('');
        setCargo('');
        setImagem('');
        setTime('');
    }

   
    return (
        <section className='formulario'>
            <form id="form" onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
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
                    obrigatorio={true} 
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
                    itens={props.times}
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