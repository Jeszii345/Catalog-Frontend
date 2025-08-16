const MissionSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="animate-slide-in">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                🎯 พันธกิจของเรา
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                เราต้องการช่วยให้นักพัฒนาสามารถเริ่มต้นโปรเจกต์ React
                ได้อย่างรวดเร็ว ด้วยโครงสร้างที่ดี เครื่องมือที่ทันสมัย และ best
                practices ที่ถูกต้อง
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                เราเชื่อว่าการมีเทมเพลตที่ดีจะช่วยให้นักพัฒนาสามารถโฟกัสไปที่การสร้าง
                ฟีเจอร์ที่สำคัญได้ทันที แทนที่จะต้องมาเสียเวลาตั้งค่าพื้นฐาน
              </p>
            </div>

            <div
              className="animate-slide-in"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="card bg-gradient-to-br from-primary-50 to-accent-50">
                <div className="card-body">
                  <h3 className="mb-4 text-xl font-bold text-gray-900">
                    💡 วิสัยทัศน์
                  </h3>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                      ให้ทุกคนเข้าถึงเครื่องมือการพัฒนาที่ดีที่สุด
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                      ลดเวลาในการ setup โปรเจกต์ใหม่
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                      ส่งเสริมการใช้ best practices
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500"></span>
                      สร้างชุมชนนักพัฒนาที่แข็งแกร่ง
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
