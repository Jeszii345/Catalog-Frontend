import { Link } from 'react-router-dom'
import { FiHome, FiArrowLeft } from 'react-icons/fi'

const NotFound = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="animate-fade-in text-center">
        <div className="mb-8">
          <h1 className="text-gradient text-9xl font-bold">404</h1>
        </div>

        <div className="mb-8">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            ไม่พบหน้าที่คุณต้องการ
          </h2>
          <p className="mx-auto max-w-md text-lg text-gray-600">
            ขออภัย หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่มีอยู่จริง
          </p>
        </div>

        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to="/"
            className="btn btn-primary btn-lg flex items-center space-x-2"
          >
            <FiHome className="h-5 w-5" />
            <span>กลับหน้าแรก</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="btn btn-outline btn-lg flex items-center space-x-2"
          >
            <FiArrowLeft className="h-5 w-5" />
            <span>กลับหน้าก่อนหน้า</span>
          </button>
        </div>

        {/* Additional Help */}
        <div className="mt-12 rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="mb-3 text-lg font-semibold text-gray-900">
            ต้องการความช่วยเหลือ?
          </h3>
          <p className="mb-4 text-gray-600">
            หากคุณคิดว่านี่เป็นข้อผิดพลาด กรุณาติดต่อทีมสนับสนุนของเรา
          </p>
          <Link to="/contact" className="btn btn-secondary btn-md">
            ติดต่อเรา
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
