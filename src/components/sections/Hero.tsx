import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowRight, FiPlay } from 'react-icons/fi';

const getThaiGreeting = () => {
  const now = new Date();
  // เปลี่ยนเป็นเวลาไทย UTC+7
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const thaiTime = new Date(utc + 7 * 3600000);
  const hour = thaiTime.getHours();

  if (hour >= 5 && hour < 12) return 'สวัสดียามเช้า';
  if (hour >= 12 && hour < 17) return 'สวัสดียามบ่าย';
  if (hour >= 17 && hour < 21) return 'สวัสดียามเย็น';
  return 'สวัสดียามดึก';
};

const Hero = () => {
  const [greeting, setGreeting] = useState<string>('');

  useEffect(() => {
    setGreeting(getThaiGreeting());

    // อัปเดต greeting ทุกชั่วโมง เผื่อเวลาเปลี่ยน
    const interval = setInterval(() => {
      setGreeting(getThaiGreeting());
    }, 3600000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          {/* Greeting */}
          <h2 className="mb-4 animate-fade-in text-3xl font-semibold text-gray-700 md:text-4xl">
            {greeting}
          </h2>

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

            <button className="btn btn-outline btn-lg flex items-center space-x-2">
              <FiPlay className="h-5 w-5" />
              <span>ดูตัวอย่าง</span>
            </button>
          </div>

          {/* Features Grid */}
          <div
            className="mx-auto grid max-w-4xl animate-fade-in grid-cols-1 gap-6 md:grid-cols-3"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="flex items-center justify-center space-x-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100">
                <span className="font-bold text-blue-600">⚡</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Lightning Fast</h3>
                <p className="text-sm text-gray-600">Vite HMR</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                <span className="font-bold text-green-600">📱</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Responsive</h3>
                <p className="text-sm text-gray-600">Mobile First</p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-3 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-100">
                <span className="font-bold text-purple-600">🎨</span>
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900">Beautiful UI</h3>
                <p className="text-sm text-gray-600">Tailwind CSS</p>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div
            className="mt-16 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            {/* ว่างไว้หรือใส่ข้อมูลเพิ่มเติมได้ */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
