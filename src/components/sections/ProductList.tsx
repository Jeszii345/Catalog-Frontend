import { useState } from "react";
import ProductCard from "../ProductCard";
import ProductDetail from "./ProductDetail";
import { sampleProducts, Product } from "../../Data/products";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ProductList = () => {
  const [viewMode, setViewMode] = useState<"webpage" | "modal">("webpage");
  const [modalProductId, setModalProductId] = useState<number | null>(null);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [showSelectionModal, setShowSelectionModal] = useState(false);

  const handleAddToSelection = (product: Product) => {
    setSelectedProducts((prev) => {
      if (prev.find((p) => p.id === product.id)) return prev;
      return [...prev, product];
    });
  };

  const handlePrintPDF = () => {
    if (selectedProducts.length === 0) return;

    const doc = new jsPDF();
    doc.setFontSize(16);
    doc.text("Selected Products", 14, 20);

    const tableData = selectedProducts.map((p) => [p.id, p.title, p.details]);
    autoTable(doc, {
      startY: 30,
      head: [["ID", "Title", "Details"]],
      body: tableData,
    });

    doc.save("selected-products.pdf");
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Toggle ปุ่มเลือกโหมด */}
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
        {sampleProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            mode={viewMode}
            onOpenModal={setModalProductId} // เปิด modal ถ้าเลือกโหมด modal
            onAddToSelection={handleAddToSelection} // เพิ่มสินค้าลงหน้าพัก
          />
        ))}
      </div>

      {/* แสดง modal ของ product detail ถ้าเลือก modal */}
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
                <div key={p.id} className="flex items-center gap-4">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-16 h-16 object-contain rounded"
                  />
                  <div>
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-gray-600 text-sm">{p.details}</p>
                  </div>
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
    </div>
  );
};

export default ProductList;
