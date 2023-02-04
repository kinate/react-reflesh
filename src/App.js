import logo from './logo.svg';
import add from './addMath';
import user,{locations} from './users';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h1>{locations.location1}</h1>
      <h2>{add(6,3)}</h2>
    </div>
  );
}

export default App;
