import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PageLogIn from './pages/PageLogIn'
import PageUsers from './pages/PageUsers'
import PageProducts from './pages/PageProducts'
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute component={<PageLogIn />} />
  },
  {
    path: "/huyduocphamm-users",
    element: <PrivateRoute component={<PageUsers />} />
  },
  {
    path: "/huyduocphamm-products",
    element: <PrivateRoute component={<PageProducts />} />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
