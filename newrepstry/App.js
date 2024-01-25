import './App.css';
import Create from './Create';
import Greet from './Greet';
import Welcome from './Welcome';
import Welcomes from './Welcomes';
function App() {
  return (
    <div className="App">
      <Greet></Greet>
      <Welcomes></Welcomes>
      <Welcome></Welcome>

     <Create>
     </Create>
    </div>
  );
}

export default App;
