import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, useNavigation } from "react-router-dom";
import './index.scss';
import reportWebVitals from './reportWebVitals';
import DefaultLayout from './templates/DefaultLayout';
import Home from './screens/marketing/home';
import Contact from './screens/marketing/contact-us';
import ContactForDemo from './screens/marketing/contact-us/demo';
import ContactForSupport from './screens/marketing/contact-us/support';

const router = createBrowserRouter([
    {
      path: "/",
      element: <DefaultLayout><Home /></DefaultLayout>,
    },
    {
        path: "/contact-us",
        element: <DefaultLayout><Contact /></DefaultLayout>,
    },
    {
        path: "/contact-us/demo",
        element: <DefaultLayout><ContactForDemo /></DefaultLayout>,
    },
    {
        path: "/contact-us/support",
        element: <DefaultLayout><ContactForSupport /></DefaultLayout>,
    }
  ]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
