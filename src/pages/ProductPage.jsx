import React from "react";
import NestedCheckbox from "../components/NestedCheckbox";

export default function ProductPage() {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4">
        Manuka Honey UMF 24+ MGO 1122+
      </h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-gray-100 rounded-xl h-64 flex items-center justify-center">
          <span className="text-gray-500">[ Product Image ]</span>
        </div>

        {/* Product Info */}
        <div>
          <p className="text-gray-600 mb-4">
            Pure Manuka Honey from New Zealand with unmatched quality.
          </p>

          {/* Nested Checkbox for selecting bundles/options */}
          <NestedCheckbox />

          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
