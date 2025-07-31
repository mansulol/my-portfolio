import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./routeConfig";

import '../styles/global.scss'

export default function App() {

  return (
    <body id="container-content-app" >
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </body>
  )
}