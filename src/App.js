
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigator1 from './components/POC/navigation';
import { Provider } from 'react-redux';
import store from './components/POC/react-config/store';

function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Navigator1/>
    </Provider>
    </div>
  );
}
export default App;
