import { createContext, useContext, useState } from "react";

export const UsuarioContext = createContext();
UsuarioContext.displayName = "Usuário";

export default function UsuarioProvider({ children }){

    const times = [
        {
          nome: 'Programação',
          corPrimaria: '#57c278',
          corSecundaria: '#d9f7e9'
        },
        {
          nome: 'Front-End',
          corPrimaria: '#82cffa',
          corSecundaria: '#e8f8ff'
        },
        {
          nome: 'Data Science',
          corPrimaria: '#a6d157',
          corSecundaria: '#f0f8e2'
        },
        {
          nome: 'Devops',
          corPrimaria: '#e06869',
          corSecundaria: '#fde7e8'
        },
        {
          nome: 'UX e Design',
          corPrimaria: '#eb6ebf',
          corSecundaria: '#fae9f5'
        },
        {
          nome: 'Mobile',
          corPrimaria: '#ffba05',
          corSecundaria: '#fff5d9'
        },
        {
          nome: 'Inovação e Gestão',
          corPrimaria: '#ff8a29',
          corSecundaria: '#ffeedf'
        },
    ];

    let localData = JSON.parse(localStorage.getItem('colaboradores'));
    const [colaboradores, setColaboradores] = useState(localData || []);
    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    return (
      <UsuarioContext.Provider
          value={{
              colaboradores,
              setColaboradores,
              id,
              setId,
              nome,
              setNome,
              cargo,
              setCargo,
              imagem,
              setImagem,
              time,
              setTime,
              times
          }}
      >
          {children}
      </UsuarioContext.Provider>
    )
}


export function useUsuarioContext(){

  const { 
    colaboradores,
    setColaboradores,
    setId,
    setNome,
    setCargo,
    setImagem,
    setTime, 
  } = useContext(UsuarioContext);

  function adicionaColaborador(colaborador){
    //debugger
    // const employees = colaborador.id ? [...colaboradores.filter( col => col.id !== colaborador.id ), colaborador] : [...colaboradores, colaborador];
    let employees;
    if(colaborador.id) {
      employees = [...colaboradores.filter( col => col.id !== colaborador.id ), colaborador]
     }else{
      colaborador.id = Math.floor(Date.now() * Math.random()).toString(36);
      employees = [...colaboradores, colaborador];
     } 
    setColaboradores(employees);
    updateFormData();
    localStorage.setItem('colaboradores',JSON.stringify(employees));
  }
  
  const removeColaborador = (id) => {
    const employees = colaboradores.filter( colaborador => colaborador.id !== id );
    setColaboradores(employees);
    localStorage.setItem('colaboradores',JSON.stringify(employees));
  }
  
  const updateColaborador = (id) => {
    const [employee] = colaboradores.filter( colaborador => colaborador.id === id );
    updateFormData(employee);
  }

  const updateFormData = (data) =>{
    setId(data?.id || '');
    setNome(data?.nome || '');
    setCargo(data?.cargo || '');
    setImagem(data?.imagem || '');
    setTime(data?.time || '');
  }

  return {
    adicionaColaborador,
    removeColaborador,
    updateColaborador
  }

}
