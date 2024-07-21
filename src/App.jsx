import './App.css';

import ChoreList from './component/ChoreList.jsx';

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
