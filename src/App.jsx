import { useState } from 'react'
import teste from './assets/Location.gif'

function App() {
  const [cep, setCep] = useState('')
  const [consulta, setConsulta ] = useState({})

  const validateCep = (value) => {
    const regex = /^\d{5}-\d{3}$/;
    return regex.test(value);
  };
  
  async function consultarCep(){
    if(cep === ''){
      alert('Preencha cep correto')
    }
    
    try{
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then( res => res.json())
      setConsulta(response)
      setCep("")
    }catch{
      if(cep === ''){
        return
      }
      alert(`
        Error ao Buscar.
        Digite Cep Válido`)
      setCep("")
    }
  }

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="ladoEsquerdo w-full flex flex-col justify-center items-center h-screen bg-slate-200 ">
        <div className="w-[400px] flex flex-col justify-center items-center ">
          <h1 className='text-3xl text-black font-semibold'>CONSULTAR CEP</h1>
        
          <input
            onChange={ (event) => setCep(event.target.value.replace(/\D/g, '').replace(/(\d{5})(\d{3})/, "$1-$2"))}
            value={cep}
            className='bg-red-50 py-1 px-4 mt-8 rounded-xl text-center text-slate-500'  
            type="text" 
            pattern="^\d{5}-\d{3}$"
            maxLength={8}
          />
          <button 
            className='bg-black text-white px-4 py-1 rounded-xl mt-5 hover:bg-slate-700 cursor-pointer'
            onClick={consultarCep}
            >
            Consultar
          </button>
        </div>
        <div className="dados w-[400px] mt-10 flex justify-center items-center">
          {Object.keys(consulta).length > 0 && (
            <ul className='text-left border-2 px-4 py-3 rounded-md bg-white border-none text-[#91CAE3]'>
              <li>Cep: {consulta.cep}</li>
              <li>Estado: {consulta.estado} - {consulta.uf}</li>
              <li>Cidade: {consulta.localidade}</li>
              <li>Bairro: {consulta.bairro}</li>
              <li>{consulta.logradouro}</li>
            </ul>
          )}
        </div>
      </div>
      
      <div className="ladoDiretiro w-full flex justify-center items-center h-screen bg-white hidden sm:inline-flex">
        <img src={teste} alt="" />
      </div>
    </div>
  )
}

export default App
