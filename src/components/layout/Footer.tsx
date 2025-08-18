import { FiHeart} from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-custom">


        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-600">
              © {currentYear} React Template. สงวนลิขสิทธิ์ทุกประการ.
            </p>
            <p className="mt-2 flex items-center text-sm text-gray-600 md:mt-0">
              สร้างด้วย <FiHeart className="mx-1 h-4 w-4 text-red-500" />
              โดย Developer Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
