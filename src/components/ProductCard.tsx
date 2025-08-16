type Product = {
  id: number;
  title: string;
  description: string;
  image?: string;
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
<div className="card card-hover animate-slide-in relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md transition-transform duration-300 w-full">      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg">
        {product.image && (
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
          {product.title}
        </h5>
        <p className="text-base font-light leading-relaxed">
          {product.description}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          type="button"
          className="rounded-lg bg-blue-500 py-3 px-6 text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
