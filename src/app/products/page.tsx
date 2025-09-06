import { BaseUrl, Product } from "@/types/types";
import React from "react";
import ProductCard from "../_components/_productCard/ProductCard";
import SearchBar from "../_components/_search/_SearchBar";

export const metadata = {
  title: "Products Page",
};

export default async function Products() {
  const data = await fetch(`${BaseUrl}/api/v1/products`, {
    next: { revalidate: 60 },
  });
  const products = await data.json();

  return <>
      <div className="bg-white">
      <SearchBar />
      <div className="flex-wrap flex py-8 gap-y-4 justify-center bg-white">
        {products?.data?.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </>

  
}
