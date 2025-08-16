import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'

import NotFound from '@pages/NotFound'
import Login from './pages/Login/Login'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <Routes>
      {/* Route login แยกออกจาก Layout */}
      <Route path="/login" element={<Login />} />

      {/* เส้นทางอื่น ๆ ใช้ Layout ร่วมกัน */}
      <Route
        path="*"
        element={
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
