import React from "react";
import ProductCard from "../ProductCard";
import { Product } from "../../Data/products";

type Props = {
  products: Product[];
  viewMode: "webpage" | "modal";
  onOpenModal: (id: number) => void;
  onAddToSelection: (product: Product) => void;
};

const ProductGrid = ({
  products,
  viewMode,
  onOpenModal,
  onAddToSelection,
}: Props) => (
  <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        mode={viewMode}
        onOpenModal={onOpenModal}
        onAddToSelection={onAddToSelection}
      />
    ))}
  </div>
);

export default ProductGrid;
