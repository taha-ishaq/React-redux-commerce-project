
import './App.css';
import Product from './components/Product';
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider, Routes} from 'react-router-dom'
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import RootLayout from './components/RootLayout';




function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Dashboard/>} />
      <Route path='/cart' element={<Cart/>}/>
    </Route>
  ))

  return (
    <div className="App">
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
