import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { sampleProducts, Product } from "../../Data/products";

// Toast component
const Toast = ({ message, onClose }: { message: string; onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);
  return (
    <div className="fixed top-6 right-6 z-[60]">
      <div className="bg-red-600 text-white px-6 py-3 rounded shadow-lg flex items-center gap-3">
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-white font-bold">✕</button>
      </div>
    </div>
  );
};

// Confirm Modal component
const ConfirmModal = ({
  message,
  onConfirm,
  onCancel,
}: {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}) => {
  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl shadow-xl p-6 max-w-sm w-full relative">
        <h2 className="text-xl font-bold text-gray-800 mb-4">ยืนยันการลบ</h2>
        <p className="text-gray-700 mb-6">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
          >
            ยกเลิก
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
          >
            ลบข้อมูล
          </button>
        </div>
      </div>
    </div>
  );
};

type ProductDetailProps = {
  mode?: "webpage" | "modal";
  id?: string;
  onClose?: () => void;
  imgHeight?: number;
};

const requiredFields = [
  "productCode",
  "title",
  "titleEn",
  "packTh",
  "packEn",
  "categoryImage",
  "detailsTh",
  "detailsEn",
  "categoryMain",
  "categoryNameTh",
  "categoryNameEn",
  "productImage",
  "detailImage",
];

const categoryOptions = [
  "อาหารเด็ก",
  "เครื่องสำอาง",
  "ผลิตภัณฑ์ทำความสะอาด",
  "อื่น ๆ",
];

const ProductDetail = ({
  mode = "webpage",
  id,
  onClose,
  imgHeight = 300,
}: ProductDetailProps) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = id || params.id;
  const initialProduct = sampleProducts.find((p) => p.id === Number(productId));

  const [product, setProduct] = useState<Product | undefined>(initialProduct);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<any>(initialProduct);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [showConfirm, setShowConfirm] = useState(false);

  if (!product)
    return (
      <div className="p-6 text-center text-red-500 font-semibold">
ไม่พบสินค้า      
</div>
    );

  const handleChange = (field: string, value: string | File) => {
    if (value instanceof File) {
      const url = URL.createObjectURL(value);
      setFormData({ ...formData, [field]: url });
    } else {
      setFormData({ ...formData, [field]: value });
    }
  };

  const handleSave = () => {
    for (const field of requiredFields) {
      if (!formData[field] || formData[field].toString().trim() === "") {
        setToastMsg("ห้ามให้ช่องที่ต้องระบุว่าง");
        return;
      }
    }
    setProduct(formData);
    setIsEditing(false);
  };

  const confirmDelete = () => {
    setShowConfirm(true);
  };

  const handleDeleteConfirmed = () => {
    setShowConfirm(false);
    navigate("/");
  };

  const detailItem = (
    title: string,
    field: string | number | undefined,
    required = false,
    isImage = false
  ) => (
    <div className="flex flex-col p-3 border-b last:border-b-0 rounded-md bg-gray-50 hover:bg-gray-100 transition">
      <span className="text-lg font-bold text-gray-800">
        {title} {required && <span className="text-red-500">*</span>}
      </span>
      {isEditing ? (
        field === "categoryMain" ? (
          <select
            value={formData[field as string] || ""}
            onChange={(e) => handleChange(field as string, e.target.value)}
            className="mt-1 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Select Category --</option>
            {categoryOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        ) : isImage ? (
          <>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => e.target.files && handleChange(field as string, e.target.files[0])}
              className="mt-1"
            />
            {formData[field as string] && (
              <img
                src={formData[field as string]}
                alt={title}
                className="mt-2 w-full h-48 object-contain rounded-lg shadow border"
              />
            )}
          </>
        ) : (
          <input
            type="text"
            value={formData[field as string] || ""}
            onChange={(e) => handleChange(field as string, e.target.value)}
            className="mt-1 border border-gray-300 rounded px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        )
      ) : isImage ? (
        formData[field as string] && (
          <img
            src={formData[field as string]}
            alt={title}
            className="mt-2 w-full h-48 object-contain rounded-lg shadow border"
          />
        )
      ) : (
        <span className="text-gray-700 mt-1">{formData[field as string] || "-"}</span>
      )}
    </div>
  );

  const Content = (
    <div className="mt-4 space-y-6">
      {/* ข้อมูลสินค้า */}
      <div className="bg-white p-5 rounded-xl shadow-md space-y-3">
        <h2 className="text-xl font-bold text-gray-800">ข้อมูลสินค้า</h2>
        {detailItem("รหัสสินค้า", "productCode", true)}
        {detailItem("ประเภทสินค้าหลัก", "categoryMain", true)}
        {detailItem("ชื่อสินค้า ภาษาไทย", "title", true)}
        {detailItem("ชื่อสินค้า ภาษาอังกฤษ", "titleEn", true)}
        {detailItem("จำนวนบรรจุ ภาษาไทย", "packTh", true)}
        {detailItem("จำนวนบรรจุ ภาษาอังกฤษ", "packEn", true)}
      </div>

      {/* รูปภาพ */}
      <div className="bg-white p-5 rounded-xl shadow-md space-y-3">
        <h2 className="text-xl font-bold text-gray-800">รูปภาพ</h2>
        {detailItem("ภาพประเภทสินค้า", "categoryImage", true, true)}
        {detailItem("ภาพสินค้า", "productImage", true, true)}
        {detailItem("ภาพรายละเอียด", "detailImage", true, true)}
      </div>

      {/* รายละเอียดเพิ่มเติม */}
      <div className="bg-white p-5 rounded-xl shadow-md space-y-3">
        <h2 className="text-xl font-bold text-gray-800">รายละเอียดเพิ่มเติม</h2>
        {detailItem("รายละเอียด ภาษาไทย", "detailsTh", true)}
        {detailItem("รายละเอียด ภาษาอังกฤษ", "detailsEn", true)}
        {detailItem("ประเภทสินค้าย่อย", "subCategory")}
        {detailItem("ชื่อประเภทสินค้า ภาษาไทย", "categoryNameTh", true)}
        {detailItem("ชื่อประเภทสินค้า ภาษาอังกฤษ", "categoryNameEn", true)}
        {detailItem("สัดส่วนราคาต่อชิ้น", "unitPrice")}
      </div>

      {/* ปุ่ม */}
      <div className="flex gap-3 mt-4 justify-end">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
            >
              บันทึกข้อมูล
            </button>
            <button
              onClick={() => {
                setFormData(product);
                setIsEditing(false);
              }}
              className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-500 transition"
            >
              ยกเลิก
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              แก้ไขข้อมูล
            </button>
            <button
              onClick={confirmDelete}
              className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition"
            >
              ลบข้อมูล
            </button>
          </>
        )}
      </div>
    </div>
  );

  return (
    <>
      {toastMsg && <Toast message={toastMsg} onClose={() => setToastMsg(null)} />}
      {showConfirm && (
        <ConfirmModal
          message="คุณแน่ใจหรือไม่ว่าต้องการลบสินค้านี้?"
          onConfirm={handleDeleteConfirmed}
          onCancel={() => setShowConfirm(false)}
        />
      )}
      {mode === "modal" ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative max-w-2xl w-full bg-white p-6 rounded-xl shadow-xl overflow-auto max-h-full">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
              onClick={onClose || (() => navigate(-1))}
            >
              ✕
            </button>
            <h1 className="text-2xl font-bold text-gray-800">{product.title}</h1>
            {Content}
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          {Content}
          <Link
            to="/"
            className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
          >
            กลับไปยังหน้าหลัก
          </Link>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
