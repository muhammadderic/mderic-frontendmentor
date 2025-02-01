import { Route, Routes } from "react-router-dom"
import Home from "./core/Home"
import QRCode from "./pages/newbie/qr-code-component/QRCode"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Newbie Challenges */}
      <Route path="/newbie/qr-code" element={<QRCode />} />
    </Routes>
  )
}

export default App
