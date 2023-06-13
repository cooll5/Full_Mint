import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './containers/App';
import AboutPage from './Pages/AboutPage';
import OverviewPage from './Pages/OverviewPage'
import LaunchesPage from './Pages/LaunchesPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// import {Provider} from "react-redux";
// import {createStore, applyMiddleware} from "redux";
// import thunk from "redux-thunk";
// import {composeWithDevTools} from "redux-devtools-extension";
// import rootReducer from "./reducers/rootReducer";

// const store = createStore (
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk))
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "AboutPage",
    element: <AboutPage />,
  },
  {
    path: "OverviewPage",
    element: <OverviewPage />,
  },
  {
    path: "LaunchesPage",
    element: <LaunchesPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router = {router} />
    
  /*<React.StrictMode>
    <App />
  </React.StrictMode>*/
);