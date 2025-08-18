import React from "react";

type Props = {
  show: boolean;
  newProduct: any;
  setNewProduct: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  categoryOptions: string[];
  renderImageUpload: (label: string, key: string) => React.ReactNode;
};

const AddProductModal = ({
  show,
  newProduct,
  setNewProduct,
  onSubmit,
  onCancel,
  categoryOptions,
  renderImageUpload,
}: Props) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 overflow-y-auto p-4">
      <div className="bg-white p-6 rounded-xl max-w-3xl w-full shadow-lg relative">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onCancel}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">เพิ่มสินค้าใหม่</h2>
        <form onSubmit={onSubmit} className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="รหัสสินค้า (ต้องระบุ)"
            value={newProduct.id}
            onChange={(e) => setNewProduct({ ...newProduct, id: e.target.value })}
            className="border p-2 rounded"
            required
          />
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
          {renderImageUpload("ภาพประเภทสินค้า", "categoryImage")}
          {renderImageUpload("ภาพสินค้า", "productImage")}
          {renderImageUpload("ภาพรายละเอียด", "detailImage")}
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
          <input
            type="text"
            placeholder="ประเภทสินค้าย่อย"
            value={newProduct.subCategory}
            onChange={(e) => setNewProduct({ ...newProduct, subCategory: e.target.value })}
            className="border p-2 rounded"
          />
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
          <input
            type="text"
            placeholder="สัดส่วนราคาต่อชิ้น"
            value={newProduct.unitPrice}
            onChange={(e) => setNewProduct({ ...newProduct, unitPrice: e.target.value })}
            className="border p-2 rounded"
          />
          <div className="col-span-2 flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onCancel}
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
  );
};

export default AddProductModal;
