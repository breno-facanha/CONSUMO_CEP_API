import teste from './assets/Location.gif'
function App() {
  return (
    <div className="flex justify-center items-center w-full h-screen">
      <div className="ladoEsquerdo w-[50%] flex flex-col justify-center items-center h-screen bg-slate-200">
        <div className="w-[400px] flex flex-col justify-center items-center ">
          <h1 className='text-3xl text-black font-semibold'>CONSULTAR CEP</h1>

          <input
            className='bg-red-50 py-1 px-4 mt-8 rounded-xl text-center text-slate-500'  
            type="text" 
          />
          <button className='bg-black text-white px-4 py-1 rounded-xl mt-5'>
            Consultar
          </button>
        </div>
        <div className="dados w-[400px] mt-10">
          
        </div>
      </div>
      <div className="ladoDiretiro w-[50%] flex justify-center items-center h-screen bg-white">
        <img src={teste} alt="" />
      </div>
    </div>
  )
}

export default App
