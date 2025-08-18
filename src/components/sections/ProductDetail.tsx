import { useParams, Link, useNavigate } from "react-router-dom";
import { sampleProducts } from "../../Data/products";

type ProductDetailProps = {
  mode?: "webpage" | "modal";
  id?: string; // สำหรับ modal
  onClose?: () => void; // ปิด modal
  imgHeight?: number; // ความสูงรูป
};

const ProductDetail = ({ mode = "webpage", id, onClose, imgHeight = 300 }: ProductDetailProps) => {
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const productId = id || params.id;
  const product = sampleProducts.find((p) => p.id === Number(productId));

  if (!product) return <div className="p-6 text-center">Product not found</div>;

  const imageStyle = {
    width: "100%",
    height: `${imgHeight}px`,
    objectFit: "contain" as const, // หรือ cover ถ้าต้องการเต็มพื้นที่แล้ว crop
  };

  if (mode === "modal") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="relative max-w-2xl w-full bg-white p-6 rounded-xl shadow-lg">
          <button
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            onClick={onClose || (() => navigate(-1))}
          >
            ✕
          </button>
          <img
            src={product.image}
            alt={product.title}
            style={imageStyle}
            className="rounded-xl shadow-md"
          />
          <h1 className="mt-4 text-2xl font-bold">{product.title}</h1>
          <p className="mt-2 text-gray-700">{product.details}</p>
        </div>
      </div>
    );
  }

  // webpage
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={product.image}
        alt={product.title}
        style={imageStyle}
        className="rounded-xl shadow-md"
      />
      <h1 className="mt-6 text-3xl font-bold">{product.title}</h1>
      <p className="mt-4 text-lg text-gray-700">{product.details}</p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
      >
        Back to Products
      </Link>
    </div>
  );
};

export default ProductDetail;
