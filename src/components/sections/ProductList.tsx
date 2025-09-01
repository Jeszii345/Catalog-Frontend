import { useState } from "react";
import { FiSearch, FiPlus } from "react-icons/fi";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { sampleProducts, Product } from "../../Data/products";
import ProductGrid from "./ProductGrid";
import ProductDetail from "./ProductDetail";
import ProductSelectionModal from "./ProductSelectionModal";
import AddProductModal from "./AddProductModal";
import ViewModeToggle from "./ViewModeToggle";
import ProductEdit from "./ProductEdit";

// --- ตัวเลือกประเภทสินค้าหลักและย่อย ---
const categoryOptions = ["อาหารเด็ก", "เด็กและทารก", "เครื่องสำอาง", "อื่น ๆ"];
const subCategoryOptions = ["ของใช้ส่วนตัว", "เครื่องใช้ไฟฟ้า", "อุปกรณ์สำนักงาน", "ของใช้ในบ้าน"];

const ProductList = () => {
  const [viewMode, setViewMode] = useState<"webpage" | "modal">("webpage");
  const [modalProductId, setModalProductId] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showSelectionModal, setShowSelectionModal] = useState(false);
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [products, setProducts] = useState<Product[]>(sampleProducts);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [searchText, setSearchText] = useState("");
  const [mainCategory, setMainCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");

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

  // กรองสินค้า
  const filteredProducts = products.filter((product) => {
    const search = searchText.trim().toLowerCase();
    const matchSearch =
      product.productCode?.toLowerCase().includes(search) ||
      product.title?.toLowerCase().includes(search) ||
      product.titleEn?.toLowerCase().includes(search) ||
      product.categoryMain?.toLowerCase().includes(search) ||
      product.subCategory?.toLowerCase().includes(search) ||
      product.categoryNameTh?.toLowerCase().includes(search) ||
      product.categoryNameEn?.toLowerCase().includes(search);

    const matchMainCategory = !mainCategory || product.categoryMain === mainCategory;
    const matchSubCategory = !subCategory || product.subCategory === subCategory;

    return matchSearch && matchMainCategory && matchSubCategory;
  });

  // ---------------- Event Handlers ----------------
  const handleAddToSelection = (product: Product) => {
    setSelectedProducts((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const handleRemoveFromSelection = (id: number) => {
    setSelectedProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const handlePrintPDF = () => {
    if (selectedProducts.length === 0) return;
    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Selected Products", 14, 20);
    const tableData = selectedProducts.map((p) => [p.id, p.title, p.details]);
    autoTable(doc, { startY: 30, head: [["ID", "Title", "Details"]], body: tableData });
    doc.save("selected-products.pdf");
  };

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
      titleEn: newProduct.titleEn,
      details: newProduct.detailsTh,
      image: newProduct.productImage,
    };
    setProducts((prev) => [...prev, product]);
    handleCancelAddProduct();
  };

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
          className="bg-gray-100 px-4 py-2 rounded-lg hover:bg-gray-200 text-sm font-medium shadow-sm"
        >
          เลือกไฟล์
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
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">จัดการสินค้า</h1>
        <button
          onClick={() => setShowAddProductModal(true)}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-700 font-semibold transition"
        >
          <FiPlus className="text-lg" /> เพิ่มสินค้าใหม่
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="ค้นหาสินค้า (รหัส, ชื่อ, ประเภท ฯลฯ)"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full pl-10 pr-3 h-10 border rounded-lg shadow-sm text-sm
                       focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FiSearch className="text-gray-400 text-lg" />
          </div>
        </div>

        {/* Dropdown filter main */}
        <select
          value={mainCategory}
          onChange={(e) => setMainCategory(e.target.value)}
          className="h-10 border rounded-lg px-3 shadow-sm text-sm
                     focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="">-- ทุกประเภทหลัก --</option>
          {categoryOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        {/* Dropdown filter sub */}
        <select
          value={subCategory}
          onChange={(e) => setSubCategory(e.target.value)}
          className="h-10 border rounded-lg px-3 shadow-sm text-sm
                     focus:ring-2 focus:ring-blue-400 focus:outline-none"
        >
          <option value="">-- ทุกประเภทย่อย --</option>
          {subCategoryOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>

        <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
      </div>

      {/* Product Grid */}
      {filteredProducts.length > 0 ? (
        <ProductGrid
          products={filteredProducts}
          viewMode={viewMode}
          onOpenModal={setModalProductId}
          onAddToSelection={handleAddToSelection}
        />
      ) : (
        <div className="text-center py-16 text-gray-500 border rounded-xl shadow-sm">
          ไม่พบสินค้าที่คุณค้นหา
        </div>
      )}

      {/* Modals */}
      {modalProductId && viewMode === "modal" && (
        <ProductDetail
          mode="modal"
          id={modalProductId.toString()}
          onClose={() => setModalProductId(null)}
        />
      )}
      {editingId && (
        <ProductEdit id={editingId.toString()} onClose={() => setEditingId(null)} />
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
