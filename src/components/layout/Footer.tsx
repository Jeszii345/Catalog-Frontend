import { FiHeart, FiGithub, FiTwitter, FiFacebook } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-custom">
        <div className="py-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="mb-4 flex items-center space-x-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-primary-500 to-accent-500">
                  <span className="text-sm font-bold text-white">R</span>
                </div>
                <span className="text-gradient text-xl font-bold">
                  React Template
                </span>
              </div>
              <p className="mb-4 max-w-md text-gray-600">
                โครงสร้าง React + Vite + Tailwind CSS ที่ทันสมัยและใช้งานง่าย
                สำหรับการพัฒนาเว็บแอปพลิเคชันที่รวดเร็วและมีประสิทธิภาพ
              </p>
              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-gray-600"
                >
                  <FiGithub className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-blue-500"
                >
                  <FiTwitter className="h-5 w-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-blue-600"
                >
                  <FiFacebook className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="mb-4 font-semibold text-gray-900">ลิงก์ด่วน</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-600 transition-colors hover:text-primary-600"
                  >
                    หน้าแรก
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 transition-colors hover:text-primary-600"
                  >
                    เกี่ยวกับเรา
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 transition-colors hover:text-primary-600"
                  >
                    ติดต่อเรา
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-600 transition-colors hover:text-primary-600"
                  >
                    นโยบายความเป็นส่วนตัว
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="mb-4 font-semibold text-gray-900">ทรัพยากร</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-primary-600"
                  >
                    React Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://vitejs.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-primary-600"
                  >
                    Vite Docs
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-primary-600"
                  >
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://typescript.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 transition-colors hover:text-primary-600"
                  >
                    TypeScript
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-600">
              © {currentYear} React Template. สงวนลิขสิทธิ์ทุกประการ.
            </p>
            <p className="mt-2 flex items-center text-sm text-gray-600 md:mt-0">
              สร้างด้วย <FiHeart className="mx-1 h-4 w-4 text-red-500" />
              โดย Developer Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
