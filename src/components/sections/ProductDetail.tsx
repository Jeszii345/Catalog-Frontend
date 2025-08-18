import { useParams, Link, useNavigate } from "react-router-dom";
import { sampleProducts } from "../../Data/products";

type ProductDetailProps = {
  mode?: "webpage" | "modal";
  id?: string;
  onClose?: () => void;
  imgHeight?: number;
};

const ProductDetail = ({
  mode = "webpage",
  id,
  onClose,
  imgHeight = 300,
}: ProductDetailProps) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = id || params.id;
  const product = sampleProducts.find((p) => p.id === Number(productId));

  if (!product)
    return <div className="p-6 text-center text-red-500 font-semibold">Product not found</div>;

  const imageStyle = {
    width: "100%",
    height: `${imgHeight}px`,
    objectFit: "contain" as const,
  };

  const detailItem = (label: string, value: string | number | undefined) => (
    <div className="flex justify-between p-2 border-b last:border-b-0 rounded-md bg-gray-50 hover:bg-gray-100 transition">
      <span className="font-semibold text-gray-700">{label}</span>
      <span className="text-gray-800">{value || "-"}</span>
    </div>
  );

  const Content = (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        {detailItem("รหัสสินค้า", product.productCode)}
        {detailItem("ประเภทสินค้าหลัก", product.categoryMain)}
        {detailItem("ชื่อสินค้า (ไทย)", product.title)}
        {detailItem("ชื่อสินค้า (อังกฤษ)", product.titleEn)}
        {detailItem("จำนวนบรรจุ (ไทย)", product.packTh)}
        {detailItem("จำนวนบรรจุ (อังกฤษ)", product.packEn)}
        {detailItem("รายละเอียด (ไทย)", product.detailsTh)}
        {detailItem("รายละเอียด (อังกฤษ)", product.detailsEn)}
        {detailItem("ประเภทสินค้าย่อย", product.subCategory)}
        {detailItem("ชื่อประเภทสินค้า (ไทย)", product.categoryNameTh)}
        {detailItem("ชื่อประเภทสินค้า (อังกฤษ)", product.categoryNameEn)}
        {detailItem("ราคาต่อชิ้น", product.unitPrice)}
      </div>

      <div className="space-y-4">
        <div>
          <span className="font-semibold text-gray-700">ภาพประเภทสินค้า</span>
          {product.categoryImage && (
            <img
              src={product.categoryImage}
              alt="Category"
              className="mt-2 w-full h-48 object-contain rounded-lg shadow border"
            />
          )}
        </div>

        <div>
          <span className="font-semibold text-gray-700">ภาพสินค้า</span>
          {product.productImage && (
            <img
              src={product.productImage}
              alt="Product"
              className="mt-2 w-full h-48 object-contain rounded-lg shadow border"
            />
          )}
        </div>

        <div>
          <span className="font-semibold text-gray-700">ภาพรายละเอียด</span>
          {product.detailImage && (
            <img
              src={product.detailImage}
              alt="Detail"
              className="mt-2 w-full h-48 object-contain rounded-lg shadow border"
            />
          )}
        </div>
      </div>
    </div>
  );

  if (mode === "modal") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
        <div className="relative max-w-4xl w-full bg-white p-6 rounded-xl shadow-xl overflow-auto max-h-full">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
            onClick={onClose || (() => navigate(-1))}
          >
            ✕
          </button>
          <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
          <img
            src={product.image}
            alt={product.title}
            style={imageStyle}
            className="rounded-xl shadow-md mt-4"
          />
          {Content}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800">{product.title}</h1>
      <img
        src={product.image}
        alt={product.title}
        style={imageStyle}
        className="rounded-xl shadow-md mt-4"
      />
      {Content}
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700 transition"
      >
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;
