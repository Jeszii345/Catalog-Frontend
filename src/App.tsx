import { Routes, Route } from 'react-router-dom'
import Layout from '@components/layout/Layout'

import NotFound from '@pages/NotFound'
import Login from './pages/Login/Login'
import Home from './pages/Home'
import Contact from './pages/Contact'
import ProductList from './components/sections/ProductList'
import ProductDetail from './components/sections/ProductDetail'
import ManagerDatatable from './components/Manager Datatable/ManagerDatatable'
import EmployeeList from './components/employee/EmployeeList'
import ChangePasswordPage from './components/UserProfile/change-password'

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
              <Route path="/manager-datatable" element={<ManagerDatatable />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/" element={<ProductList />} />
              <Route path="/admin/employees" element={<EmployeeList />} />
              <Route path="/profile/change-password" element={<ChangePasswordPage />} />
              <Route path="/products/:id" element={<ProductDetail mode="webpage" />} />
            </Routes>
          </Layout>
        }
      />
    </Routes>
  )
}

export default App
