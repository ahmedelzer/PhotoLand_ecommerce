import React from 'react';

//pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/ProductDetails";
import Search from "./pages/Search";

//components
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

//tayout
const Layout=()=>{
  return(
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children:[
      {path :'/', element:<Home/>},
      {path :'/products/:id', element:<Products/>},
      {path :'/product/:id', element:<Product/>},
      {path :'/search', element:<Search/>},
    ],
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
