import logo from './logo.svg';
import './App.css';
import Autocomplete from './component/autocomplete'

function App() {
  return (
    <>
    <h1 className="App">
          Learn React
    </h1>
    <Autocomplete
      options={["chips","ola"]}
    />
    </>
  );
}

export default App;
