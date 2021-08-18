import './App.css';
import Lista from './components/Lista'
function App() {
  return (
    <>
      <h1>Minha primeira aplicação com React</h1>
      <ul>
        <Lista nome="Item 1"/>
        <Lista nome="Item 2"/>
        <Lista nome="Item 3"/>
      </ul>
    </>
  );
}

export default App;
