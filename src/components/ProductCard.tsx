import { Link } from "react-router-dom";
import { sampleProducts } from "../Data/products";

type Product = typeof sampleProducts[0];

type ProductCardProps = {
  product: Product;
  mode?: "webpage" | "modal";
  onOpenModal?: (id: number) => void;
  shortLength?: number;
  imgHeight?: number;
  onAddToSelection?: (product: Product) => void;
};

const ProductCard = ({
  product,
  mode = "webpage",
  onOpenModal,
  shortLength = 50,
  imgHeight = 200,
  onAddToSelection,
}: ProductCardProps) => {
  const handleClick = () => {
    if (mode === "modal" && onOpenModal) {
      onOpenModal(product.id);
    }
  };

  const shortDesc =
    product.details.length > shortLength
      ? product.details.slice(0, shortLength) + "..."
      : product.details;

  const imageStyle = {
    height: `${imgHeight}px`,
    width: "100%",
    objectFit: "contain" as const,
  };

  const cardClass =
    "block rounded-xl border border-gray-200 bg-white shadow-md hover:border-blue-500 group hover:scale-105 transition-transform overflow-hidden cursor-pointer";

  // ส่วนเนื้อหาหลัก (กดเพื่อเข้าไปดูรายละเอียด)
  const Content = (
    <div className="p-4">
      <h2 className="mt-4 font-bold">{product.productCode}</h2>
      <img
        src={product.image}
        alt={product.title}
        style={imageStyle}
        className="rounded-t-xl"
      />
      <h2 className="mt-4 font-bold">{product.title}</h2>
      <h2 className="mt-4 font-bold">{product.titleEn}</h2>
      <p className="mt-2 text-gray-700">{shortDesc}</p>
    </div>
  );

  return (
    <div className={cardClass}>
      {mode === "webpage" ? (
        <Link to={`/products/${product.id}`}>{Content}</Link>
      ) : (
        <div onClick={handleClick}>{Content}</div>
      )}

      {/* ปุ่ม Add to Selection ทำงานได้ทั้ง modal และ webpage */}
      {onAddToSelection && (
        <div className="px-4 pb-4 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={(e) => {
              e.stopPropagation(); // ป้องกันการ trigger link/modal
              onAddToSelection(product);
            }}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            เพิ่มไปยังรายการที่เลือก
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
