import './App.css';
import Chore  from './component/Chore.jsx'
function App() {
  return (
    <div className="App">
      <div className="list-container">
        <h1>To-do List</h1>
        <Chore  text='Get some react knowledge' />
      </div>
    </div>
  );
}

export default App;
