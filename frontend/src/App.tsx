import { GrafDesp } from "./components/Despesas/grafDesp";
import CriarDesp from './components/Despesas/criarDesp';
import Despesa from "./components/Despesas/despesa";

function App() {

  return (
    <div className="bg-stone-950 h-screen text-white flex flex-col justify-center items-center">
      {/* <br />
      <CriarDespesa />
      <div className="flex justify-center mt-16">
        <GraficoDespesas />
        
        <Despesa />
      </div> */}

      <div className="bg-slate-950  h-64 w-9/12 rounded-xl border-2 border-slate-600">
          <div className=" bg-slate-900 rounded-t-xl h-14 flex justify-between border-b-2 border-slate-600">
              <h1 className="ml-4 mt-3 font-mono text-lg">Adicione sua despesa</h1>
              <button className="mr-6 mt-2 bg-slate-400 w-10 h-10 rounded-xl">Info</button>
          </div>

        <div className="ml-4 mt-4">
          <CriarDesp />
        </div>
      </div>

      <div className="bg-slate-950  h-64 w-9/12 rounded-xl border-2 border-slate-600">
        <GrafDesp/>

      </div>

    </div>
  );
}

export default App;
