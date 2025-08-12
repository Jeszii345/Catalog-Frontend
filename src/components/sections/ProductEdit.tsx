// src/components/products/ProductEdit.tsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { sampleProducts, Product } from "../../Data/products";

type ProductEditProps = {
  id?: string;
  onClose?: () => void;
};

const ProductEdit = ({ id, onClose }: ProductEditProps) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = id || params.id;
  const product = sampleProducts.find((p) => p.id === Number(productId));

  const [formData, setFormData] = useState<Product | null>(null);

  useEffect(() => {
    if (product) {
      setFormData(product);
    }
  }, [product]);

  if (!formData) {
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
        ไม่พบสินค้า
      </div>
    );
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) =>
      prev ? { ...prev, [name]: value } : prev
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Updated Product:", formData);
    // TODO: ส่ง API update product ที่นี่
    if (onClose) {
      onClose();
    } else {
      navigate(-1);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-w-3xl w-full bg-white p-6 rounded-xl shadow-xl overflow-auto max-h-full">
        {/* ปุ่มปิด */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
          onClick={onClose || (() => navigate(-1))}
        >
          ✕
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          แก้ไขข้อมูลสินค้า
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* รหัสสินค้า */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              รหัสสินค้า
            </label>
            <input
              type="text"
              name="productCode"
              value={formData.productCode || ""}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* ชื่อสินค้า */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              ชื่อสินค้า (ไทย)
            </label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              ชื่อสินค้า (อังกฤษ)
            </label>
            <input
              type="text"
              name="titleEn"
              value={formData.titleEn || ""}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* รายละเอียด */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              รายละเอียด (ไทย)
            </label>
            <textarea
              name="detailsTh"
              value={formData.detailsTh || ""}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              รายละเอียด (อังกฤษ)
            </label>
            <textarea
              name="detailsEn"
              value={formData.detailsEn || ""}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* ราคา */}
          <div>
            <label className="block font-semibold text-gray-700 mb-1">
              ราคาต่อชิ้น
            </label>
            <input
              type="number"
              name="unitPrice"
              value={formData.unitPrice || ""}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>

          {/* ปุ่ม */}
          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-lg border bg-gray-100 hover:bg-gray-200"
              onClick={onClose || (() => navigate(-1))}
            >
              ยกเลิก
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              บันทึก
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
