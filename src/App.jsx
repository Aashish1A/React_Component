import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tooltip from "./Components/From Portfolio/Tooltip"
import Popup from "./Components/From Portfolio/Popup"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/tooltip" element={<Tooltip />}></Route>
        <Route path="/popup" element={<Popup />}></Route> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
