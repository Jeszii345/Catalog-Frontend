import {
  FiCode,
  FiZap,
  FiShield,
  FiLayers,
  FiSmartphone,
  FiGlobe,
} from 'react-icons/fi'

const Features = () => {
  const features = [
    {
      icon: FiZap,
      title: 'เร็วแสง',
      description: 'Vite HMR ทำให้การพัฒนารวดเร็วและมีประสิทธิภาพ',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100',
    },
    {
      icon: FiCode,
      title: 'TypeScript Ready',
      description: 'Type safety และ IntelliSense ที่สมบูรณ์แบบ',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      icon: FiLayers,
      title: 'Component-Based',
      description: 'โครงสร้าง components ที่เป็นระเบียบและใช้ซ้ำได้',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      icon: FiSmartphone,
      title: 'Responsive Design',
      description: 'ใช้งานได้ดีบนทุกอุปกรณ์ จากมือถือถึงเดสก์ท็อป',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      icon: FiShield,
      title: 'Best Practices',
      description: 'มาพร้อมกับ ESLint, Prettier และ best practices',
      color: 'text-red-600',
      bgColor: 'bg-red-100',
    },
    {
      icon: FiGlobe,
      title: 'Modern Stack',
      description: 'เทคโนโลยีล่าสุดที่อุตสาหกรรมใช้กัน',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100',
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 animate-fade-in text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              ทำไมต้องเลือก{' '}
              <span className="text-gradient">React Template</span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              เราได้รวบรวมเครื่องมือและเทคโนโลยีที่ดีที่สุดมาให้คุณ
              เพื่อให้คุณเริ่มต้นโปรเจกต์ได้ทันที
            </p>
          </div>

          {/* Features Grid */}
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="card card-hover animate-slide-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="card-body text-center">
                    <div
                      className={`h-16 w-16 ${feature.bgColor} mx-auto mb-4 flex items-center justify-center rounded-xl`}
                    >
                      <IconComponent className={`h-8 w-8 ${feature.color}`} />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Code Example */}
          <div className="animate-fade-in">
            <div className="mb-8 text-center">
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                เริ่มต้นใช้งานง่ายๆ
              </h3>
              <p className="text-gray-600">
                เพียงไม่กี่คำสั่งก็สามารถเริ่มต้นได้เลย
              </p>
            </div>

            <div className="mx-auto max-w-2xl overflow-x-auto rounded-lg bg-gray-900 p-6 text-left">
              <div className="mb-4 flex items-center space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-400">Terminal</span>
              </div>
              <div className="font-mono text-sm text-green-400">
                <div className="mb-2">
                  <span className="text-gray-400">$</span> git clone
                  your-repo/react-template.git
                </div>
                <div className="mb-2">
                  <span className="text-gray-400">$</span> cd react-template
                </div>
                <div className="mb-2">
                  <span className="text-gray-400">$</span> npm install
                </div>
                <div>
                  <span className="text-gray-400">$</span> npm run dev
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
