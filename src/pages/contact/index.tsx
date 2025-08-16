import ContactForm from './components/ContactForm'
import ContactInfo from './components/ContactInfo'
import MapSection from './components/MapSection'
import FAQSection from './components/FAQSection'

const ContactPage = () => {
  return (
    <div className="animate-fade-in">
      {/* Header */}
      <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-accent-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              ติดต่อ<span className="text-gradient">เรา</span>
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600">
              มีคำถามหรือต้องการความช่วยเหลือ?
              เราพร้อมให้บริการและตอบทุกข้อสงสัยของคุณ
              ไม่ว่าจะเป็นเรื่องเทคนิคหรือการใช้งาน
            </p>
          </div>
        </div>
      </section>

      <div className="section-padding grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>

      <FAQSection />
      <MapSection />
    </div>
  )
}

export default ContactPage
