import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub } from 'react-icons/fi'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl animate-fade-in text-center">
          {/* Main CTA */}
          <div className="card mb-12 bg-gradient-to-br from-primary-600 to-accent-600 text-white">
            <div className="card-body p-12">
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                พร้อมเริ่มต้นแล้วหรือยัง?
              </h2>
              <p className="mx-auto mb-8 max-w-2xl text-xl text-primary-100">
                ดาวน์โหลดเทมเพลตและเริ่มสร้างเว็บแอปที่ยอดเยี่ยมได้เลยวันนี้
              </p>

              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="btn btn-lg group flex items-center space-x-2 bg-white text-primary-600 hover:bg-gray-100"
                >
                  <span>เริ่มต้นเลย</span>
                  <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-lg flex items-center space-x-2 border-white text-white hover:bg-white hover:text-primary-600"
                >
                  <FiGithub className="h-5 w-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="card card-hover animate-slide-in">
              <div className="card-body text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100">
                  <span className="text-3xl">📚</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  เอกสารครบถ้วน
                </h3>
                <p className="text-sm text-gray-600">
                  มีเอกสารและตัวอย่างการใช้งานที่ครบถ้วน เข้าใจง่าย
                </p>
              </div>
            </div>

            <div
              className="card card-hover animate-slide-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="card-body text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-green-100">
                  <span className="text-3xl">🚀</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  เริ่มต้นได้ทันที
                </h3>
                <p className="text-sm text-gray-600">
                  คลอนโปรเจกต์และรันได้เลย ไม่ต้องตั้งค่าซับซ้อน
                </p>
              </div>
            </div>

            <div
              className="card card-hover animate-slide-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="card-body text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-purple-100">
                  <span className="text-3xl">🛠️</span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  ปรับแต่งได้ง่าย
                </h3>
                <p className="text-sm text-gray-600">
                  โครงสร้างที่ยืดหยุ่น ปรับแต่งได้ตามความต้องการ
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="card mt-16 animate-bounce-in">
            <div className="card-body">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                อัพเดทข่าวสารล่าสุด
              </h3>
              <p className="mb-6 text-gray-600">
                รับข่าวสารเกี่ยวกับการอัพเดทใหม่ๆ และเทคนิคการพัฒนา
              </p>

              <div className="mx-auto max-w-md">
                <div className="flex">
                  <input
                    type="email"
                    placeholder="กรอกอีเมลของคุณ"
                    className="form-input rounded-r-none border-r-0"
                  />
                  <button className="btn btn-primary rounded-l-none px-6">
                    สมัคร
                  </button>
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  เราไม่แชร์อีเมลของคุณให้กับบุคคลที่สาม
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
