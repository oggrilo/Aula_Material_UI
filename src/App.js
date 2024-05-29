import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import  TemporaryDrawer, { Form, MyForm } from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Header />
      <TemporaryDrawer />
      
      <Form />
      
    </div>
  );
}

export default App;
