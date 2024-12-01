import React from 'react';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Reservation from './pages/Reservation';
import Dashboard from './pages/Dashboard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/reservation" replace />,
  },
  {
    path: "/reservation",
    element: (
      <>
        <Navbar />
        <Reservation />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
  },
]);


const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
