import Hero from '@components/sections/Hero'
import ProductList from '@/components/sections/ProductList'
import CTA from '@components/sections/CTA'

const Home = () => {
  return (
    <div className="animate-fade-in">
      <Hero />
     <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center py-10">รายการสินค้า</h1>
      <ProductList />
    </div>
      <CTA />
    </div>
  )
}

export default Home
