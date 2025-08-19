import { useState, useEffect } from "react";
import { Product } from "../Data/products";

type ProductEditModalProps = {
  product: Product | null;
  onClose: () => void;
  onSave: (updated: Product) => void;
};

const ProductEditModal = ({ product, onClose, onSave }: ProductEditModalProps) => {
  const [form, setForm] = useState<Product | null>(null);

  useEffect(() => {
    if (product) setForm({ ...product });
  }, [product]);

  if (!form) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    onSave(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white p-6 rounded-xl shadow-xl w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">แก้ไขสินค้า</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="border rounded p-2"
            placeholder="ชื่อสินค้า (ไทย)"
          />
          <input
            type="text"
            name="titleEn"
            value={form.titleEn}
            onChange={handleChange}
            className="border rounded p-2"
            placeholder="ชื่อสินค้า (อังกฤษ)"
          />
          <input
            type="number"
            name="unitPrice"
            value={form.unitPrice}
            onChange={handleChange}
            className="border rounded p-2"
            placeholder="ราคาต่อชิ้น"
          />
          <input
            type="text"
            name="packTh"
            value={form.packTh}
            onChange={handleChange}
            className="border rounded p-2"
            placeholder="จำนวนบรรจุ (ไทย)"
          />
          {/* เพิ่ม input อื่น ๆ ตามฟิลด์ของคุณ */}
        </div>

        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="mr-3 rounded-lg bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
          >
            ยกเลิก
          </button>
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            บันทึก
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductEditModal;
