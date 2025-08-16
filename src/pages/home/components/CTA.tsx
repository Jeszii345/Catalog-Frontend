import { Link } from 'react-router-dom'
import { FiArrowRight, FiGithub, FiStar } from 'react-icons/fi'

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
                  onClick={() => console.log('GitHub button clicked!')}
                >
                  <FiGithub className="h-5 w-5" />
                  <span>View on GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Benefits Cards */}
          <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-3">
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

          {/* GitHub Stats */}
          <div className="card animate-bounce-in">
            <div className="card-body">
              <h3 className="mb-6 text-xl font-bold text-gray-900">
                💫 ชุมชนที่เติบโตอย่างรวดเร็ว
              </h3>

              <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="mb-2 flex items-center justify-center">
                    <FiStar className="mr-1 h-5 w-5 text-yellow-500" />
                    <span className="text-2xl font-bold text-gray-900">
                      1.2k
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">GitHub Stars</div>
                </div>

                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-gray-900">
                    500+
                  </div>
                  <div className="text-sm text-gray-600">Downloads</div>
                </div>

                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-gray-900">
                    50+
                  </div>
                  <div className="text-sm text-gray-600">Contributors</div>
                </div>

                <div className="text-center">
                  <div className="mb-2 text-2xl font-bold text-gray-900">
                    99%
                  </div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
