import './App.css';
// import { Provider } from 'react-redux';
// import  store from './components/store'
// import Navigate from './components/user-registration/navigation'
import data from './components/product-register/data.json'
import { ProductList } from './components/product-register/products-list';
function App() {
  return (
    <div className="App">
      {/* <Provider store ={store}>
      <Navigate/>
      </Provider> */}
      <ProductList products={data.products}/>
  
    </div>
  );
}
export default App;
