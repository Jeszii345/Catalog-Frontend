import { Link } from 'react-router-dom'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const Hero = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex animate-bounce-in items-center rounded-full border border-primary-200 bg-white px-4 py-2 shadow-sm">
            <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
            <span className="text-sm font-medium text-gray-700">
              🚀 React + Vite + Tailwind Ready!
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 animate-fade-in text-4xl font-bold text-gray-900 md:text-6xl lg:text-7xl">
            สร้างเว็บแอปที่
            <span className="text-gradient block">ทันสมัยและรวดเร็ว</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mb-8 max-w-3xl animate-slide-in text-xl leading-relaxed text-gray-600 md:text-2xl">
            เริ่มต้นโปรเจกต์ React ของคุณด้วยเทมเพลตที่มาพร้อมกับ
            <strong className="text-primary-600">
              {' '}
              Vite, TypeScript, Tailwind CSS{' '}
            </strong>
            และเครื่องมือที่ดีที่สุด
          </p>

          {/* CTA Buttons */}
          <div
            className="mb-12 flex animate-slide-in flex-col justify-center gap-4 sm:flex-row"
            style={{ animationDelay: '0.2s' }}
          >
            <Link
              to="/about"
              className="btn btn-primary btn-lg group flex items-center space-x-2"
            >
              <span>เริ่มต้นใช้งาน</span>
              <FiArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>

            <button
              className="btn btn-outline btn-lg flex items-center space-x-2"
              onClick={() => {
                console.log('Demo button clicked!')
                alert('ตัวอย่างการทำงานของปุ่ม!')
              }}
            >
              <FiPlay className="h-5 w-5" />
              <span>ดูตัวอย่าง</span>
            </button>
          </div>

          {/* Quick Stats */}
          <div
            className="mx-auto grid max-w-3xl animate-fade-in grid-cols-1 gap-6 md:grid-cols-3"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600">⚡</div>
              <div className="font-semibold text-gray-900">Lightning Fast</div>
              <div className="text-sm text-gray-600">Vite HMR</div>
            </div>

            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-green-600">📱</div>
              <div className="font-semibold text-gray-900">Responsive</div>
              <div className="text-sm text-gray-600">Mobile First</div>
            </div>

            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-purple-600">🎨</div>
              <div className="font-semibold text-gray-900">Beautiful UI</div>
              <div className="text-sm text-gray-600">Tailwind CSS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
