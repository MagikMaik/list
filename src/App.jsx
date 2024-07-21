import './App.css';
import Chore  from './component/Chore.jsx'
import ChoreList from './component/ChoreList.jsx';
import Form from './component/Form.jsx'
function App() {
  return (
    <div className="App">
      <div className="list-container">
        <h1>To-do List</h1>
        <ChoreList />
      </div>
    </div>
  );
}

export default App;
