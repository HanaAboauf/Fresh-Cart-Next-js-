import { Product } from "@/types/types";
import React from "react";
import ProductCard from "../_components/_productCard/ProductCard";
import SearchBar from "../_components/_search/_SearchBar";

export default async function Products() {
  const data = await fetch(`${process.env.API_BASE_URl}/api/vi/products`, {
    next: { revalidate: 60 },
  });
  const products = await data.json();

  return (
    <div className="bg-white">
      <h1 className="text-3xl text-center font-medium py-8 bg-white text-green-500">
        Products
      </h1>
      <SearchBar />
      <div className="flex-wrap flex py-8 gap-y-4 justify-center bg-white">
        {products?.data?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
