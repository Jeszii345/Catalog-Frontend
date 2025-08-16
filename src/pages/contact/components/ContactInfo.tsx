import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiMessageCircle,
} from 'react-icons/fi'

const ContactInfo = () => {
  return (
    <div className="container-custom animate-slide-in">
      <div className="card h-full">
        <div className="card-body">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            📞 ข้อมูลการติดต่อ
          </h2>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                <FiMail className="h-6 w-6 text-primary-600" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900">อีเมล</h3>
                <p className="text-gray-600">support@reacttemplate.com</p>
                <p className="text-gray-600">info@reacttemplate.com</p>
                <p className="mt-1 text-sm text-gray-500">
                  ตอบกลับภายใน 24 ชั่วโมง
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent-100">
                <FiPhone className="h-6 w-6 text-accent-600" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900">โทรศัพท์</h3>
                <p className="text-gray-600">+66 2 123 4567</p>
                <p className="text-gray-600">+66 8 1234 5678</p>
                <p className="mt-1 text-sm text-gray-500">
                  จันทร์-ศุกร์ 9:00-18:00
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary-100">
                <FiMapPin className="h-6 w-6 text-secondary-600" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900">ที่อยู่</h3>
                <p className="text-gray-600">
                  123 ถนนเทคโนโลยี
                  <br />
                  แขวงนวัตกรรม เขตพัฒนา
                  <br />
                  กรุงเทพมหานคร 10110
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-green-100">
                <FiClock className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-gray-900">เวลาทำการ</h3>
                <div className="space-y-1 text-gray-600">
                  <p>จันทร์ - ศุกร์: 9:00 - 18:00</p>
                  <p>เสาร์: 9:00 - 12:00</p>
                  <p>อาทิตย์: ปิด</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <h3 className="mb-3 font-semibold text-gray-900">
              💬 ช่องทางการติดต่ออื่นๆ
            </h3>

            <div className="space-y-3">
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rounded-lg bg-indigo-50 p-3 transition-colors hover:bg-indigo-100"
              >
                <FiMessageCircle className="h-5 w-5 text-indigo-600" />
                <div>
                  <div className="font-medium text-gray-900">
                    Discord Community
                  </div>
                  <div className="text-sm text-gray-600">
                    สำหรับคำถามและการสนทนา
                  </div>
                </div>
              </a>

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 rounded-lg bg-gray-50 p-3 transition-colors hover:bg-gray-100"
              >
                <span className="text-xl">📝</span>
                <div>
                  <div className="font-medium text-gray-900">GitHub Issues</div>
                  <div className="text-sm text-gray-600">
                    สำหรับรายงานปัญหาหรือแนะนำฟีเจอร์
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-8 rounded-lg border border-yellow-200 bg-yellow-50 p-4">
            <div className="flex items-start space-x-3">
              <span className="text-xl text-yellow-600">💡</span>
              <div>
                <h4 className="mb-1 font-semibold text-yellow-800">เคล็ดลับ</h4>
                <p className="text-sm text-yellow-700">
                  ก่อนติดต่อเรา แนะนำให้ตรวจสอบ FAQ หรือเอกสารประกอบก่อน
                  อาจจะมีคำตอบที่คุณต้องการอยู่แล้ว!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactInfo
