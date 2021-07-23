import './App.css';
import FormAddContact from './components/FormAddContact';
import ListContact from './components/ListContact';



function App() {
  return (
    <div className="App">
      <h1>Agenda</h1>
      <ListContact />
      <FormAddContact/>
    </div>
  );
}

export default App;
