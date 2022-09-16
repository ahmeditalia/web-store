import { Route, Routes } from 'react-router-dom';
import ProductGrid from './features/product/Product';
import { Header } from './layout/Header/Header';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route index element={<ProductGrid/>}/>
          <Route path='/:category' element={<ProductGrid/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
