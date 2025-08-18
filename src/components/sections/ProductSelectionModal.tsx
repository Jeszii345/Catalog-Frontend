import React from "react";
import { Product } from "../../Data/products";

type Props = {
  selectedProducts: Product[];
  onClose: () => void;
  onRemove: (id: number) => void;
  onPrintPDF: () => void;
};

const ProductSelectionModal = ({
  selectedProducts,
  onClose,
  onRemove,
  onPrintPDF,
}: Props) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
    <div className="bg-white p-6 rounded-xl max-w-2xl w-full shadow-lg relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        onClick={onClose}
      >
        ✕
      </button>
      <h2 className="text-2xl font-bold mb-4">Selected Products</h2>
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {selectedProducts.map((p) => (
          <div key={p.id} className="flex items-center gap-4 border-b pb-2">
            <img src={p.image} alt={p.title} className="w-16 h-16 object-contain rounded" />
            <div className="flex-1">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="text-gray-600 text-sm">{p.details}</p>
            </div>
            <button
              onClick={() => onRemove(p.id)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700"
        onClick={onPrintPDF}
      >
        Print PDF ({selectedProducts.length})
      </button>
    </div>
  </div>
);

export default ProductSelectionModal;
