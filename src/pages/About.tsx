const About = () => {
  return (
    <div className="section-padding animate-fade-in">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              เกี่ยวกับ <span className="text-gradient">React Template</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              โครงสร้างเทมเพลตที่ทันสมัยสำหรับการพัฒนาเว็บแอปพลิเคชัน React
              ที่มาพร้อมกับเครื่องมือและการตั้งค่าที่ดีที่สุด
            </p>
          </div>

          {/* Content */}
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="animate-slide-in">
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                🚀 เทคโนโลยีที่ใช้
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-primary-500"></span>
                  <strong>React 18</strong> - ไลบรารี JavaScript ที่ทันสมัย
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-primary-500"></span>
                  <strong>Vite</strong> - Build tool ที่รวดเร็วและมีประสิทธิภาพ
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-primary-500"></span>
                  <strong>TypeScript</strong> - Type safety และ developer
                  experience ที่ดี
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-primary-500"></span>
                  <strong>Tailwind CSS</strong> - Utility-first CSS framework
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-primary-500"></span>
                  <strong>React Router</strong> - Routing solution สำหรับ React
                </li>
              </ul>
            </div>

            <div
              className="animate-slide-in"
              style={{ animationDelay: '0.1s' }}
            >
              <h2 className="mb-4 text-2xl font-bold text-gray-900">
                ✨ ฟีเจอร์เด่น
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-accent-500"></span>
                  โครงสร้างโฟลเดอร์ที่เป็นมาตรฐาน
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-accent-500"></span>
                  Component library พร้อมใช้งาน
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-accent-500"></span>
                  Responsive design สำหรับทุกอุปกรณ์
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-accent-500"></span>
                  Dark mode support
                </li>
                <li className="flex items-center">
                  <span className="mr-3 h-2 w-2 rounded-full bg-accent-500"></span>
                  SEO optimized
                </li>
              </ul>
            </div>
          </div>

          {/* Mission */}
          <div className="card card-hover animate-bounce-in text-center">
            <div className="card-body">
              <h2 className="mb-4 text-3xl font-bold text-gray-900">
                🎯 พันธกิจของเรา
              </h2>
              <p className="text-lg leading-relaxed text-gray-600">
                เราต้องการช่วยให้นักพัฒนาสามารถเริ่มต้นโปรเจกต์ React
                ได้อย่างรวดเร็ว ด้วยโครงสร้างที่ดี เครื่องมือที่ทันสมัย และ best
                practices ที่ถูกต้อง
                เพื่อให้คุณสามารถโฟกัสไปที่การสร้างฟีเจอร์ที่สำคัญได้ทันที
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600">
                100+
              </div>
              <div className="text-gray-600">Components</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600">
                50+
              </div>
              <div className="text-gray-600">Pages</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600">
                24/7
              </div>
              <div className="text-gray-600">Support</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl font-bold text-primary-600">
                1k+
              </div>
              <div className="text-gray-600">Downloads</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
