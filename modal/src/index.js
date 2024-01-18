import React, { Suspense } from 'react';
import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Preloader from "./Pages/Preloader.js";

const App = React.lazy(() => import("./App.js"));
const rootNode = document.getElementById('container')
const root = ReactDOMClient.createRoot(rootNode)

root.render(
  <StrictMode>
    <Suspense fallback={<Preloader />} >
      <App />
    </Suspense>
  </StrictMode>
)

