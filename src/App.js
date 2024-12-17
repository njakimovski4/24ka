import logo from './logo.svg';
import './App.css';

function App() {
  function message(){
    alert("Poraka za tebe")
  }
  return (
    <button onClick={message}>
      Klikni
    </button>
  );
}

export default App;
