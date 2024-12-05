import React from 'react';
import { Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Reservation from './pages/Reservation';
import Dashboard from './pages/Dashboard';
import RootLayout from './components/layout/RootLayout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/reservation" replace />
      },
      {
        path: "/reservation",
        element: (
          <>
            <Reservation />
          </>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <>
            <Dashboard />
          </>
        ),
      },
    ]
  }
]);


const App: React.FC = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
