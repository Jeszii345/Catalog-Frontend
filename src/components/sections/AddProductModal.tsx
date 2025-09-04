import React from "react";

type Props = {
  show: boolean;
  newProduct: any;
  setNewProduct: (data: any) => void;
  onSubmit: (e: React.FormEvent) => void;
  onCancel: () => void;
  categoryOptions: string[];
  subCategoryOptions: string[];
  renderImageUpload: (label: string, key: string) => React.ReactNode;
};

const requiredFields = [
  "id",
  "categoryMain",
  "title",
  "titleEn",
  "packTh",
  "packEn",
  "categoryImage",
  "detailsTh",
  "detailsEn",
  "categoryNameTh",
  "categoryNameEn",
  "productImage",
  "detailImage",
];

const AddProductModal = ({
  show,
  newProduct,
  setNewProduct,
  onSubmit,
  onCancel,
  categoryOptions,
  subCategoryOptions,
  renderImageUpload,
}: Props) => {
  if (!show) return null;

  const detailItem = (
    title: string,
    field: string,
    required = false,
    isImage = false
  ) => (
    <div className="flex flex-col p-3 border-b last:border-b-0 rounded-md bg-gray-50 hover:bg-gray-100 transition">
      <span className="text-lg font-bold text-gray-800">
        {title} {required && <span className="text-red-500">*</span>}
      </span>
      {isImage ? (
        renderImageUpload(title, field)
      ) : field === "categoryMain" ? (
        <select
          value={newProduct[field] || ""}
          onChange={(e) => setNewProduct({ ...newProduct, [field]: e.target.value })}
          className="mt-1 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required={required}
        >
          <option value="">-- เลือกประเภทสินค้าหลัก --</option>
          {categoryOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          value={newProduct[field] || ""}
          onChange={(e) => setNewProduct({ ...newProduct, [field]: e.target.value })}
          className="mt-1 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          required={required}
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white p-6 rounded-xl max-w-2xl w-full shadow-lg relative overflow-y-auto max-h-[90vh]">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          onClick={onCancel}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-6">เพิ่มสินค้าใหม่</h2>
        <form onSubmit={onSubmit} className="space-y-6">
          {/* ข้อมูลสินค้า */}
          <div className="bg-white p-5 rounded-xl shadow-md space-y-3">
            <h3 className="text-xl font-bold text-gray-800">ข้อมูลสินค้า</h3>
            {detailItem("รหัสสินค้า", "id", true)}
            {detailItem("ประเภทสินค้าหลัก", "categoryMain", true)}
            {detailItem("ชื่อสินค้า ภาษาไทย", "title", true)}
            {detailItem("ชื่อสินค้า ภาษาอังกฤษ", "titleEn", true)}
            {detailItem("จำนวนบรรจุ ภาษาไทย", "packTh", true)}
            {detailItem("จำนวนบรรจุ ภาษาอังกฤษ", "packEn", true)}
          </div>

          {/* รูปภาพ */}
          <div className="bg-white p-5 rounded-xl shadow-md space-y-3">
            <h3 className="text-xl font-bold text-gray-800">รูปภาพ</h3>
            {detailItem("ภาพประเภทสินค้า", "categoryImage", true, true)}
            {detailItem("ภาพสินค้า", "productImage", true, true)}
            {detailItem("ภาพรายละเอียด", "detailImage", true, true)}
          </div>

          {/* รายละเอียดเพิ่มเติม */}
          <div className="bg-white p-5 rounded-xl shadow-md space-y-3">
            <h3 className="text-xl font-bold text-gray-800">รายละเอียดเพิ่มเติม</h3>
            {detailItem("รายละเอียด ภาษาไทย", "detailsTh", true)}
            {detailItem("รายละเอียด ภาษาอังกฤษ", "detailsEn", true)}
            {detailItem("ประเภทสินค้าย่อย", "subCategory")}
            {detailItem("ชื่อประเภทสินค้า ภาษาไทย", "categoryNameTh", true)}
            {detailItem("ชื่อประเภทสินค้า ภาษาอังกฤษ", "categoryNameEn", true)}
            {detailItem("สัดส่วนราคาต่อชิ้น", "unitPrice")}
          </div>

          {/* ปุ่ม */}
          <div className="flex justify-end gap-3">
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
