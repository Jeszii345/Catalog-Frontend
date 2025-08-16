const MapSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="mx-auto max-w-6xl animate-fade-in">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              📍 ที่ตั้งของเรา
            </h2>
            <p className="text-xl text-gray-600">
              สำนักงานหลักของเราตั้งอยู่ในใจกลางย่านเทคโนโลยี
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Map Placeholder */}
            <div className="lg:col-span-2">
              <div className="card">
                <div className="flex aspect-video items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">🗺️</div>
                    <h3 className="mb-2 text-xl font-semibold text-gray-700">
                      Interactive Map
                    </h3>
                    <p className="text-gray-500">แผนที่แบบโต้ตอบจะแสดงที่นี่</p>
                    <p className="mt-2 text-sm text-gray-400">
                      (Google Maps หรือ OpenStreetMap)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="space-y-6">
              <div className="card">
                <div className="card-body">
                  <h3 className="mb-4 text-lg font-bold text-gray-900">
                    🏢 ข้อมูลสำนักงาน
                  </h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">
                        ที่อยู่
                      </h4>
                      <p className="text-sm text-gray-600">
                        123 ถนนเทคโนโลยี
                        <br />
                        แขวงนวัตกรรม เขตพัฒนา
                        <br />
                        กรุงเทพมหานคร 10110
                      </p>
                    </div>

                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">
                        การเดินทาง
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>🚇 BTS: สถานีนวัตกรรม (ทางออก 3)</p>
                        <p>🚌 รถประจำทาง: สาย 25, 40, 185</p>
                        <p>🚗 รถยนต์: มีที่จอดรถ 50 คัน</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-1 font-semibold text-gray-900">
                        สิ่งอำนวยความสะดวก
                      </h4>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>☕ ร้านกาแฟในอาคาร</p>
                        <p>🏪 ร้านสะดวกซื้อ</p>
                        <p>🍽️ โรงอาหาร</p>
                        <p>🏧 ตู้ ATM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card border border-green-200 bg-green-50">
                <div className="card-body">
                  <h3 className="mb-3 text-lg font-bold text-green-800">
                    🕐 เวลาที่สะดวกในการติดต่อ
                  </h3>

                  <div className="space-y-2 text-sm text-green-700">
                    <div className="flex justify-between">
                      <span>จันทร์ - ศุกร์</span>
                      <span>9:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>เสาร์</span>
                      <span>9:00 - 12:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>อาทิตย์</span>
                      <span>ปิด</span>
                    </div>
                  </div>

                  <div className="mt-4 rounded border border-green-200 bg-green-100 p-3">
                    <p className="text-sm text-green-700">
                      💡 <strong>เคล็ดลับ:</strong> แนะนำให้นัดหมายล่วงหน้า
                      เพื่อให้เราได้เตรียมความพร้อมในการให้คำปรึกษา
                    </p>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="card-body text-center">
                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    📱 ดาวน์โหลดแผนที่
                  </h3>

                  <div className="space-y-2">
                    <button className="btn btn-outline btn-sm w-full">
                      📥 ดาวน์โหลด PDF แผนที่
                    </button>
                    <button className="btn btn-outline btn-sm w-full">
                      📍 เปิดใน Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Landmarks */}
          <div className="mt-12 animate-fade-in">
            <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">
              🏛️ สถานที่ใกล้เคียง
            </h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <div className="mb-2 text-3xl">🏬</div>
                <div className="font-medium text-gray-900">ห้างสรรพสินค้า</div>
                <div className="text-sm text-gray-600">200 เมตร</div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <div className="mb-2 text-3xl">🏥</div>
                <div className="font-medium text-gray-900">โรงพยาบาล</div>
                <div className="text-sm text-gray-600">500 เมตร</div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <div className="mb-2 text-3xl">🏦</div>
                <div className="font-medium text-gray-900">ธนาคาร</div>
                <div className="text-sm text-gray-600">100 เมตร</div>
              </div>

              <div className="rounded-lg bg-gray-50 p-4 text-center">
                <div className="mb-2 text-3xl">🍜</div>
                <div className="font-medium text-gray-900">ร้านอาหาร</div>
                <div className="text-sm text-gray-600">50 เมตร</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MapSection
