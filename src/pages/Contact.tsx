import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="section-padding animate-fade-in">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl">
          {/* Header */}
          <div className="mb-16 text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              ติดต่อ<span className="text-gradient">เรา</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              มีคำถามหรือต้องการความช่วยเหลือ?
              เราพร้อมให้บริการและตอบทุกข้อสงสัยของคุณ
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="animate-slide-in">
              <div className="card h-full">
                <div className="card-body">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">
                    ข้อมูลการติดต่อ
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary-100">
                        <FiMail className="h-6 w-6 text-primary-600" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-gray-900">
                          อีเมล
                        </h3>
                        <p className="text-gray-600">
                          support@reacttemplate.com
                        </p>
                        <p className="text-gray-600">info@reacttemplate.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-accent-100">
                        <FiPhone className="h-6 w-6 text-accent-600" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-gray-900">
                          โทรศัพท์
                        </h3>
                        <p className="text-gray-600">+66 2 123 4567</p>
                        <p className="text-gray-600">+66 8 1234 5678</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-secondary-100">
                        <FiMapPin className="h-6 w-6 text-secondary-600" />
                      </div>
                      <div>
                        <h3 className="mb-1 font-semibold text-gray-900">
                          ที่อยู่
                        </h3>
                        <p className="text-gray-600">
                          123 ถนนเทคโนโลยี
                          <br />
                          แขวงนวัตกรรม เขตพัฒนา
                          <br />
                          กรุงเทพมหานคร 10110
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-gray-200 pt-6">
                    <h3 className="mb-3 font-semibold text-gray-900">
                      เวลาทำการ
                    </h3>
                    <div className="space-y-1 text-gray-600">
                      <p>จันทร์ - ศุกร์: 9:00 - 18:00</p>
                      <p>เสาร์: 9:00 - 12:00</p>
                      <p>อาทิตย์: ปิด</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className="animate-slide-in"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="card h-full">
                <div className="card-body">
                  <h2 className="mb-6 text-2xl font-bold text-gray-900">
                    ส่งข้อความถึงเรา
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          ชื่อ-นามสกุล *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="กรุณากรอกชื่อ-นามสกุล"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          อีเมล *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="กรุณากรอกอีเมล"
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        หัวข้อ *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        placeholder="กรุณากรอกหัวข้อ"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        ข้อความ *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="form-input resize-none"
                        placeholder="กรุณากรอกข้อความ..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-lg flex w-full items-center justify-center space-x-2"
                    >
                      <FiSend className="h-5 w-5" />
                      <span>ส่งข้อความ</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16 animate-bounce-in">
            <div className="card">
              <div className="card-body">
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">
                  ที่ตั้งของเรา
                </h2>
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200">
                  <p className="text-lg text-gray-500">🗺️ แผนที่จะแสดงที่นี่</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
