import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./routeConfig";

import '../styles/global.scss'

export default function App() {

  return (
    <div>
      <BrowserRouter>
        <RouteConfig />
      </BrowserRouter>
    </div>
  )
}