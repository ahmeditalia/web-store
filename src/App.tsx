import { Route, Routes } from 'react-router-dom';
import Header from './layout/Header';
import Product from './pages/Product';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='' element={<Header/>}>
          <Route index element={<Product/>}/>
          <Route path=':category' element={<Product/>}/>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
