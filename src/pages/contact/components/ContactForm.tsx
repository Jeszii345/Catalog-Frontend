import { useState } from 'react'
import { FiSend, FiUser, FiMail, FiMessageSquare, FiTag } from 'react-icons/fi'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const categories = [
    { value: 'general', label: 'คำถามทั่วไป' },
    { value: 'technical', label: 'ปัญหาเทคนิค' },
    { value: 'feature', label: 'แนะนำฟีเจอร์' },
    { value: 'bug', label: 'รายงานข้อผิดพลาด' },
    { value: 'partnership', label: 'ความร่วมมือ' },
  ]

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submit triggered!', formData)
    setIsSubmitting(true)

    try {
      // จำลองการส่งข้อมูล
      await new Promise(resolve => setTimeout(resolve, 2000))
      console.log('Form submitted successfully:', formData)

      // รีเซ็ตฟอร์ม
      setFormData({
        name: '',
        email: '',
        subject: '',
        category: '',
        message: '',
      })
      alert('ส่งข้อความเรียบร้อยแล้ว! เราจะติดต่อกลับภายใน 24 ชั่วโมง')
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div
      className="container-custom animate-slide-in"
      style={{ animationDelay: '0.1s' }}
    >
      <div className="card h-full">
        <div className="card-body">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            ✉️ ส่งข้อความถึงเรา
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="form-group">
                <label htmlFor="name" className="form-label flex items-center">
                  <FiUser className="mr-2 h-4 w-4" />
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
                <label htmlFor="email" className="form-label flex items-center">
                  <FiMail className="mr-2 h-4 w-4" />
                  อีเมล *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="example@email.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="category"
                className="form-label flex items-center"
              >
                <FiTag className="mr-2 h-4 w-4" />
                หมวดหมู่ *
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">เลือกหมวดหมู่</option>
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label flex items-center">
                <FiMessageSquare className="mr-2 h-4 w-4" />
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
                placeholder="กรุณากรอกข้อความ... รายละเอียดมากจะช่วยให้เราตอบคำถามได้แม่นยำขึ้น"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn btn-primary btn-lg flex w-full items-center justify-center space-x-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <div className="spinner"></div>
                  <span>กำลังส่ง...</span>
                </>
              ) : (
                <>
                  <FiSend className="h-5 w-5" />
                  <span>ส่งข้อความ</span>
                </>
              )}
            </button>
          </form>

          <div className="mt-6 rounded-lg border border-blue-200 bg-blue-50 p-4">
            <div className="flex items-start space-x-3">
              <span className="text-xl text-blue-600">ℹ️</span>
              <div>
                <h4 className="mb-1 font-semibold text-blue-800">หมายเหตุ</h4>
                <ul className="space-y-1 text-sm text-blue-700">
                  <li>• เราจะตอบกลับภายใน 24 ชั่วโมงในวันทำการ</li>
                  <li>• สำหรับปัญหาเร่งด่วน แนะนำให้ติดต่อทาง Discord</li>
                  <li>
                    • กรุณาระบุรายละเอียดให้ชัดเจนเพื่อการช่วยเหลือที่รวดเร็ว
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
