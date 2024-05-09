import './App.css';
import { Provider } from 'react-redux';
import  store from './components/store'
import Navigate from './components/navigation';
function App() {
  return (
    <div className="App">
      <Provider store ={store}>
      <Navigate/>
      </Provider>
    </div>
  );
}
export default App;
