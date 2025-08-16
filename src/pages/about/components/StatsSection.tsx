const StatsSection = () => {
  const stats = [
    {
      number: '50+',
      label: 'Components',
      description: 'Ready-to-use components',
      icon: '🧩'
    },
    {
      number: '100%',
      label: 'Responsive',
      description: 'Works on all devices',
      icon: '📱'
    },
    {
      number: '⚡',
      label: 'Fast HMR',
      description: 'Lightning fast development',
      icon: '🚀'
    },
    {
      number: '1k+',
      label: 'Downloads',
      description: 'Trusted by developers',
      icon: '⭐'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📊 ตัวเลขที่พูดแทนเรา
            </h2>
            <p className="text-xl text-gray-600">
              ผลงานและความสำเร็จของเทมเพลตนี้
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center animate-bounce-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              🕒 Timeline การพัฒนา
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">วางแผนและวิเคราะห์</h4>
                  <p className="text-gray-600">ศึกษาความต้องการของนักพัฒนาและเลือกเทคโนโลยีที่เหมาะสม</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">สร้างโครงสร้างพื้นฐาน</h4>
                  <p className="text-gray-600">ตั้งค่า Vite, TypeScript, Tailwind CSS และเครื่องมือต่างๆ</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">พัฒนา Components</h4>
                  <p className="text-gray-600">สร้าง reusable components และ design system</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <span className="text-yellow-600 font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">ทดสอบและปรับปรุง</h4>
                  <p className="text-gray-600">ทดสอบการใช้งานและปรับปรุงตามความคิดเห็น</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsSection
