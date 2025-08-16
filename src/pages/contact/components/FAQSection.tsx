import { useState } from 'react'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      question: 'เทมเพลตนี้ใช้งานฟรีใช่ไหม?',
      answer:
        'ใช่ครับ เทมเพลตนี้เป็น open source และใช้งานฟรีสำหรับทั้งโปรเจกต์ส่วนตัวและเชิงพาณิชย์ ภายใต้ MIT License',
    },
    {
      question: 'ต้องมีความรู้อะไรบ้างในการใช้งาน?',
      answer:
        'ควรมีความรู้พื้นฐานเรื่อง React, TypeScript, และ Tailwind CSS จะช่วยให้ใช้งานได้อย่างมีประสิทธิภาพ แต่เราก็มีเอกสารที่ครบถ้วนสำหรับผู้เริ่มต้นด้วย',
    },
    {
      question: 'สามารถปรับแต่งการออกแบบได้ไหม?',
      answer:
        'ได้เลยครับ เทมเพลตนี้ออกแบบมาให้ปรับแต่งได้ง่าย โดยใช้ Tailwind CSS ทำให้สามารถเปลี่ยนสี ฟอนต์ หรือสไตล์ต่างๆ ได้ตามต้องการ',
    },
    {
      question: 'มีการสนับสนุนและอัพเดทไหม?',
      answer:
        'มีครับ เราอัพเดทเทมเพลตนี้อย่างสม่ำเสมอ และมีทีมสนับสนุนพร้อมตอบคำถามผ่านหลายช่องทาง รวมถึง GitHub Issues และ Discord',
    },
    {
      question: 'ใช้ได้กับ Node.js เวอร์ชันไหนบ้าง?',
      answer:
        'แนะนำ Node.js เวอร์ชัน 16 ขึ้นไป และ npm เวอร์ชัน 7 ขึ้นไป เพื่อประสิทธิภาพและความเสถียรที่ดีที่สุด',
    },
    {
      question: 'สามารถใช้กับ backend อื่นได้ไหม?',
      answer:
        'ได้ครับ นี่เป็นเทมเพลต frontend เท่านั้น สามารถใช้กับ backend API ใดก็ได้ ไม่ว่าจะเป็น Node.js, Python, PHP หรืออื่นๆ',
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 animate-fade-in text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              ❓ คำถามที่พบบ่อย
            </h2>
            <p className="text-xl text-gray-600">
              คำตอบสำหรับคำถามที่ผู้ใช้งานถามบ่อยที่สุด
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="card card-hover animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="card-body flex w-full items-center justify-between p-6 text-left"
                >
                  <h3 className="pr-4 text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openFAQ === index ? (
                    <FiChevronUp className="h-5 w-5 flex-shrink-0 text-primary-600" />
                  ) : (
                    <FiChevronDown className="h-5 w-5 flex-shrink-0 text-gray-400" />
                  )}
                </button>

                {openFAQ === index && (
                  <div className="animate-fade-in px-6 pb-6">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="leading-relaxed text-gray-600">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 animate-fade-in text-center">
            <div className="card border border-primary-200 bg-primary-50">
              <div className="card-body">
                <h3 className="mb-3 text-xl font-bold text-gray-900">
                  🤔 ไม่พบคำตอบที่ต้องการ?
                </h3>
                <p className="mb-4 text-gray-600">
                  ส่งคำถามมาให้เรา เราจะตอบคำถามและอาจจะเพิ่มเข้าไปใน FAQ
                  นี้ด้วย
                </p>
                <button className="btn btn-primary btn-md">ส่งคำถาม</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
