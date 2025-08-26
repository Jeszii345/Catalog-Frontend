import { useState } from "react";
import { sampleProducts, Product } from "../../Data/products";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import ProductDetail from "./ProductDetail";
import ProductSelectionModal from "./ProductSelectionModal";
import AddProductModal from "./AddProductModal";
import ViewModeToggle from "./ViewModeToggle";
import ProductGrid from "./ProductGrid";
import ProductEdit from "./ProductEdit"; // หรือ ProductEditModal

// --- ตัวเลือกประเภทสินค้าหลัก ---
const categoryOptions = [
  "อาหารเด็ก",
  "เครื่องสำอาง",
  "ผลิตภัณฑ์ทำความสะอาด",
  "อื่น ๆ",
];

const ProductList = () => {
  const [viewMode, setViewMode] = useState<"webpage" | "modal">("webpage");
  const [modalProductId, setModalProductId] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showSelectionModal, setShowSelectionModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [editingId, setEditingId] = useState<number | null>(null);

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

  const [searchText, setSearchText] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

  // ฟิลเตอร์สินค้า
  const filteredProducts = products.filter((product) => {
    const search = searchText.trim().toLowerCase();
    const matchSearch =
      (product.productCode?.toString().toLowerCase().includes(search) ?? false) ||
      product.title.toLowerCase().includes(search);

    const matchMain = mainCategory ? product.categoryMain === mainCategory : true;
    const matchSub = subCategory ? product.subCategory === subCategory : true;

    return matchSearch && matchMain && matchSub;
  });

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

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="ค้นหาด้วยรหัสสินค้า หรือชื่อสินค้า"
          value={searchText}
          onChange={e => setSearchText(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/3"
        />
        <select
          value={mainCategory}
          onChange={e => setMainCategory(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/4"
        >
          <option value="">ทุกประเภทสินค้าหลัก</option>
          {categoryOptions.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="ประเภทสินค้าย่อย"
          value={subCategory}
          onChange={e => setSubCategory(e.target.value)}
          className="border px-4 py-2 rounded w-full md:w-1/4"
        />
      </div>
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setShowAddProductModal(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 font-semibold"
        >
          ➕ เพิ่มสินค้า
        </button>
      </div>
      <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
      {selectedProducts.length > 0 && (
        <div className="mb-6 text-center">
          <button
            onClick={() => setShowSelectionModal(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 font-semibold"
          >
            รายการที่เลือก ({selectedProducts.length})
          </button>
        </div>
      )}
      <ProductGrid
        products={filteredProducts}
        viewMode={viewMode}
        onOpenModal={setModalProductId}
        onAddToSelection={handleAddToSelection}
      />
      {modalProductId && viewMode === "modal" && (
        <ProductDetail
          mode="modal"
          id={modalProductId.toString()}
          onClose={() => setModalProductId(null)}
        />
      )}
      {editingId && (
        <ProductEdit
          id={editingId.toString()}
          onClose={() => setEditingId(null)}
        />
      )}
      {showSelectionModal && (
        <ProductSelectionModal
          selectedProducts={selectedProducts}
          onClose={() => setShowSelectionModal(false)}
          onRemove={handleRemoveFromSelection}
          onPrintPDF={handlePrintPDF}
        />
      )}
      <AddProductModal
        show={showAddProductModal}
        newProduct={newProduct}
        setNewProduct={setNewProduct}
        onSubmit={handleSubmitNewProduct}
        onCancel={handleCancelAddProduct}
        categoryOptions={categoryOptions}
        renderImageUpload={renderImageUpload}
      />
    </div>
  );
};

export default ProductList;
