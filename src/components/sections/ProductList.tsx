import { useState } from "react";
import ProductCard from "../ProductCard";
import ProductDetail from "./ProductDetail";
import { sampleProducts, Product } from "../../Data/products";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

// --- ตัวเลือกประเภทสินค้าหลัก ---
const categoryOptions = [
  "อาหารเด็ก",
  "เครื่องสำอาง",
  "ผลิตภัณฑ์ทำความสะอาด",
  "อื่น ๆ",
];

const ProductList = () => {
  // --- State หลัก ---
  const [viewMode, setViewMode] = useState<"webpage" | "modal">("webpage");
  const [modalProductId, setModalProductId] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showSelectionModal, setShowSelectionModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [products, setProducts] = useState<Product[]>(sampleProducts);

  // --- State สำหรับฟอร์มเพิ่มสินค้า ---
  const [newProduct, setNewProduct] = useState<any>({
    id: "",
    categoryMain: "",
    title: "",
    titleEn: "",
    packTh: "",
    packEn: "",
    categoryImage: "",
    detailsTh: "",
    detailsEn: "",
    subCategory: "",
    categoryNameTh: "",
    categoryNameEn: "",
    productImage: "",
    detailImage: "",
    unitPrice: "",
  });

  // -----------------------------
  // ฟังก์ชันหลัก
  // -----------------------------

  // เพิ่มสินค้าลงใน Selection
  const handleAddToSelection = (product: Product) => {
    setSelectedProducts((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  // ลบสินค้าจาก Selection
  const handleRemoveFromSelection = (id: number) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // พิมพ์ PDF
  const handlePrintPDF = () => {
    if (selectedProducts.length === 0) return;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Selected Products", 14, 20);

    const tableData = selectedProducts.map((p) => [p.id, p.title, p.details]);
    autoTable(doc, { startY: 30, head: [["ID", "Title", "Details"]], body: tableData });

    doc.save("selected-products.pdf");
  };

  // Submit ฟอร์มเพิ่มสินค้า
  const handleSubmitNewProduct = (e: React.FormEvent) => {
    e.preventDefault();

    const requiredFields = [
      "id", "categoryMain", "title", "titleEn", "packTh", "packEn",
      "categoryImage", "detailsTh", "detailsEn", "categoryNameTh",
      "categoryNameEn", "productImage", "detailImage",
    ];

    for (const f of requiredFields) {
      if (!newProduct[f]) {
        alert("กรุณากรอกข้อมูลที่ต้องระบุให้ครบถ้วน");
        return;
      }
    }

    const product: Product = {
      id: Number(newProduct.id),
      title: newProduct.title,
      details: newProduct.detailsTh,
      image: newProduct.productImage,
    };

    setProducts((prev) => [...prev, product]);
    handleCancelAddProduct();
  };

  // ยกเลิกฟอร์มเพิ่มสินค้า
  const handleCancelAddProduct = () => {
    setShowAddProductModal(false);
    setNewProduct({
      id: "", categoryMain: "", title: "", titleEn: "",
      packTh: "", packEn: "", categoryImage: "", detailsTh: "",
      detailsEn: "", subCategory: "", categoryNameTh: "",
      categoryNameEn: "", productImage: "", detailImage: "",
      unitPrice: "",
    });
  };

  // ฟังก์ชัน render สำหรับ Upload + Preview รูปภาพ
  const renderImageUpload = (label: string, key: string) => (
    <div className="col-span-2">
      <label className="block text-sm font-medium mb-1">{label} *</label>

      {newProduct[key] && (
        <img
          src={newProduct[key]}
          alt="Preview"
          className="mt-2 w-48 h-48 object-contain rounded border"
        />
      )}

      <div className="mt-2">
        <button
          type="button"
          onClick={() => document.getElementById(key)?.click()}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
        >
          Choose File
        </button>

        <input
          id={key}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setNewProduct({ ...newProduct, [key]: reader.result });
              };
              reader.readAsDataURL(file);
            }
          }}
          required
        />
      </div>
    </div>
  );

  // -----------------------------
  // JSX
  // -----------------------------
  return (
    <div className="max-w-7xl mx-auto p-6">

      {/* ปุ่มเพิ่มสินค้า */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowAddProductModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
        >
          ➕ เพิ่มสินค้า
        </button>
      </div>

      {/* Toggle โหมด Webpage / Modal */}
      <div className="flex justify-center mb-6 gap-4">
        <button
          className={`px-4 py-2 rounded ${viewMode === "webpage" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setViewMode("webpage")}
        >
          Webpage
        </button>
        <button
          className={`px-4 py-2 rounded ${viewMode === "modal" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setViewMode("modal")}
        >
          Modal
        </button>
      </div>

      {/* ปุ่มเปิดหน้าพักสินค้าที่เลือก */}
      {selectedProducts.length > 0 && (
        <div className="mb-6 text-center">
          <button
            onClick={() => setShowSelectionModal(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
          >
            View Selection ({selectedProducts.length})
          </button>
        </div>
      )}

      {/* แสดงการ์ดสินค้า */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            mode={viewMode}
            onOpenModal={setModalProductId}
            onAddToSelection={handleAddToSelection}
          />
        ))}
      </div>

      {/* Modal รายละเอียดสินค้า */}
      {modalProductId && viewMode === "modal" && (
        <ProductDetail
          mode="modal"
          id={modalProductId.toString()}
          onClose={() => setModalProductId(null)}
        />
      )}

      {/* Modal แสดงสินค้าที่เลือก */}
      {showSelectionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white p-6 rounded-xl max-w-2xl w-full shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setShowSelectionModal(false)}
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-4">Selected Products</h2>
            <div className="space-y-4 max-h-96 overflow-y-auto">
              {selectedProducts.map((p) => (
                <div key={p.id} className="flex items-center gap-4 border-b pb-2">
                  <img src={p.image} alt={p.title} className="w-16 h-16 object-contain rounded" />
                  <div className="flex-1">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.details}</p>
                  </div>
                  <button
                    onClick={() => handleRemoveFromSelection(p.id)}
                    className="text-red-500 hover:text-red-700 font-semibold"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <button
              className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
              onClick={handlePrintPDF}
            >
              Print PDF ({selectedProducts.length})
            </button>
          </div>
        </div>
      )}

      {/* Modal เพิ่มสินค้า */}
      {showAddProductModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto p-4">
          <div className="bg-white p-6 rounded-xl max-w-3xl w-full shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleCancelAddProduct}
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-6">เพิ่มสินค้าใหม่</h2>

            <form onSubmit={handleSubmitNewProduct} className="grid grid-cols-2 gap-4">
              {/* รหัสสินค้า */}
              <input
                type="text"
                placeholder="รหัสสินค้า (ต้องระบุ)"
                value={newProduct.id}
                onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
                className="border p-2 rounded"
                required
              />

              {/* Dropdown ประเภทสินค้าหลัก */}
              <select
                value={newProduct.categoryMain}
                onChange={(e) => setNewProduct({ ...newProduct, categoryMain: e.target.value })}
                className="border p-2 rounded"
                required
              >
                <option value="">-- เลือกประเภทสินค้าหลัก --</option>
                {categoryOptions.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>

              {/* ชื่อสินค้า */}
              <input
                type="text"
                placeholder="ชื่อสินค้า (TH) (ต้องระบุ)"
                value={newProduct.title}
                onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="ชื่อสินค้า (EN) (ต้องระบุ)"
                value={newProduct.titleEn}
                onChange={(e) => setNewProduct({ ...newProduct, titleEn: e.target.value })}
                className="border p-2 rounded"
                required
              />

              {/* จำนวนบรรจุ */}
              <input
                type="text"
                placeholder="จำนวนบรรจุ (TH) (ต้องระบุ)"
                value={newProduct.packTh}
                onChange={(e) => setNewProduct({ ...newProduct, packTh: e.target.value })}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="จำนวนบรรจุ (EN) (ต้องระบุ)"
                value={newProduct.packEn}
                onChange={(e) => setNewProduct({ ...newProduct, packEn: e.target.value })}
                className="border p-2 rounded"
                required
              />

              {/* Upload รูปภาพ */}
              {renderImageUpload("ภาพประเภทสินค้า", "categoryImage")}
              {renderImageUpload("ภาพสินค้า", "productImage")}
              {renderImageUpload("ภาพรายละเอียด", "detailImage")}

              {/* รายละเอียด */}
              <input
                type="text"
                placeholder="รายละเอียด (TH) (ต้องระบุ)"
                value={newProduct.detailsTh}
                onChange={(e) => setNewProduct({ ...newProduct, detailsTh: e.target.value })}
                className="border p-2 rounded col-span-2"
                required
              />
              <input
                type="text"
                placeholder="รายละเอียด (EN) (ต้องระบุ)"
                value={newProduct.detailsEn}
                onChange={(e) => setNewProduct({ ...newProduct, detailsEn: e.target.value })}
                className="border p-2 rounded col-span-2"
                required
              />

              {/* ประเภทสินค้าย่อย */}
              <input
                type="text"
                placeholder="ประเภทสินค้าย่อย"
                value={newProduct.subCategory}
                onChange={(e) => setNewProduct({ ...newProduct, subCategory: e.target.value })}
                className="border p-2 rounded"
              />

              {/* ชื่อประเภทสินค้า */}
              <input
                type="text"
                placeholder="ชื่อประเภทสินค้า (TH) (ต้องระบุ)"
                value={newProduct.categoryNameTh}
                onChange={(e) => setNewProduct({ ...newProduct, categoryNameTh: e.target.value })}
                className="border p-2 rounded"
                required
              />
              <input
                type="text"
                placeholder="ชื่อประเภทสินค้า (EN) (ต้องระบุ)"
                value={newProduct.categoryNameEn}
                onChange={(e) => setNewProduct({ ...newProduct, categoryNameEn: e.target.value })}
                className="border p-2 rounded"
                required
              />

              {/* ราคาต่อชิ้น */}
              <input
                type="text"
                placeholder="สัดส่วนราคาต่อชิ้น"
                value={newProduct.unitPrice}
                onChange={(e) => setNewProduct({ ...newProduct, unitPrice: e.target.value })}
                className="border p-2 rounded"
              />

              {/* ปุ่มยกเลิก + บันทึก */}
              <div className="col-span-2 flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCancelAddProduct}
                  className="bg-gray-300 text-black px-4 py-2 rounded-lg hover:bg-gray-400"
                >
                  ยกเลิก
                </button>
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                  บันทึกสินค้า
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};

export default ProductList;
