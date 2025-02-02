import { Route, Routes } from "react-router-dom"

import Home from "./core/Home"

import AgeCalculator from "./pages/junior/age-calculator/AgeCalculator"
import QRCode from "./pages/newbie/qr-code-component/QRCode"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Newbie Challenges */}
      <Route path="/newbie/qr-code" element={<QRCode />} />

      {/* Junior Challenges */}
      <Route path="/junior/age-calc" element={<AgeCalculator />} />
    </Routes>
  )
}

export default App
